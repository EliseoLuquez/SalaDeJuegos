import { TestBed } from '@angular/core/testing';

import { ApiSimpsonService } from './api-simpson.service';

describe('ApiSimpsonService', () => {
  let service: ApiSimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
