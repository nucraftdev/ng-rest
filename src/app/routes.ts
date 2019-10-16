import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerconListComponent } from './percon-list/percon-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { WorkforceListComponent } from './workforce-list/workforce-list.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'percon-list', component: PerconListComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'workforce-list', component: WorkforceListComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
