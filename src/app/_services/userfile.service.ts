import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userfile } from '../_models/userfile';

@Injectable({
  providedIn: 'root'
})
export class UserfileService {
  restOfUrl = 'api/v1/Ice.BO.UserFileSvc/UserFiles' +
    '?$select=UserID%2C%20Name%2C%20EMailAddress%2C%20SecurityMgr%2C%20' +
    'UserDisabled%2C%20PasswordEmail';
  url = environment.apiUrl + this.restOfUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Userfile[]> {
    return this.http.get<Userfile[]>(this.url);
  }

  // TODO: add additional method to get one userfile record

}
