import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tournament } from "../model/tournament.model";
import { map, switchMap } from 'rxjs/operators';
import { User } from '../model/user.model';

const PROTOCOL = "http";
const PORT = 4000;

@Injectable()
export class TournamentService {
  [x: string]: any;

  baseUrl: string;
  authToken!: string;
  user!: User | null;

  private httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };
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

  login(username: string, pass: string): Observable<boolean> {

    return this.http
      .post<any>(this.baseUrl + 'login', {
        username: username,
        password: pass
      }, this.httpOptions)
      .pipe(
        map((response) => {
          console.log('authenticate', { response });
          this.authToken = response.success ? response.token : null;
          this.storeUserData(response.token, response.user);
          return response.success;
        })
      );
  }

  signUp(displayName: string, username: string, password: string, email: string): Observable<boolean> {
    this.loadToken();
    return this.http.post<any>(this.baseUrl + 'register', {
      displayName,
      username,
      password,
      email
    }).pipe(
      map((response) => {
        console.log('register', { response });
        this.authToken = response.success ? response.token : null;
        return response.success;
      })
    );
  }

  loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token || '';
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    this.authToken = token;

    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  clearStorageData(){
    localStorage.clear();
  }

  // login(pair: any): Observable<any> {
  //   //console.log(this.baseUrl + 'login');
  //   return this.http.post<any>(this.baseUrl + 'login', pair);
  // }

}


