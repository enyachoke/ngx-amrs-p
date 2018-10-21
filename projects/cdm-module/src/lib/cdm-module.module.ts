import { NgModule } from '@angular/core';
import { CdmModuleComponent } from './cdm-module.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: CdmModuleComponent
      }])
  ],
  declarations: [CdmModuleComponent],
  exports: [CdmModuleComponent]
})
export class CdmModuleModule { }
