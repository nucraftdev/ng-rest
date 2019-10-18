import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { TokenResponse } from './../_models/tokenresponse';
import { parseString } from 'xml2js';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  // https://centralusdtpilot00.epicorsaas.com OR https://centralusdtadtl03.epicorsaas.com/SaaS506Third/
  tokenResponse: TokenResponse;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private httpClient: HttpClient) { }

  login(model: User) {

    const httpOptions: any = {
      headers: new HttpHeaders({
        Accept: 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        username: model.username,
        password: model.password
      }),
      responseType: 'text'
    };

    return this.httpClient.post(this.baseUrl + 'TokenResource.svc/', model, httpOptions)
      .pipe(
        map((response: any) => {

          parseString(response, ((err, result) => {
            const token = result.Token.AccessToken.toString();
            localStorage.setItem('token', token);

            this.decodedToken = this.jwtHelper.decodeToken(token);
            console.log('DECODED TOKEN...');
            console.log(this.decodedToken);
            // localStorage.setItem('user', model.username);
          }));

        })
      );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }



}
