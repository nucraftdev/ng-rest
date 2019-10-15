import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  baseUrl = 'https://centralusdtpilot00.epicorsaas.com/SaaS506Third/';

 constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('login SUCCESS...');
    }, error => {
      console.log('login ERROR');
      console.log(error);
    });
  }

}
