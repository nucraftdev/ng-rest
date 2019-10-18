import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { PerconListComponent } from './percon-list/percon-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { WorkforceListComponent } from './workforce-list/workforce-list.component';
import { appRoutes } from './routes';
import { UserfileService } from './_services/userfile.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      PerconListComponent,
      UserListComponent,
      WorkforceListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            // tslint:disable-next-line:object-literal-shorthand
            tokenGetter: tokenGetter,
            whitelistedDomains: [
               'centralusdtadtl03.epicorsaas.com',
               'centralusdtpilot00.epicorsaas.com'
            ],
            blacklistedRoutes: [
               'centralusdtadtl03.epicorsaas.com/TokenResource.svc',
               'centralusdtpilot00.epicorsaas.com/TokenResource.svc'
            ]
         }
      })
   ],
   providers: [
      AuthService,
      UserfileService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
