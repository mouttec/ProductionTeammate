import { Component, OnInit } from '@angular/core';
import { TeammateService } from 'src/app/services/teammate.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

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

  idTeammate = localStorage.getItem('idTeammate');

  constructor(private teammateService: TeammateService, private route: ActivatedRoute, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTeammate(this.idTeammate);
    this.authService.getByIdTeammate();
    console.log(this.idTeammate);
  }

  getTeammate(idTeammate): void {
    this.teammateService.getTeammateById(idTeammate)
      .subscribe(
        teammate => {
          this.currentTeammate = teammate;
          this.usernameTeammate = this.currentTeammate.usernameTeammate;
          this.firstNameTeammate = this.currentTeammate.firstNameTeammate;
          this.lastNameTeammate = this.currentTeammate.lastNameTeammate;
          this.usernameTeammate = this.currentTeammate.usernameTeammate;
          this.mailTeammate = this.currentTeammate.nameAddressPartner;
          this.phoneTeammate = this.currentTeammate.phoneTeammate;
          this.statusTeammate = this.currentTeammate.statusTeammate;
          this.jobTeammate = this.currentTeammate.jobTeammate;

        },
        error => {
          console.log(error);
        });
  }

}
