import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { TotpComponent } from './totp/totp.component';
import { TokenComponent } from './register/token.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CardsHealthcheckComponent } from './cards-healthcheck/cards-healthcheck.component';
import { ListComponent } from './cards-healthcheck/list/list.component';
import { AddeditComponent } from './cards-healthcheck/addedit/addedit.component';
import { ViewComponent } from './cards-healthcheck/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TotpComponent,
    TokenComponent,
    CardsHealthcheckComponent,
    ListComponent,
    AddeditComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
