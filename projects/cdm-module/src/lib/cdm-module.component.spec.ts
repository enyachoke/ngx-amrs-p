import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmModuleComponent } from './cdm-module.component';

describe('CdmModuleComponent', () => {
  let component: CdmModuleComponent;
  let fixture: ComponentFixture<CdmModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdmModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdmModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
