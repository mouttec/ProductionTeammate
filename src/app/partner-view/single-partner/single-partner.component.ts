import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {

  currentPartner = null;
  usernamePartner: string;
  namePartner: string;
  addressPartner: string;
  phonePartner: string;
  statusPartner: string;
  typePartner: string;
  mailPartner: string;
  nameBilling: string;
  siretPartner: string;
  addressBilling: string;
  datePartner: string;
  idPartner: number

  constructor(private partnerService: PartnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPartner(this.route.snapshot.paramMap.get('idPartner'));
  }

  getPartner(idPartner) {
    this.partnerService.getPartnerById(idPartner).subscribe(
      partner => {
        this.currentPartner = partner;
        this.usernamePartner = this.currentPartner.usernamePartner;
        this.namePartner = this.currentPartner.namePartner;
        this.addressPartner = this.currentPartner.addressPartner;
        this.phonePartner = this.currentPartner.phonePartner;
        this.statusPartner = this.currentPartner.statusPartner;
        this.typePartner = this.currentPartner.typePartner;
        this.mailPartner = this.currentPartner.mailPartner;
        this.nameBilling = this.currentPartner.nameBilling;
        this.siretPartner = this.currentPartner.siretPartner;
        this.addressBilling = this.currentPartner.addressBilling;
        this.datePartner = this.currentPartner.datePartner;
      }
    )
  }

}
