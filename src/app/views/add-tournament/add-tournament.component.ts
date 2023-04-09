import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament.model';
import { TournamentRepository } from 'src/app/model/tournament.repository';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  editMode: boolean = false;
  tournament: Tournament = new Tournament();
  constructor(private repository: TournamentRepository, private router: Router, tournament: Tournament, activeRoute: ActivatedRoute, private tournamentService: TournamentService) {

    this.editMode = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editMode) {
      repository
        .getTournament(activeRoute.snapshot.params['_id'])
        .subscribe((data) => (this.tournament = data));
    }
  }
  ngOnInit(): void {
  }
  addTournament(form: NgForm) {
    if (form.valid) {
      this.repository.addTournament(this.tournament).subscribe(data => {
        console.log(data);
        if (data) {
          this.tournamentService.getTournamentList();

          this.router.navigateByUrl("/tournamentsList");
        }
      });
    }
    return;
    // this.router.navigateByUrl('/tournamentsList');
  }

}