import { TestBed } from '@angular/core/testing';

import { IconCountService } from './icon-count.service';

describe('IconCountService', () => {
  let service: IconCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
