import { NgModule } from '@angular/core';
import { TournamentRepository } from './tournament.repository';
import { HttpClientModule } from "@angular/common/http";
import { TournamentService } from '../services/tournament.service';
import { FormsModule } from '@angular/forms';
import { Tournament } from './tournament.model';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  imports: [HttpClientModule, FormsModule ],
  providers: [TournamentRepository, TournamentService, Tournament, AuthenticationService]
})
export class ModelModule { }