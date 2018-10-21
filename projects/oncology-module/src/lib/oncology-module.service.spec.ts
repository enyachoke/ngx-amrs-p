import { TestBed } from '@angular/core/testing';

import { OncologyModuleService } from './oncology-module.service';

describe('OncologyModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OncologyModuleService = TestBed.get(OncologyModuleService);
    expect(service).toBeTruthy();
  });
});
