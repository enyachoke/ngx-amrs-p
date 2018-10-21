import { Component, OnInit, Renderer2 } from '@angular/core';

import { RouterService } from './services/router.service';
import { ModuleService } from './services/module.service';
import { ModuleData } from './models/module.model';

// RxJS
import  { tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonService } from './shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  installedModules$: any;
    errorMessage: string;
    errorVisible = false;
  title = 'ngx-amrs';

  constructor(private router: Router, public cmnSrv: CommonService, private renderer: Renderer2) {
  }

 
  
}
