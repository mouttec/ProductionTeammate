import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {

  currentCustomer = null;
  firstNameCustomer: string;
  lastNameCustomer: string;
  mailCustomer: string;
  phoneCustomer: string;
  dateOfBirthdayCustomer: string;
  dateCustomer: string;
  addressStreetNumber: string;
  addressStreetType: string;
  addressStreetName: string;
  addressStreetComplement: string;
  addressZip: string;
  addressCity: string;
  idCustomer: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('idCustomer'));
  }

  getCustomer(idCustomer) {
    this.customerService.getCustomerById(idCustomer).subscribe(
      customer => {
        this.currentCustomer = customer;
        this.firstNameCustomer = this.currentCustomer.firstNameCustomer;
        this.lastNameCustomer = this.currentCustomer.lastNameCustomer;
        this.mailCustomer = this.currentCustomer.mailCustomer;
        this.phoneCustomer = this.currentCustomer.phoneCustomer;
        this.dateOfBirthdayCustomer = this.currentCustomer.dateOfBirthdayCustomer;
        this.dateCustomer = this.currentCustomer.dateCustomer;
        this.dateOfBirthdayCustomer = this.currentCustomer.dateOfBirthdayCustomer;
        this.addressStreetNumber = this.currentCustomer.addressStreetNumber;
        this.addressStreetName = this.currentCustomer.addressStreetName;
        this.addressStreetComplement = this.currentCustomer.addressStreetComplement;
        this.addressStreetType = this.currentCustomer.addressStreetType;
        this.addressZip = this.currentCustomer.addressZip;
        this.addressCity = this.currentCustomer.addressCity;
      }
    )
  }

}
