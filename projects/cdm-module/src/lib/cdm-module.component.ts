import { Component, OnInit } from '@angular/core';
import { PatientDashboardNagationService } from 'ngx-amrs-core';

@Component({
  selector: 'lib-cdm-module',
  template: `
    <p>
      cdm-module works!
    </p>
  `,
  styles: []
})
export class CdmModuleComponent implements OnInit {

  constructor(private patientDashboardNagationService: PatientDashboardNagationService) { }

  ngOnInit() {
    this.patientDashboardNagationService.addToRightNavigation([
      { path: 'general-info', icon: 'G', label: 'General Info' },
      { path: 'cdm-primary', icon: 'H', label: 'CDM Primary Care' }
    ]);
  }

}
