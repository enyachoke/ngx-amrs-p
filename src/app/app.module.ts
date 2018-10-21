import { BrowserModule } from '@angular/platform-browser';
import { NgModule, COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';
import {PatientDashboardNagationService } from 'ngx-amrs-core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PatientDashboardComponent } from './main-dashboard/patient-dashboard.component';
import { PatientSearchComponent } from './main-dashboard/patient-search.component';
import { PatientInfoComponent } from './main-dashboard/patient-info.component';
import { CdkTableModule } from '@angular/cdk/table';
import { PluginsGuard } from './services/plugins-guard';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class SharedMaterialModule { }
@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientDashboardComponent,
    PatientInfoComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedMaterialModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'patient-search', pathMatch: 'full'
      },
      {
        path: 'patient-search', component: PatientSearchComponent
      },
      {
        path: 'patient-dashboard/:patient_uuid', component: PatientDashboardComponent,
        children: [
          {
            path: '', redirectTo: 'patient-info', pathMatch: 'full'
          },
          {
            path: 'patient-info',
            component: PatientInfoComponent,
          },
          {
            path: '**',
            redirectTo: 'patient-info'
          }
        ]
      }

    ], { useHash: true })
  ],
  providers: [RouterService, ModuleService, PluginsGuard,PatientDashboardNagationService,
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
