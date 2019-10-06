import { XmlToJsonService } from './../_services/xmlToJsonService.service';
// import { HttpClient } from '@angular/common/http';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
// import { parseString } from 'xml2js';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  baseUrl = 'https://centralusdtpilot00.epicorsaas.com/SaaS506Third/';
  // xml: string = '<Token xmlns="http://schemas.datacontract.org/2004/07/Epicor.Web" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><AccessToken>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNTcwMzcyMDM1IiwiaWF0IjoiMTU3MDM2ODQzNSIsImlzcyI6ImVwaWNvciIsImF1ZCI6ImVwaWNvciIsInVzZXJuYW1lIjoiMTg4MjItc21vcmV5In0.E6lka7KCe4TTDlnVGB9Mf0nAbpt5iBh98VfULBmv7w4</AccessToken><ExpiresIn>3600</ExpiresIn><RefreshToken/><TokenType>Bearer</TokenType></Token>';
  // jsonTest: any = {};

 constructor(private authService: AuthService, private xmlToJsonServiceService: XmlToJsonService) { }

  ngOnInit() {
  }

  login() {
    // this.jsonTest = parseString(this.xml);
    // console.log(this.jsonTest);
    this.authService.login(this.model).subscribe(next => {
      console.log('login SUCCESS');
      // console.log(next);
      // map(res => {
      //   console.log(xml2js.parseString(next)); // Prints JSON object!
      // })
    }, error => {
      console.log('login ERROR');
      console.log(error);
    });
  }

}
