import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tournament } from "../model/tournament.model";
import { map, switchMap } from 'rxjs/operators';

const PROTOCOL = "http";
const PORT = 4000;

@Injectable()
export class TournamentService {

  baseUrl: string;
  authToken!: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getTournamentList(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.baseUrl + "tournamentList");
  }

  // displayAddTournament() {
  //   return this.http.get<Tournament>(this.baseUrl + "tournamentList/add");
  // }

  addTournament(tournament: Tournament) {
    return this.http.post<Tournament>(this.baseUrl + "tournamentsList/add", tournament);
  }

  getTournament(id: String) {
    return this.http.get<Tournament>(
      `${this.baseUrl}tournamentsList/edit/${id}`);
  }

  deleteTournament(id: number) {
    return this.http.delete<Tournament>(`${this.baseUrl}tournamentsList/delete/${id}`);
  }

  updateTournament(tournament: Tournament) {
    return this.http.post<Tournament>(`${this.baseUrl}tournamentsList/edit/${tournament._id}`, tournament);
  }

  login(email: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + 'login', {
        email: email,
        password: pass,
      })
      .pipe(
        map((response) => {
          console.log('authenticate', { response });
          this.authToken = response.success ? response.token : null;
          return response.success;
        })
      );
  }

  signUp(displayName: string, username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'register', {
      displayName,
      username,
      password,
    }).pipe(
      map((response) => {
        console.log('register', { response });
        this.authToken = response.success ? response.token : null;
        return response.success;
      })
    );
  }
}
