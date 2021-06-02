import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerSubject = new Subject<Customer[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/customers';
  private customers: Customer[];

  constructor(private httpClient: HttpClient) { }

  emitCustomerSubject() {
    this.customerSubject.next(this.customers);
  }

  readListCustomer() {
    this.httpClient.get<Customer[]>(`${this.baseUrl}/listCustomers.php`).subscribe(
      (reponse) => {
        this.customers = reponse;
        this.emitCustomerSubject();
      },
      (error) => {
        console.group('erreur de lecture' + error);
      }
    );
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

  getCustomerById(idCustomer) {
    return this.httpClient.get(`${this.baseUrl}/listCustomers.php?idCustomer=${idCustomer}`);
  }
}
