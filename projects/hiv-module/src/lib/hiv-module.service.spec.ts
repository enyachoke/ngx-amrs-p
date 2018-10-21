import { TestBed } from '@angular/core/testing';

import { HivModuleService } from './hiv-module.service';

describe('HivModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HivModuleService = TestBed.get(HivModuleService);
    expect(service).toBeTruthy();
  });
});
