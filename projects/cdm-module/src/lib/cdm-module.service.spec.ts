import { TestBed } from '@angular/core/testing';

import { CdmModuleService } from './cdm-module.service';

describe('CdmModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdmModuleService = TestBed.get(CdmModuleService);
    expect(service).toBeTruthy();
  });
});
