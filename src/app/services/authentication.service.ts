import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { TournamentService } from './tournament.service';

@Injectable()
export class AuthenticationService {
    constructor(private tournamentService: TournamentService) { }
    authenticate(username: string, password: string): Observable<boolean> {
        return this.tournamentService.login(username, password);
    }
    signUp(displayName: string, username: string, password: string, email: string): Observable<boolean> {
        return this.tournamentService.signUp(displayName, username, password, email);
    }
    get authenticated(): boolean {
        return this.tournamentService.authToken ? true : false;
    }
    clear() {
        this.tournamentService.authToken = '';
        this.tournamentService.clearStorageData();       
    }

    // login(pair: any): Observable<any> {
    //     return this.tournamentService.login(pair);
    // }

    storeUserData(token: any, storedUser: User): void {
        this.tournamentService.storeUserData(token, storedUser);
    }
}
