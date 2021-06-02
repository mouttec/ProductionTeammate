import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  @Input() indexOfContract: number;
  @Input() idContract: number;
  @Input() idCustomer: number;
  @Input() idPartner: number;
  @Input() idBooking: number;
  @Input() urlContract: string;
  @Input() dateContract: string;
  @Input() idCar: number;
  @Input() idPickupAddress: number;
  @Input() idReturnAddress: number;
  @Input() idTeammatePickup: number;
  @Input() idTeammateReturn: number;


  constructor() { }

  ngOnInit(): void {
  }

}
