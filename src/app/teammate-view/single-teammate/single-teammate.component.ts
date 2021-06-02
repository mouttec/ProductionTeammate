import { Component, OnInit } from '@angular/core';
import { TeammateService } from 'src/app/services/teammate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-teammate',
  templateUrl: './single-teammate.component.html',
  styleUrls: ['./single-teammate.component.css']
})
export class SingleTeammateComponent implements OnInit {

  currentTeammate = null;
  idTeammate: number;
  firstNameTeammate: string;
  lastNameTeammate: string;
  usernameTeammate: string;
  mailTeammate: string;
  phoneTeammate: string;
  password: string;
  statusTeammate: string;
  jobTeammate: string;
  nameAgency: string;
  dateTeammate: string;

  constructor(private teammateService: TeammateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeammate(this.route.snapshot.paramMap.get('idTeammate'));
  }

  getTeammate(idTeammate) {
    this.teammateService.getTeammateById(idTeammate).subscribe(
      teammate => {
        this.currentTeammate = teammate;
        this.idTeammate = this.currentTeammate.idTeammate;
        this.firstNameTeammate = this.currentTeammate.firstNameTeammate;
        this.lastNameTeammate = this.currentTeammate.lastNameTeammate;
        this.usernameTeammate = this.currentTeammate.usernameTeammate;
        this.mailTeammate = this.currentTeammate.mailTeammate;
        this.phoneTeammate = this.currentTeammate.phoneTeammate;
        this.password = this.currentTeammate.password;
        this.statusTeammate = this.currentTeammate.statusTeammate;
        this.jobTeammate = this.currentTeammate.jobTeammate;
        this.nameAgency = this.currentTeammate.nameAgency;
        this.dateTeammate = this.currentTeammate.dateTeammate;
      },
      error => {
        console.log(error);
      }
    );
  }

}
