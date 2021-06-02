import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Partner } from 'src/app/models/partners.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partnerSubject = new Subject<any[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/partner/';
  private partners: Partner [];

  constructor(private httpClient: HttpClient) { }

  emitPartnerSubject(){
    this.partnerSubject.next(this.partners);
  }

  readListPartner() {
    return this.httpClient.get<Partner[]>(`${this.baseUrl}listPartner.php`).subscribe(
      (partners) => {
        this.partners = partners;
        this.emitPartnerSubject();
      }
    );
  }

  addPartner(partner: Partner) {
    this.httpClient.post(`${this.baseUrl}editPartner.php`, partner).subscribe(
      ()=> {
        this.partners.push(partner);
        console.log('enregistrement partner réussit');
      },
      (error) => {
        console.log('erreur de sauvegarde partner' + error);
      }
    );
  }

  getPartnerById(idPartner) {
    return this.httpClient.get(`${this.baseUrl}listPartner.php?idPartner=${idPartner}`);
  }

  getUpdateById() {
    return this.httpClient.get<Partner[]>(`${this.baseUrl}listPartner.php?idPartner=3`).subscribe(
      (partners) => {
        this.partners = partners;
      }
    );
  }

  updatePartnerProfil(partner: Partner) {
    return this.httpClient.post(`${this.baseUrl}editPartner.php`, partner).subscribe(
      () => {
        console.log('enregistrement ok');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  switchPartnerActivate(index: number): void {
    this.partners[index].statusPartner = 'Partenaire';
    this.updatePartnerProfil(this.partners[index]);
  }

  switchNoPartner(index: number): void {
    this.partners[index].statusPartner = 'Non partenaire';
    this.updatePartnerProfil(this.partners[index]);
  }
}
