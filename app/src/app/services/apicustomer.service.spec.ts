import { TestBed } from '@angular/core/testing';

import { ApicustomerService } from './apicustomer.service';

describe('ApicustomerService', () => {
  let service: ApicustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
