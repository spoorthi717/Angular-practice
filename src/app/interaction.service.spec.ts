import { TestBed } from '@angular/core/testing';

import { IntercationService } from './interaction.service';

describe('InteractionService', () => {
  let service: IntercationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});