import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeammateService } from 'src/app/services/teammate.service';
import { Teammate } from 'src/app/models/teammates.model';
import { Agency } from 'src/app/models/agencies.model';
import { Subscription } from 'rxjs';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-teammate-forms',
  templateUrl: './teammate-forms.component.html',
  styleUrls: ['./teammate-forms.component.css']
})
export class TeammateFormsComponent implements OnInit {

  teammateForm: FormGroup;
  teammates: Teammate[];
  teammateSubscription: Subscription;
  agencies: Agency[];
  agencySubscription: Subscription;

  constructor(private teammateService: TeammateService, private router: Router, private formBuilder: FormBuilder, private agencyService: AgencyService) { }


  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.readListTeammate();
    this.initFormTeammate();
    this.agencySubscription  = this.agencyService.agencySubject.subscribe(
      (agencies: Agency []) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.readListAgency();
  }

  initFormTeammate() {
    this.teammateForm = this.formBuilder.group(
      {
        firstNameTeammate: ['', Validators.required],
        lastNameTeammate: ['', Validators.required],
        usernameTeammate: ['', Validators.required],
        mailTeammate: ['', Validators.required],
        phoneTeammate: ['', Validators.required],
        password: ['', Validators.required],
        statusTeammate: ['', Validators.required],
        jobTeammate: ['', Validators.required],
        nameAgency: ['', Validators.required],
        superAdmin: ['', Validators.required]
      }
    );
  }

  onSubmitFormTeammate() {
    const formValue = this.teammateForm.value;
    const newTeammate = new Teammate(
      formValue['firstNameTeammate'],
      formValue['lastNameTeammate'],
      formValue['usernameTeammate'],
      formValue['mailTeammate'],
      formValue['phoneTeammate'],
      formValue['password'],
      formValue['statusTeammate'],
      formValue['jobTeammate'],
      formValue['nameAgency'],
      formValue['superAdmin']
    );
    newTeammate.idTeammate = this.teammates[(this.teammates.length - 1)].idTeammate + 1;
    this.teammateService.addTeammate(newTeammate);
    this.router.navigate(['/teammate']);
    this.rebuildFormTeammate();
  }

  rebuildFormTeammate(): void {
    this.teammateForm.reset(
      {
        firstNameTeammate: '',
        lastNameTeammate: '',
        usernameTeammate: '',
        mailTeammate: '',
        phoneTeammate: '',
        password: '',
        statusTeammate: '',
        jobTeammate: '',
        nameAgency: '',
        superAdmin: ''
      }
    );
  }

}
