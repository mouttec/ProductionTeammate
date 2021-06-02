import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-booking',
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.css']
})
export class SingleBookingComponent implements OnInit {

  currentBooking = null;
  idBooking: number;
  firstNameCustomer: string;
  lastNameCustomer: string;
  mailCustomer: string;
  phoneCustomer: string;
  dateForth: string;
  dateBack: string;
  dateRDV: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  motorizationCar: string;
  urlGrayCard: string;
  dateOfCirculationCar: string;
  carStatus: string;
  statusBooking: string;

  constructor(private bookingService: BookingService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.carStatus = this.bookingService.getStatusCarProcess();
    this.getBooking(this.route.snapshot.paramMap.get('idBooking'));
    this.getChangeStatus();
  }

  getBooking(idBooking) {
    this.bookingService.getBookingById(idBooking).subscribe(
      booking => {
        this.currentBooking = booking;
        this.firstNameCustomer = this.currentBooking[1].firstNameCustomer;
        this.lastNameCustomer = this.currentBooking[1].lastNameCustomer;
        this.mailCustomer = this.currentBooking[1].mailCustomer;
        this.phoneCustomer = this.currentBooking[1].phoneCustomer;
        this.dateForth = this.currentBooking[0].dateForth;
        this.idBooking = this.currentBooking[0].idBooking;
        this.licensePlateCar = this.currentBooking[2].licensePlateCar;
        this.brandCar = this.currentBooking[2].brandCar;
        this.modelCar = this.currentBooking[2].modelCar;
        this.motorizationCar = this.currentBooking[2].motorizationCar;
        this.urlGrayCard = this.currentBooking[2].urlGrayCard;
        this.dateOfCirculationCar = this.currentBooking[2].dateOfCirculationCar;
      }
    );
  }

  getChangeStatus() {
    if (this.carStatus === 'etape1') {
      return this.statusBooking = 'En attente de prise en charge';
    }
    else if  (this.carStatus === 'etape2') {
      return this.statusBooking = 'Etats des lieux chez le client en cours';
    }
    else if  (this.carStatus === 'etape3') {
      return this.statusBooking = 'Etats des lieux chez le client en cours';
    }
    else if  (this.carStatus === 'etape4') {
      return this.statusBooking = 'Etats des lieux chez le client en cours';
    }
    else if  (this.carStatus === 'etape5') {
      return this.statusBooking = 'Etats des lieux chez le client en cours';
    }
    else if  (this.carStatus === 'etape6') {
      return this.statusBooking = 'Etats des lieux chez le client en cours';
    }
    else if  (this.carStatus === 'etape7') {
      return this.statusBooking = 'Prise en charge par MoutteC';
    }
    else if  (this.carStatus === 'etape8') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape9') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape10') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape11') {
      return this.statusBooking = 'Chez le partenaire';
    }
    else if  (this.carStatus === 'etape12') {
      return this.statusBooking = 'Chez le partenaire';
    }
    else if  (this.carStatus === 'etape13') {
      return this.statusBooking = 'Paiement en attente';
    }
    else if  (this.carStatus === 'etape14') {
      return this.statusBooking = 'Paiement validé';
    }
    else if  (this.carStatus === 'etape15') {
      return this.statusBooking = 'Véhicule disponible';
    }
    else if  (this.carStatus === 'etape16') {
      return this.statusBooking = 'Prise en charge par Mouttec';
    }
    else if  (this.carStatus === 'etape17') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape18') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape19') {
      return this.statusBooking = 'Etat des lieux chez le partenaire en cours';
    }
    else if  (this.carStatus === 'etape20') {
      return this.statusBooking = 'Prise en charge par Mouttec';
    }
    else if  (this.carStatus === 'etape21') {
      return this.statusBooking = 'Véhicule en cours de restitution';
    }
    else if  (this.carStatus === 'etape22') {
      return this.statusBooking = 'Véhicule en cours de restitution';
    }
    else if  (this.carStatus === 'etape23') {
      return this.statusBooking = 'Véhicule en cours de restitution';
    }
    else if  (this.carStatus === 'etape24') {
      return this.statusBooking = 'Véhicule en cours de restitution';
    }
    else if  (this.carStatus === 'etape25') {
      return this.statusBooking = 'Véhicule en cours de restitution';
    }
    else if  (this.carStatus === 'etape26') {
      return this.statusBooking = 'Véhicule restitué';
    }
  }

}
