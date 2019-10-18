import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavComponent } from './nav/nav.component';
import { PerconListComponent } from './percon-list/percon-list.component';
import { UserfileService } from './_services/userfile.service';
import { UserListComponent } from './user-list/user-list.component';
import { WorkforceListComponent } from './workforce-list/workforce-list.component';

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
      }),
      AgGridModule.withComponents([])
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
