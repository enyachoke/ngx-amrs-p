(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-amrs-core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('hiv-module', ['exports', '@angular/core', 'ngx-amrs-core', '@angular/router'], factory) :
    (factory((global['hiv-module'] = {}),global.ng.core,global.ngxAmrsCore,global.ng.router));
}(this, (function (exports,i0,ngxAmrsCore,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HivModuleService = /** @class */ (function () {
        function HivModuleService() {
        }
        HivModuleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HivModuleService.ctorParameters = function () { return []; };
        /** @nocollapse */ HivModuleService.ngInjectableDef = i0.defineInjectable({ factory: function HivModuleService_Factory() { return new HivModuleService(); }, token: HivModuleService, providedIn: "root" });
        return HivModuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HivModuleComponent = /** @class */ (function () {
        function HivModuleComponent(patientDashboardNagationService) {
            this.patientDashboardNagationService = patientDashboardNagationService;
        }
        /**
         * @return {?}
         */
        HivModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.patientDashboardNagationService.addToRightNavigation([
                    { path: 'general-info', icon: 'G', label: 'General Info' },
                    { path: 'standard-hiv', icon: 'H', label: 'Standard HIV' },
                    { path: 'dermatology', icon: 'H', label: 'Dermatology' },
                ]);
            };
        HivModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-hiv-module',
                        template: "\n    <div>\n      hiv-module works!\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        HivModuleComponent.ctorParameters = function () {
            return [
                { type: ngxAmrsCore.PatientDashboardNagationService }
            ];
        };
        return HivModuleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HivModuleModule = /** @class */ (function () {
        function HivModuleModule() {
        }
        HivModuleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: HivModuleComponent
                                }
                            ])
                        ],
                        declarations: [HivModuleComponent],
                        exports: [HivModuleComponent]
                    },] }
        ];
        return HivModuleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.HivModuleService = HivModuleService;
    exports.HivModuleComponent = HivModuleComponent;
    exports.HivModuleModule = HivModuleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl2LW1vZHVsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2hpdi1tb2R1bGUvbGliL2hpdi1tb2R1bGUuc2VydmljZS50cyIsIm5nOi8vaGl2LW1vZHVsZS9saWIvaGl2LW1vZHVsZS5jb21wb25lbnQudHMiLCJuZzovL2hpdi1tb2R1bGUvbGliL2hpdi1tb2R1bGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGl2TW9kdWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXRpZW50RGFzaGJvYXJkTmFnYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmd4LWFtcnMtY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaGl2LW1vZHVsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIGhpdi1tb2R1bGUgd29ya3MhXG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgSGl2TW9kdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnREYXNoYm9hcmROYWdhdGlvblNlcnZpY2U6IFBhdGllbnREYXNoYm9hcmROYWdhdGlvblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGF0aWVudERhc2hib2FyZE5hZ2F0aW9uU2VydmljZS5hZGRUb1JpZ2h0TmF2aWdhdGlvbihbXG4gICAgICB7IHBhdGg6ICdnZW5lcmFsLWluZm8nLCBpY29uOiAnRycsIGxhYmVsOiAnR2VuZXJhbCBJbmZvJyB9LFxuICAgICAgeyBwYXRoOiAnc3RhbmRhcmQtaGl2JywgaWNvbjogJ0gnLCBsYWJlbDogJ1N0YW5kYXJkIEhJVicgfSxcbiAgICAgIHsgcGF0aDogJ2Rlcm1hdG9sb2d5JywgaWNvbjogJ0gnLCBsYWJlbDogJ0Rlcm1hdG9sb2d5JyB9LFxuICAgIF0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIaXZNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2hpdi1tb2R1bGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgICAgcGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCBjb21wb25lbnQ6IEhpdk1vZHVsZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0hpdk1vZHVsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIaXZNb2R1bGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhpdk1vZHVsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiUGF0aWVudERhc2hib2FyZE5hZ2F0aW9uU2VydmljZSIsIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsrQkFKRDs7Ozs7OztBQ0FBO1FBYUUsNEJBQW9CLCtCQUFnRTtZQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1NBQUs7Ozs7UUFFekYscUNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtvQkFDMUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtvQkFDMUQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtpQkFDekQsQ0FBQyxDQUFDO2FBQ0o7O29CQW5CRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxzREFJVDtxQkFFRjs7Ozs7d0JBVFFDLDJDQUErQjs7O2lDQUR4Qzs7Ozs7OztBQ0FBOzs7O29CQUtDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0ksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrQkFBa0I7aUNBQzdEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM5Qjs7OEJBZkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=