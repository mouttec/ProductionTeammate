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
    return this.httpClient.get<Teammate[]>(`${this.baseUrl}/listTeammates.php`).subscribe(
      (reponse) => {
        this.teammates = reponse;
        this.emitTeammateSubject();
      }
    );
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
    return this.httpClient.get(`${this.baseUrl}/listTeammates.php?idTeammate=${idTeammate}`);
  }

  switchTeammateActivate(index: number): void {
    this.teammates[index].statusTeammate = 'Activer';
    this.emitTeammateSubject();
  }

  switchNoTeammate(index: number): void {
    this.teammates[index].statusTeammate = 'Désactiver';
    this.emitTeammateSubject();
  }

  getUpdateById(idTeammate) {
    return this.httpClient.get<Teammate[]>(`${this.baseUrl}listTeammates.php?idTeammate=${idTeammate}`).subscribe(
      (teammates) => {
        this.teammates = teammates;
      }
    );
  }

  updateTeammateProfil(teammate: Teammate) {
    return this.httpClient.post(`${this.baseUrl}editTeammate.php`, teammate).subscribe(
      () => {
        this.teammates.push(teammate);
        console.log('modification des données du salarié réussit');
      },
      (error) => {
        console.log('erreur des modifications des données du salarié réussit' + error);
      }
    );
  }

  updateTeammatePassword(teammate) {
    return this.httpClient.post(`${this.baseUrl}changePasswordTeammate.php`, teammate).subscribe(
      () => {
        this.teammates.push(teammate);
        console.log('modification du mot de passe réussit');
      },
      (error) => {
        console.log('erreur de modification du mot de passe' + error);
      }
    );
  }
}
