import { TestBed } from '@angular/core/testing';

import { NoauthGuardService } from './noauth-guard.service';

describe('NoauthGuardService', () => {
  let service: NoauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
