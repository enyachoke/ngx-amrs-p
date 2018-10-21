import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit{
  ngOnInit(): void {
    this.cmnSrv.dashboardState.sidebarToggle = false;
  }
  constructor(public cmnSrv: CommonService){

  }
}