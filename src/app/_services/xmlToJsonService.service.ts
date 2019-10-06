import { TokenResponse } from './../_models/tokenresponse';
import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmlToJsonService {

  constructor() { }

  parse(xmlString: string): Observable<TokenResponse> {
// change the object type to the user?
    return new Observable<TokenResponse>(observer => {
      parseString(xmlString, ((err, result) => {
        console.log('the result in the XmlToJsonServiceService service is...');
        console.log(result);
        observer.next(result);
        observer.complete();
      }));
    });
  }

}
