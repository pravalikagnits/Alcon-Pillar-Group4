import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HeaderComponent } from './views/partials/header/header.component';
import { FooterComponent } from './views/partials/footer/footer.component';
import { ModelModule } from './model/model.module';
import { AddTournamentComponent } from './views/add-tournament/add-tournament.component';
import { FormsModule } from '@angular/forms';
import { EditTournamentComponent } from './views/edit-tournament/edit-tournament.component';
import { JwtModule } from '@auth0/angular-jwt';
export function jwtTokenGetter(): string|any
{
  localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AddTournamentComponent,
    EditTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
