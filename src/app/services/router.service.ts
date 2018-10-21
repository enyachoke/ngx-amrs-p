import { ModuleData } from './../models/module.model';
import { Router, Route } from '@angular/router';
import { Injectable, Compiler } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RouterService {
    navigationRoutes: any[] = [];
    existingRoutes: BehaviorSubject<any[]>;
    constructor(private router: Router, private compiler: Compiler, private http: HttpClient) {
        this.existingRoutes = new BehaviorSubject<Route[]>([]);
    }

    private get routes(): Route[] {
        var routesToReturn = this.router.config;
        return routesToReturn.filter(x => x.path !== "");
    }

    createAndRegisterRoute(moduleToRegister: ModuleData, exports: any) {
        console.log('Module',moduleToRegister);
        let route: Route = {
            path: moduleToRegister.path,
            loadChildren: () => exports[`${moduleToRegister.moduleName}`]
        };
        this.navigationRoutes.push(moduleToRegister);
        this.registerRoute(route);
    }

    routeIsRegistered(path: string) {
        return this.router.config.filter(r => r.path === path).length > 0;
    }

    registerRoute(route: Route) {
        if (this.routeIsRegistered(route.path)) return;
        let patientDashboard = this.router.config.find((route) => {
            if (route) {
                return route.path === 'patient-dashboard/:patient_uuid';
            }
            return false;
        });
        if (patientDashboard) {
            var index = patientDashboard.children.map(function (route) { return route.path; }).indexOf('**');
            patientDashboard.children.push(route);
            patientDashboard.children.push(patientDashboard.children.splice(index, 1)[0]);
        }
        this.router.config.push(route);
        this.updateRouteConfig(this.router.config);
    }

    unRegisterRoute(path: string) {
        console.log("Unregister", path);
        this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
    }

    private updateRouteConfig(config) {
        this.router.resetConfig(config);
        let patientDashboard = this.router.config.find((route) => {
            if (route) {
                return route.path === 'patient-dashboard/:patient_uuid';
            }
            return false;
        });
        
        let result = [...new Set(this.navigationRoutes)];
        this.existingRoutes.next(result);
    }


}