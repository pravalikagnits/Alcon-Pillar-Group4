import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentService } from './tournament.service';

@Injectable()
export class AuthenticationService {
    constructor(private tournamentService: TournamentService) { }
    authenticate(username: string, password: string): Observable<boolean> {
        return this.tournamentService.login(username, password);
    }
    signUp(username: string, password: string, displayName: string): Observable<boolean> {
        return this.tournamentService.signUp(displayName, username, password);
    }
    get authenticated(): boolean {
        return this.tournamentService.authToken ?  true : false;
    }
    clear() {
        this.tournamentService.authToken = '';
    }
}
