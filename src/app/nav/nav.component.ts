import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

 constructor(public authService: AuthService,
             private alertify: AlertifyService,
             private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('login SUCCESS...');
    }, error => {
      console.log(error);
      this.alertify.error(error.statusText);
    }, () => {
      this.router.navigate(['/user-list']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
    this.router.navigate(['/home']);
  }

}
