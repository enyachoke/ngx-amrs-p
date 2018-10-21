import { TestBed } from '@angular/core/testing';

import { NgxAmrsCoreService } from './ngx-amrs-core.service';

describe('NgxAmrsCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAmrsCoreService = TestBed.get(NgxAmrsCoreService);
    expect(service).toBeTruthy();
  });
});
