import { Component, OnInit } from '@angular/core';
import { TeammateService } from 'src/app/services/teammate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentTeammate = null;
  usernameTeammate: string;
  firstNameTeammate: string;
  lastNameTeammate: string;
  mailTeammate: string;
  phoneTeammate: string;
  password: string;
  statusTeammate: string;
  jobTeammate: string;
  nameAgency: string;

  idTeammate = JSON.parse(localStorage.getItem('idTeammate'));

  constructor(private teammateService: TeammateService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTeammate(this.idTeammate);
  }

  getTeammate(idTeammate): void {
    this.teammateService.getTeammateById(idTeammate)
      .subscribe(
        teammate => {

          this.currentTeammate = teammate;
          this.usernameTeammate = this.currentTeammate[0].usernameTeammate;
          this.firstNameTeammate = this.currentTeammate[0].firstNameTeammate;
          this.lastNameTeammate = this.currentTeammate[0].lastNameTeammate;
          this.usernameTeammate = this.currentTeammate[0].usernameTeammate;
          this.mailTeammate = this.currentTeammate[0].mailTeammate;
          this.phoneTeammate = this.currentTeammate[0].phoneTeammate;
          this.statusTeammate = this.currentTeammate[0].statusTeammate;
          this.jobTeammate = this.currentTeammate[0].jobTeammate;
          localStorage.setItem('mailTeammate', JSON.stringify(this.mailTeammate));
          localStorage.setItem('phoneTeammate', JSON.stringify(this.phoneTeammate));
        },
        error => {
          console.log(error);
        });
  }

}
