import { TestBed, inject } from '@angular/core/testing';

import { ShintoCoinService } from './shinto-coin.service';

describe('ShintoCoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShintoCoinService]
    });
  });

  it('should be created', inject([ShintoCoinService], (service: ShintoCoinService) => {
    expect(service).toBeTruthy();
  }));
});
