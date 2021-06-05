import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teammate } from 'src/app/models/teammates.model';
import { TeammateService } from 'src/app/services/teammate.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  pickupLoc: string;

  updateProfil: FormGroup;
  teammates: Teammate[];
  teammateSubscription: Subscription;
  idTeammate = JSON.parse(localStorage.getItem('idTeammate'));
  firstNameTeammate = JSON.parse(localStorage.getItem('firstNameTeammate'));
  lastNameTeammate = JSON.parse(localStorage.getItem('lastNameTeammate'));
  usernameTeammate = JSON.parse(localStorage.getItem('usernameTeammate'));
  mailTeammate = JSON.parse(localStorage.getItem('mailTeammate'));
  phoneTeammate = JSON.parse(localStorage.getItem('phoneTeammate'));
  statusTeammate = JSON.parse(localStorage.getItem('statusTeammate'));
  idAgency = JSON.parse(localStorage.getItem('idAgency'));
  superAdmin = JSON.parse(localStorage.getItem('superAdmin'));
  jobTeammate = JSON.parse(localStorage.getItem('jobTeammate'));
  idAgencyNumber: number;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private teammateService: TeammateService ) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate []) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.readListTeammate();
    this.idAgencyNumber = Number(this.idAgency);
    this.initFormUpdateProfil();
  }

  initFormUpdateProfil() {
    this.updateProfil = this.formBuilder.group (
      {
        usernameeammate: [''],
        mailTeammate: [''],
        phoneTeammate: ['']
      }
    );
    this.updateProfil.controls['usernameTeammate'].setValue(this.usernameTeammate);
    this.updateProfil.controls['mailTeammate'].setValue(this.mailTeammate);
    this.updateProfil.controls['phoneTeammate'].setValue(this.phoneTeammate);
  }

  onSubmitFormUpdatePofil() {
    const formValue = this.updateProfil.value;
    const newProfil = new Teammate(
      formValue['usernameTeammate'],
      formValue['mailTeammate'],
      formValue['phoneTeammate']
    );
    newProfil.idTeammate = this.idTeammate;
    newProfil.firstNameTeammate = this.firstNameTeammate;
    newProfil.lastNameTeammate = this.lastNameTeammate;
    newProfil.statusTeammate = this.statusTeammate;
    newProfil.jobTeammate = this.jobTeammate;
    newProfil.idAgency = this.idAgencyNumber;
    newProfil.superAdmin = this.superAdmin;
    this.teammateService.updateTeammateProfil(newProfil);
    this.router.navigate(['/calendar']);
  }



}
