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

 constructor(private authService: AuthService, private xmlToJsonServiceService: XmlToJsonService) { }

  ngOnInit() {
  }

  login() {
    // this.jsonTest = parseString(this.xml);
    // console.log(this.jsonTest);
    this.authService.login(this.model).subscribe(next => {
      console.log('login SUCCESS...');
      console.log(next);
      // map(res => {
      //   console.log(xml2js.parseString(next)); // Prints JSON object!
      // })
    }, error => {
      console.log('login ERROR');
      console.log(error);
    });
  }

}
