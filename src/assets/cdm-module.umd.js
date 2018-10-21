(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-amrs-core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('cdm-module', ['exports', '@angular/core', 'ngx-amrs-core', '@angular/router'], factory) :
    (factory((global['cdm-module'] = {}),global.ng.core,global.ngxAmrsCore,global.ng.router));
}(this, (function (exports,i0,ngxAmrsCore,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CdmModuleService = /** @class */ (function () {
        function CdmModuleService() {
        }
        CdmModuleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CdmModuleService.ctorParameters = function () { return []; };
        /** @nocollapse */ CdmModuleService.ngInjectableDef = i0.defineInjectable({ factory: function CdmModuleService_Factory() { return new CdmModuleService(); }, token: CdmModuleService, providedIn: "root" });
        return CdmModuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CdmModuleComponent = /** @class */ (function () {
        function CdmModuleComponent(patientDashboardNagationService) {
            this.patientDashboardNagationService = patientDashboardNagationService;
        }
        /**
         * @return {?}
         */
        CdmModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.patientDashboardNagationService.addToRightNavigation([
                    { path: 'general-info', icon: 'G', label: 'General Info' },
                    { path: 'cdm-primary', icon: 'H', label: 'CDM Primary Care' }
                ]);
            };
        CdmModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-cdm-module',
                        template: "\n    <p>\n      cdm-module works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CdmModuleComponent.ctorParameters = function () {
            return [
                { type: ngxAmrsCore.PatientDashboardNagationService }
            ];
        };
        return CdmModuleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CdmModuleModule = /** @class */ (function () {
        function CdmModuleModule() {
        }
        CdmModuleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: CdmModuleComponent
                                }
                            ])
                        ],
                        declarations: [CdmModuleComponent],
                        exports: [CdmModuleComponent]
                    },] }
        ];
        return CdmModuleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CdmModuleService = CdmModuleService;
    exports.CdmModuleComponent = CdmModuleComponent;
    exports.CdmModuleModule = CdmModuleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RtLW1vZHVsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NkbS1tb2R1bGUvbGliL2NkbS1tb2R1bGUuc2VydmljZS50cyIsIm5nOi8vY2RtLW1vZHVsZS9saWIvY2RtLW1vZHVsZS5jb21wb25lbnQudHMiLCJuZzovL2NkbS1tb2R1bGUvbGliL2NkbS1tb2R1bGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2RtTW9kdWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmd4LWFtcnMtY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jZG0tbW9kdWxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNkbS1tb2R1bGUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENkbU1vZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlOiBQYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhdGllbnREYXNoYm9hcmROYWdhdGlvblNlcnZpY2UuYWRkVG9SaWdodE5hdmlnYXRpb24oW1xuICAgICAgeyBwYXRoOiAnZ2VuZXJhbC1pbmZvJywgaWNvbjogJ0cnLCBsYWJlbDogJ0dlbmVyYWwgSW5mbycgfSxcbiAgICAgIHsgcGF0aDogJ2NkbS1wcmltYXJ5JywgaWNvbjogJ0gnLCBsYWJlbDogJ0NETSBQcmltYXJ5IENhcmUnIH1cbiAgICBdKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RtTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZG0tbW9kdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogQ2RtTW9kdWxlQ29tcG9uZW50XG4gICAgICB9XSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2RtTW9kdWxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NkbU1vZHVsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RtTW9kdWxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJQYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlIiwiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OytCQUpEOzs7Ozs7O0FDQUE7UUFjRSw0QkFBb0IsK0JBQWdFO1lBQWhFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7U0FBSzs7OztRQUV6RixxQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixDQUFDO29CQUN4RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO29CQUMxRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7aUJBQzlELENBQUMsQ0FBQzthQUNKOztvQkFsQkZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsa0RBSVQ7cUJBRUY7Ozs7O3dCQVZRQywyQ0FBK0I7OztpQ0FEeEM7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVksQ0FBQyxRQUFRLENBQUM7Z0NBQ3BCO29DQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0JBQWtCO2lDQUM3RDs2QkFBQyxDQUFDO3lCQUNOO3dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDOUI7OzhCQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9