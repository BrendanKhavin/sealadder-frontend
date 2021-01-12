import { TestBed } from '@angular/core/testing';

import { MovieEmotionService } from './movie-emotion.service';

describe('MovieEmotionService', () => {
  let service: MovieEmotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieEmotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
