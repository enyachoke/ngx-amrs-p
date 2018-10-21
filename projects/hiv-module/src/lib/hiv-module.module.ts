import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HivModuleComponent } from './hiv-module.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: HivModuleComponent
      }
    ])
  ],
  declarations: [HivModuleComponent],
  exports: [HivModuleComponent]
})
export class HivModuleModule { }
