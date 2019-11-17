import { TestBed } from '@angular/core/testing';

import { TransportAdService } from './transport-ad.service';

describe('TransportAdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportAdService = TestBed.get(TransportAdService);
    expect(service).toBeTruthy();
  });
});
