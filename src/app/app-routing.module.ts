import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TotpComponent } from './totp/totp.component';
import { TokenComponent } from './register/token.component';

import { ListComponent } from './cards-healthcheck/list/list.component';
import { AddeditComponent } from './cards-healthcheck/addedit/addedit.component';
import { ViewComponent } from './cards-healthcheck/view/view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'totp', component: TotpComponent },
  { path: 'verify', component: TokenComponent },
  { path: 'cards-healthcheck', redirectTo: 'cards-healthcheck/list', pathMatch: 'full'},
  { path: 'cards-healthcheck/list', component: ListComponent },
  { path: 'cards-healthcheck/:id/view', component: ViewComponent },
  { path: 'cards-healthcheck/add', component: AddeditComponent },
  { path: 'cards-healthcheck/:id/edit', component: AddeditComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
