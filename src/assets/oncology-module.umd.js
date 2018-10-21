(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-amrs-core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('oncology-module', ['exports', '@angular/core', 'ngx-amrs-core', '@angular/router'], factory) :
    (factory((global['oncology-module'] = {}),global.ng.core,global.ngxAmrsCore,global.ng.router));
}(this, (function (exports,i0,ngxAmrsCore,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OncologyModuleService = /** @class */ (function () {
        function OncologyModuleService() {
        }
        OncologyModuleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OncologyModuleService.ctorParameters = function () { return []; };
        /** @nocollapse */ OncologyModuleService.ngInjectableDef = i0.defineInjectable({ factory: function OncologyModuleService_Factory() { return new OncologyModuleService(); }, token: OncologyModuleService, providedIn: "root" });
        return OncologyModuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OncologyModuleComponent = /** @class */ (function () {
        function OncologyModuleComponent(patientDashboardNagationService) {
            this.patientDashboardNagationService = patientDashboardNagationService;
        }
        /**
         * @return {?}
         */
        OncologyModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.patientDashboardNagationService.addToRightNavigation([
                    { path: 'general-oncology', icon: 'G', label: 'General Oncology' },
                    { path: 'lung-cancer-treatment', icon: 'H', label: 'Lung Cancer Treatment' },
                    { path: 'breast-cancer-treatment', icon: 'H', label: 'Breast Cancer Treatment' }
                ]);
            };
        OncologyModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-oncology-module',
                        template: "\n    <p>\n      oncology-module works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        OncologyModuleComponent.ctorParameters = function () {
            return [
                { type: ngxAmrsCore.PatientDashboardNagationService }
            ];
        };
        return OncologyModuleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OncologyModuleModule = /** @class */ (function () {
        function OncologyModuleModule() {
        }
        OncologyModuleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: OncologyModuleComponent
                                }
                            ])
                        ],
                        declarations: [OncologyModuleComponent],
                        exports: [OncologyModuleComponent]
                    },] }
        ];
        return OncologyModuleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.OncologyModuleService = OncologyModuleService;
    exports.OncologyModuleComponent = OncologyModuleComponent;
    exports.OncologyModuleModule = OncologyModuleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jb2xvZ3ktbW9kdWxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vb25jb2xvZ3ktbW9kdWxlL2xpYi9vbmNvbG9neS1tb2R1bGUuc2VydmljZS50cyIsIm5nOi8vb25jb2xvZ3ktbW9kdWxlL2xpYi9vbmNvbG9neS1tb2R1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9vbmNvbG9neS1tb2R1bGUvbGliL29uY29sb2d5LW1vZHVsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmNvbG9neU1vZHVsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGF0aWVudERhc2hib2FyZE5hZ2F0aW9uU2VydmljZSB9IGZyb20gJ25neC1hbXJzLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25jb2xvZ3ktbW9kdWxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG9uY29sb2d5LW1vZHVsZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgT25jb2xvZ3lNb2R1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudERhc2hib2FyZE5hZ2F0aW9uU2VydmljZTogUGF0aWVudERhc2hib2FyZE5hZ2F0aW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlLmFkZFRvUmlnaHROYXZpZ2F0aW9uKFtcbiAgICAgIHsgcGF0aDogJ2dlbmVyYWwtb25jb2xvZ3knLCBpY29uOiAnRycsIGxhYmVsOiAnR2VuZXJhbCBPbmNvbG9neScgfSxcbiAgICAgIHsgcGF0aDogJ2x1bmctY2FuY2VyLXRyZWF0bWVudCcsIGljb246ICdIJywgbGFiZWw6ICdMdW5nIENhbmNlciBUcmVhdG1lbnQnIH0sXG4gICAgICB7IHBhdGg6ICdicmVhc3QtY2FuY2VyLXRyZWF0bWVudCcsIGljb246ICdIJywgbGFiZWw6ICdCcmVhc3QgQ2FuY2VyIFRyZWF0bWVudCcgfVxuICAgIF0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmNvbG9neU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vb25jb2xvZ3ktbW9kdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogT25jb2xvZ3lNb2R1bGVDb21wb25lbnRcbiAgICAgIH1dKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPbmNvbG9neU1vZHVsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPbmNvbG9neU1vZHVsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgT25jb2xvZ3lNb2R1bGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIlBhdGllbnREYXNoYm9hcmROYWdhdGlvblNlcnZpY2UiLCJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7b0NBSkQ7Ozs7Ozs7QUNBQTtRQWNFLGlDQUFvQiwrQkFBZ0U7WUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztTQUFLOzs7O1FBRXpGLDBDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsK0JBQStCLENBQUMsb0JBQW9CLENBQUM7b0JBQ3hELEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO29CQUNsRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUU7aUJBQ2pGLENBQUMsQ0FBQzthQUNKOztvQkFuQkZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixRQUFRLEVBQUUsdURBSVQ7cUJBRUY7Ozs7O3dCQVZRQywyQ0FBK0I7OztzQ0FEeEM7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVksQ0FBQyxRQUFRLENBQUM7Z0NBQ3BCO29DQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsdUJBQXVCO2lDQUNsRTs2QkFBQyxDQUFDO3lCQUNOO3dCQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztxQkFDbkM7O21DQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9