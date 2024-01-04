import { TestBed } from '@angular/core/testing';

import { NomeservService } from './nomeserv.service';

describe('NomeservService', () => {
  let service: NomeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
