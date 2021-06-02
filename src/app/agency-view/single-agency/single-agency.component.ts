import { Component, OnInit } from '@angular/core';
import { AgencyService } from 'src/app/services/agency.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-agency',
  templateUrl: './single-agency.component.html',
  styleUrls: ['./single-agency.component.css']
})
export class SingleAgencyComponent implements OnInit {

  currentAgency = null;
  idAgency: number;
  nameAgency: string;
  numberAddressAgency: string;
  typeAddressAgency: string;
  nameAddressAgency: string;
  complementAddressAgency: string;
  zipAddressAgency: string;
  cityAddressAgency: string;
  phoneAgency: string;
  mailAgency: string;
  statusAgency: string;
  dateAgency: string;

  constructor(private agencyService: AgencyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAgency(this.route.snapshot.paramMap.get('idAgency'));
  }

  getAgency(idAgency) {
    this.agencyService.getAgencyById(idAgency).subscribe(
      agency  => {
        this.currentAgency = agency;
        this.idAgency = this.currentAgency.idAgency;
        this.nameAgency = this.currentAgency.nameAgency;
        this.numberAddressAgency = this.currentAgency.numberAddressAgency;
        this.typeAddressAgency = this.currentAgency.typeAddressAgency;
        this.nameAddressAgency = this.currentAgency.nameAddressAgency;
        this.complementAddressAgency = this.currentAgency.complementAddressAgency;
        this.zipAddressAgency = this.currentAgency.zipAddressAgency;
        this.cityAddressAgency = this.currentAgency.cityAddressAgency;
        this.phoneAgency = this.currentAgency.phoneAgency;
        this.mailAgency = this.currentAgency.mailAgency;
        this.statusAgency = this.currentAgency.statusAgency;
        this.dateAgency = this.currentAgency.dateAgency;
      },
      error => {
        console.log(error);
      }
    );
  }
}
