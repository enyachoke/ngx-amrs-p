import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologyModuleComponent } from './oncology-module.component';

describe('OncologyModuleComponent', () => {
  let component: OncologyModuleComponent;
  let fixture: ComponentFixture<OncologyModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OncologyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
