import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Contract } from 'src/app/models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractSubject = new Subject<Contract[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/contract';
  private contracts: Contract[];

  constructor(private httpClient: HttpClient) { }

  emitContractSubject(){
    this.contractSubject.next(this.contracts);
  }

  readListContract() {
    this.httpClient.get<Contract[]>(`${this.baseUrl}/listAgency.php`).subscribe(
      (reponse) => {
        this.contracts = reponse;
        this.emitContractSubject();
      },
      (error) => {
        console.log('erreur de lecture' + error);
      }
    );
    return this.httpClient.get<Contract[]>(`${this.baseUrl}/listAgency.php`);
  }

  getContractById(idContract: number) {
    return this.httpClient.get(`${this.baseUrl}/listContract.php?idContract=${idContract}`);
  }

}
