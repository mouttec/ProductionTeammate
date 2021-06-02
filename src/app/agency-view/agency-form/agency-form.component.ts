import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from 'src/app/models/agencies.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  agencyForm: FormGroup;
  agencies: Agency[];
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService, private router: Router, private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: Agency[]) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.readListAgency();
    this.initFormAgency();
  }

  initFormAgency() {
    this.agencyForm = this.formBuiler.group(
      {
        nameAgency: ['', Validators.required],
        numberAddressAgency: ['', Validators.required],
        typeAddressAgency: ['', Validators.required],
        nameAddressAgency: ['', Validators.required],
        complementAddressAgency: ['', Validators.required],
        zipAddressAgency: ['', Validators.required],
        cityAddressAgency: ['', Validators.required],
        phoneAgency: ['', Validators.required],
        mailAgency: ['', Validators.required],
        statusAgency: ['', Validators.required]
      }
    )
  }

  onSubmitFormAgency() {
    const formValue = this.agencyForm.value;
    const newAgency = new Agency(
      formValue['nameAgency'],
      formValue['numberAddressAgency'],
      formValue['typeAddressAgency'],
      formValue['nameAddressAgency'],
      formValue['complementAddressAgency'],
      formValue['zipaddressAgency'],
      formValue['cityAddressAgency'],
      formValue['phoneAgency'],
      formValue['mailAgency'],
      formValue['statusAgency']
    );
    newAgency.idAgency = this.agencies[(this.agencies.length -1)].idAgency + 1;
    this.agencyService.addAgency(newAgency);
    this.router.navigate(['/agency']);
    this.rebuilderForm();
  }

  rebuilderForm() {
    this.agencyForm.reset(
      {
        nameAgency: '',
        numberAddressAgency: '',
        typeAddressAgency: '',
        nameAddressAgency: '',
        complementAddressAgency: '',
        zipAddressAgency: '',
        cityAddressAgency: '',
        phoneAgency: '',
        mailAgency: '',
        statusAgency: ''
      }
    )
  }

}
