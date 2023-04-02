import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from './tournament.model';

@Injectable()
export class TournamentRepository {

  private tournaments: Tournament[] = [];
  constructor(private tournamentService: TournamentService) {
    this.tournamentService = tournamentService;
    tournamentService.getTournamentList().subscribe((data) => {
      this.tournaments = data;
    });
  }

  getTournaments(): Tournament[] {
    return this.tournaments;
  }

  addTournament(tournament: Tournament): Observable<Tournament> {
    return this.tournamentService.addTournament(tournament);
  }

  getTournament(id: String): Observable<Tournament> {
    return this.tournamentService.getTournament(id);
  }

  deleteTournament(tournamentId: number) {
    // return this.tournamentService.deleteTournament(tournamentId);
    this.tournamentService.deleteTournament(tournamentId).subscribe((p) => {
      this.tournaments.splice(
        this.tournaments.findIndex((p) => p._id == tournamentId),
        1
      );
    });
  }

  updateTournament(tournament: Tournament) {
    this.tournamentService.updateTournament(tournament).subscribe((p) => {
      this.tournaments.splice(
        this.tournaments.findIndex((p) => p._id == tournament._id),
        1,
        tournament
      );
    });
  }

}
