import { TestBed } from '@angular/core/testing';

import { CreateidcardService } from './createidcard.service';

describe('CreateidcardService', () => {
  let service: CreateidcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateidcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
