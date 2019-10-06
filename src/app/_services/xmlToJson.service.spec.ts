/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XmlToJsonServiceService } from './xmlToJsonService.service';

describe('Service: XmlToJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlToJsonServiceService]
    });
  });

  it('should ...', inject([XmlToJsonServiceService], (service: XmlToJsonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
