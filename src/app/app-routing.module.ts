import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournamentComponent } from './views/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './views/edit-tournament/edit-tournament.component';
import { HomeComponent } from './views/home/home.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', 
  component: HomeComponent, data: { title: 'Home' },
  },
  { path: 'tournamentsList', component: TournamentComponent, data: { title: 'Tournament' } },
  { path: 'displayAddTournament', component: AddTournamentComponent, data: { title: 'Add Tournament' }, canActivate:[AuthGuard] },
  // { path: 'displayEditTournament', component: EditTournamentComponent, data: { title: 'edit Tournament' } },
  { path: 'tournamentsList/:mode', component: EditTournamentComponent,canActivate:[AuthGuard] },
  { path: 'tournamentsList/edit/:id', component: EditTournamentComponent , canActivate:[AuthGuard]},
  { path: 'tournamentsList', component: TournamentComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
