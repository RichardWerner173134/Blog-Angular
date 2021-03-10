import { TestBed } from '@angular/core/testing';

import { BeitragService } from './beitrag.service';

describe('BeitragService', () => {
  let service: BeitragService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeitragService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
