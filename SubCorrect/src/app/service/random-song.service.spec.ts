import { TestBed } from '@angular/core/testing';

import { RandomSongService } from './random-song.service';

describe('RandomSongService', () => {
  let service: RandomSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
