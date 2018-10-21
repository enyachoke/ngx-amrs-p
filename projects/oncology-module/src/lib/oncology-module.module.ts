import { NgModule } from '@angular/core';
import { OncologyModuleComponent } from './oncology-module.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: OncologyModuleComponent
      }])
  ],
  declarations: [OncologyModuleComponent],
  exports: [OncologyModuleComponent]
})
export class OncologyModuleModule { }
