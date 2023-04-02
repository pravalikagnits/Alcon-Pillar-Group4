import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament.model';
import { TournamentRepository } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  constructor(private repository: TournamentRepository, private router: Router) { }

  ngOnInit(): void {
  }

  get Tournaments(): Tournament[] {
    return this.repository.getTournaments();
  }

  deleteTournament(tournamentId?: number): void {
    if (!tournamentId) return;
    this.repository.deleteTournament(tournamentId);
  }
  
}
