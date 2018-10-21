import { Component, Input } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Input()  label;
  constructor( public cmnSrv: CommonService) { }

}
