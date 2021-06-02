import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Teammate } from 'src/app/models/teammates.model';

@Injectable({
  providedIn: 'root'
})
export class TeammateService {

  teammateSubject = new Subject<Teammate[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/teammate';
  private teammates: Teammate[];

  constructor(private httpClient: HttpClient) { }

  emitTeammateSubject() {
    this.teammateSubject.next(this.teammates);
  }

  readListTeammate(){
    this.httpClient.get<Teammate[]>(`${this.baseUrl}/listTeammates.php`).subscribe(
      (reponse) => {
        this.teammates = reponse;
        this.emitTeammateSubject();
      },
      (error) => {
        console.log('erreur de lecture' + error);
      }
    );
    return this.httpClient.get<Teammate[]>(`${this.baseUrl}`);
  }

  addTeammate(teammate: Teammate) {
    this.httpClient.post(`${this.baseUrl}`, teammate).subscribe(
      ()=> {
        this.teammates.push(teammate);
        console.log('enregistrement teammate réussit');
      },
      (error) => {
        console.log('erreur de sauvegarde teammate' + error);
      }
    );
  }

  getTeammateById(idTeammate) {
    return this.httpClient.get(`${this.baseUrl}/listTeammate?idTeammate=${idTeammate}`);
  }

  switchTeammateActivate(index: number): void {
    this.teammates[index].statusTeammate = 'Activer';
    this.emitTeammateSubject();
  }

  switchNoTeammate(index: number): void {
    this.teammates[index].statusTeammate = 'Désactiver';
    this.emitTeammateSubject();
  }
}
