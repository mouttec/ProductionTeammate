import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Booking } from 'src/app/models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingSubject = new Subject<Booking[]>();
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/booking';
  private bookings: Booking[];
  carStatus = 'etape11';

  constructor(private httpClient: HttpClient) { }

  emitBookingSubject() {
    this.bookingSubject.next (this.bookings);
  }

  readListBooking() {
    this.httpClient.get<Booking[]>(`${this.baseUrl}/listBooking.php`).subscribe(
      (bookings) => {
        this.bookings = bookings;
        this.emitBookingSubject();
      },
      (error) => {
        console.log('erreur de lecture des bookings');
      }
    );
  }

  addBooking(booking: Booking) {
    this.httpClient.post(`${this.baseUrl}/editBooking.php`, booking).subscribe(
      () => {
        this.bookings.push(booking);
      },
      (error) => {
        console.log('erreur de sauvegarde du booking', + error);
      }
    );
  }

  getBookingById(idBooking) {
  return this.httpClient.get(`${this.baseUrl}/listBooking.php?idBooking=${idBooking}`);
  }

  updateBooking(booking: Booking) {
    this.httpClient.post(`${this.baseUrl}/editBooking.php`, booking).subscribe(
      () => {
        console.log('enregistrement ok');
      },
      (error) => {
        console.log('erreur d\'update du booking' + error);
      }
    );
  }

  getStatusCarProcess() {
    return this.carStatus
  }
}
