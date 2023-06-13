import { TestBed } from '@angular/core/testing';

import { AnuncioserviceService } from './anuncioservice.service';

describe('AnuncioserviceService', () => {
  let service: AnuncioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuncioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
