import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerconListComponent } from './percon-list/percon-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { WorkforceListComponent } from './workforce-list/workforce-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },  // route of nothing
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'percon-list', component: PerconListComponent },
            { path: 'user-list', component: UserListComponent },
            { path: 'workforce-list', component: WorkforceListComponent },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
