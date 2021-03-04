import { TestBed } from '@angular/core/testing';

import { UsaServiceService } from './usa-service.service';

describe('UsaServiceService', () => {
  let service: UsaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
