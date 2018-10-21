import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAmrsCoreComponent } from './ngx-amrs-core.component';

describe('NgxAmrsCoreComponent', () => {
  let component: NgxAmrsCoreComponent;
  let fixture: ComponentFixture<NgxAmrsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAmrsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAmrsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
