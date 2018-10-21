import { Component, OnInit } from '@angular/core';
import { PatientDashboardNagationService } from 'ngx-amrs-core';
@Component({
  selector: 'lib-hiv-module',
  template: `
    <div>
      hiv-module works!
    </div>
  `,
  styles: []
})
export class HivModuleComponent implements OnInit {

  constructor(private patientDashboardNagationService: PatientDashboardNagationService) { }

  ngOnInit() {
    this.patientDashboardNagationService.addToRightNavigation([
      { path: 'general-info', icon: 'G', label: 'General Info' },
      { path: 'standard-hiv', icon: 'H', label: 'Standard HIV' },
      { path: 'dermatology', icon: 'H', label: 'Dermatology' },
    ]);
  }

}
