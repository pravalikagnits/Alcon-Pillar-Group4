import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tournament } from "../model/tournament.model";

const PROTOCOL = "http";
const PORT = 4000;

@Injectable()
export class TournamentService {

  baseUrl: string;
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
}
