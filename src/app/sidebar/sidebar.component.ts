import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { ModuleService } from '../services/module.service';
import { RouterService } from '../services/router.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  existingRoutes$: Observable<any[]>;
  constructor(public cmnSrv: CommonService,private routerService: RouterService,
    private moduleService: ModuleService,) {  }

    ngOnInit(): void {
      this.existingRoutes$ = this.routerService.existingRoutes;
    }

}
