import { Component, OnInit } from '@angular/core';
import { PatientDashboardNagationService } from 'ngx-amrs-core';

@Component({
  selector: 'lib-oncology-module',
  template: `
    <p>
      oncology-module works!
    </p>
  `,
  styles: []
})
export class OncologyModuleComponent implements OnInit {

  constructor(private patientDashboardNagationService: PatientDashboardNagationService) { }

  ngOnInit() {
    this.patientDashboardNagationService.addToRightNavigation([
      { path: 'general-oncology', icon: 'G', label: 'General Oncology' },
      { path: 'lung-cancer-treatment', icon: 'H', label: 'Lung Cancer Treatment' },
      { path: 'breast-cancer-treatment', icon: 'H', label: 'Breast Cancer Treatment' }
    ]);
  }

}
