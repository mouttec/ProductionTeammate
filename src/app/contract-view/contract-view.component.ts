import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';
import { Contract } from 'src/app/models/contract.model';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent implements OnInit, OnDestroy {

  contracts: Contract[];
  contractSubscription: Subscription;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractSubscription = this.contractService.contractSubject.subscribe(
      (contracts: Contract[]) => {
        this.contracts = contracts;
      }
    );
    this.contractService.readListContract();
  }

  ngOnDestroy() {
    this.contractSubscription.unsubscribe();
  }

}
