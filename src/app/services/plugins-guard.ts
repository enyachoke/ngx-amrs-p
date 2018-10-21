import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { RouterService } from "./router.service";
import { ModuleService } from "./module.service";
import { ModuleData } from "../models/module.model";
import { map } from "rxjs/operators";

@Injectable()
export class PluginsGuard implements CanActivate {


    constructor(private routerService: RouterService, private moduleService: ModuleService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.moduleService.loadModules().pipe(map((res) => {
            return res.forEach(x => {
                if (x.registered)
                    this.registerRoute(x);
            });
        }), map((res) => {
            return true;
        }));
    }

    private registerRoute(moduleToEnable: ModuleData) {
        // load up the umd file and register the route whenever succeeded.
        this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
            this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        }, (err) => {
            console.log(err);
        });
    }
}