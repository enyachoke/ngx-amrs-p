import { Component, OnInit, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, AfterContentInit, AfterViewChecked } from '@angular/core';

import { tap } from "rxjs/operators";
import { PatientDashboardNagationService } from 'ngx-amrs-core';

import { RouterService } from '../services/router.service';
import { ModuleService } from '../services/module.service';
import { ModuleData } from '../models/module.model';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit, AfterViewChecked {
  installedModules$: any;
  errorMessage: string;
  errorVisible = false;
  element: HTMLElement;
  existingRoutes$: Observable<Route[]>;
  rightNavigationRoutes = [];

  constructor(private routerService: RouterService,
    private moduleService: ModuleService,
    private patientDashboardNagationService: PatientDashboardNagationService,
    private cdr: ChangeDetectorRef,
    private router: Router, public cmnSrv: CommonService, private renderer: Renderer2) {
  }
  ngOnInit() {
    // please note: modules.json will alwasy return registered as false.
    this.existingRoutes$ = this.routerService.existingRoutes;
    this.installedModules$ = this.moduleService.loadModules().subscribe((res) => {
      return res.forEach(x => {
        if (x.registered)
          this.registerRoute(x);
      });
    });

    this.patientDashboardNagationService.rightNavigation.subscribe((routes) => {
      this.rightNavigationRoutes = routes;
    });

  }

  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }
  enableModule(moduleToEnable: ModuleData) {
    // enable or disable module
    if (this.isRegistered(moduleToEnable)) {
      this.routerService.unRegisterRoute(moduleToEnable.path);
    } else {
      this.registerRoute(moduleToEnable);
    }
  }

  isRegistered(moduleData: ModuleData): boolean {
    return this.routerService.routeIsRegistered(moduleData.path);
  }

  private registerRoute(moduleToEnable: ModuleData) {
    // load up the umd file and register the route whenever succeeded.
    this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
      this.routerService.createAndRegisterRoute(moduleToEnable, exports);
    }, (err) => this.showError(`${moduleToEnable.moduleName} could not be found, did you copy the umd file to ${moduleToEnable.location}?`, err));
  }

  private showError(message: string, err) {
    this.errorMessage = message;
    this.errorVisible = true;
    console.log(err); // Log error in console
  }

  closeError() {
    this.errorVisible = false;
  }
  toggleActive(event: any) {
    debugger;
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }
}