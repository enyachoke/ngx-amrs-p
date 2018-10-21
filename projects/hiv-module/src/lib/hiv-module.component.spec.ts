import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivModuleComponent } from './hiv-module.component';

describe('HivModuleComponent', () => {
  let component: HivModuleComponent;
  let fixture: ComponentFixture<HivModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
