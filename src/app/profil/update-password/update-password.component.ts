import { Component, OnInit } from '@angular/core';
import { ProfilTeammatePassword } from 'src/app/models/profilTeammate.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeammateService } from 'src/app/services/teammate.service';
import { Subscription } from 'rxjs';
import { te } from 'date-fns/locale';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updatePassword: FormGroup;
  teammates: ProfilTeammatePassword[];
  teammateSubscription: Subscription;
  idTeammate = localStorage.getItem('idPartner');
  idTeammateNumber: number;

  constructor(private teammateService: TeammateService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: ProfilTeammatePassword[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.readListTeammate();
    this.initFormUpdatePassword();
    this.idTeammateNumber = Number(this.idTeammate);
  }

  initFormUpdatePassword() {
    this.updatePassword = this.formBuilder.group(
      {
        password: ['', Validators.required]
      }
    );
  }

  onSubmitFormUpdatePassword() {
    const formValue = this.updatePassword.value;
    const newPassword = new ProfilTeammatePassword(
      formValue['password']
    );
    newPassword.idTeammate = this.idTeammateNumber;
    this.teammateService.updateTeammatePassword(newPassword);
    this.router.navigate(['/calendar']);
  }
}
