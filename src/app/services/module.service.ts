import { Observable } from 'rxjs';
import { ModuleData } from './../models/module.model';
import { Http } from '@angular/http';
import { Injectable, Compiler, Inject, ReflectiveInjector, Injector, COMPILER_OPTIONS } from '@angular/core';



// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularMaterial from '@angular/material';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as NgxAmrsCore from 'ngx-amrs-core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

declare var SystemJS: any;

@Injectable()
export class ModuleService {
    source = `http://${window.location.host}/`;

    constructor(private compiler: Compiler, private http: HttpClient) {
        console.log('Compiler',compiler);
    }

    loadModules(): Observable<ModuleData[]> {
        return this.http.get<any[]>("./assets/modules.json")
    }

    loadModule(moduleInfo: ModuleData): Observable<any> {
        let url = this.source + moduleInfo.location;
        return this.http.get(url).pipe(
            map(res => res),
            map((source: any) => {
                const exports = {}; // this will hold module exports
                const modules = {   // this is the list of modules accessible by plugins
                    '@angular/core': AngularCore,
                    '@angular/common': AngularCommon,
                    '@angular/router': AngularRouter,
                    '@angular/platform-browser/animations': BrowserAnimations,
                    '@angular/material': AngularMaterial,
                    '@angular/ngx-amrs-core': NgxAmrsCore
                };

                // shim 'require' and eval
                const require: any = (module) => modules[module];
                eval(source);

                // Need to check if there is another solution for eval as this is described as 'Evil'

                this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`])
                //console.log(exports); // disabled as this object is cleared anyway
                return exports;
            }));
    }

    loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
        let url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
        SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
        SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
        SystemJS.set('@angular/material', SystemJS.newModule(AngularMaterial));
        SystemJS.set('ngx-amrs-core', SystemJS.newModule(NgxAmrsCore));
        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log('Module',module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log('Compiled',compiled);
                return module;
            });
        });
    }
}