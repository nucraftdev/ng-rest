/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserfileService } from './userfile.service';

describe('Service: Userfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfileService]
    });
  });

  it('should ...', inject([UserfileService], (service: UserfileService) => {
    expect(service).toBeTruthy();
  }));
});
