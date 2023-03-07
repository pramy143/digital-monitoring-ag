import { TestBed } from '@angular/core/testing';

import { CardsHealthcheckService } from './cards-healthcheck.service';

describe('CardsHealthcheckService', () => {
  let service: CardsHealthcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsHealthcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
