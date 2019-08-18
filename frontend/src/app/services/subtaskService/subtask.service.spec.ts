import { TestBed } from '@angular/core/testing';

import { SubtaskService } from './subtask.service';

describe('SubtaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtaskService = TestBed.get(SubtaskService);
    expect(service).toBeTruthy();
  });
});
