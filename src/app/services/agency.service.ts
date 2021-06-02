import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Agency } from 'src/app/models/agencies.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  agencySubject = new Subject<Agency[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/agency';
  private  agencies: Agency[];

  constructor(private httpClient: HttpClient) { }

  emitAgencySubject() {
    this.agencySubject.next(this.agencies);
  }

  readListAgency() {
    this.httpClient.get<Agency[]>(`${this.baseUrl}/listAgency.php`).subscribe(
      (reponse) => {
        this.agencies = reponse;
        this.emitAgencySubject();
      },
      (error) => {
        console.log('erreur de lecture' + error);
      }
    );
    return this.httpClient.get<Agency[]>(`${this.baseUrl}/listAgency.php`);
  }

  addAgency(agency: Agency) {
    this.httpClient.post(`${this.baseUrl}`, agency).subscribe(
      ()=> {
        this.agencies.push(agency);
        console.log('enregistrement agency réussit');
      },
      (error) => {
        console.log('erreur de sauvegarde agency' + error);
      }
    );
  }

  getAgencyById(idAgency: number) {
    return this.httpClient.get(`${this.baseUrl}/listAgency.php?idAgency=${idAgency}`);
  }

  switchAgencyOpen(index: number) {
    this.agencies[index].statusAgency = 'Ouvert';
    this.emitAgencySubject();
  }

  switchAgencyClose(index: number) {
    this.agencies[index].statusAgency = 'Fermer';
    this.emitAgencySubject();
  }
}
