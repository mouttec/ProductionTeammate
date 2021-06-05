import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarProcessService } from 'src/app/services/car-process.service';
import { CarProcess } from 'src/app/models/carProcess.model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  currentCarProcess = null;
  idBooking = JSON.parse(localStorage.getItem('idBooking'));
  carProcess: CarProcess[];
  idProcess: number;
  idCar: number;
  idAgency: number;
  idPartner: number;
  carStatus: string;
  statusBooking: string;

  constructor(private bookingService: BookingService, private route: ActivatedRoute, private carProcessService: CarProcessService, private router: Router) { }

  ngOnInit(): void {
    this.getCarProcessBooking(this.idBooking);
  }

  getCarProcessBooking(idBooking) {
    this.carProcessService.getCarProcessByIdBooking(idBooking).subscribe(
      carProcess => {
        this.currentCarProcess = carProcess;
        localStorage.setItem('carStatus', JSON.stringify(this.currentCarProcess.carStatus));
        localStorage.setItem('idProcess', JSON.stringify(this.currentCarProcess.idProcess));
        localStorage.setItem('idCar', JSON.stringify(this.currentCarProcess.idCar));
        localStorage.setItem('idPartner', JSON.stringify(this.currentCarProcess.idPartner));
        localStorage.setItem('idAgency', JSON.stringify(this.currentCarProcess.idAgency));
        this.carStatus = JSON.parse(localStorage.getItem('carStatus'));
        this.idProcess = JSON.parse(localStorage.getItem('idProcess'));
        this.idCar = JSON.parse(localStorage.getItem('idCar'));
        this.idPartner = JSON.parse(localStorage.getItem('idPartner'));
        this.idAgency = JSON.parse(localStorage.getItem('idAgency'));
        this.getChangeStatus();
      }
    );
  }

  getChangeStatus() {
    if (this.carStatus === 'etape1') {
      return this.statusBooking = 'Prendre en charge';
    }
    else if  (this.carStatus === 'etape2') {
      return this.statusBooking = 'Photo de la carte d\'identité de la personne qui nous remet la voiture';
    }
    else if  (this.carStatus === 'etape3') {
      return this.statusBooking = 'Vidéo de la video';
    }
    else if  (this.carStatus === 'etape4') {
      return this.statusBooking = 'Photo de la voiture';
    }
    else if  (this.carStatus === 'etape5') {
      return this.statusBooking = 'Procuration pour la restitution';
    }
    else if  (this.carStatus === 'etape6') {
      return this.statusBooking = 'Fiche états des lieux';
    }
    else if  (this.carStatus === 'etape7') {
      return this.statusBooking = 'En route vers le partenaire';
    }
    else if  (this.carStatus === 'etape8') {
      return this.statusBooking = 'Vidéo de la voiture';
    }
    else if  (this.carStatus === 'etape9') {
      return this.statusBooking = 'Photo de la voiture';
    }
    else if  (this.carStatus === 'etape10') {
      return this.statusBooking = 'Fiche états des lieux';
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
      return this.statusBooking = 'Prendre en charge';
    }
    else if  (this.carStatus === 'etape17') {
      return this.statusBooking = 'Vidéo de la voiture';
    }
    else if  (this.carStatus === 'etape18') {
      return this.statusBooking = 'Photo de la voiture';
    }
    else if  (this.carStatus === 'etape19') {
      return this.statusBooking = 'Fiche états des lieux';
    }
    else if  (this.carStatus === 'etape20') {
      return this.statusBooking = 'En route chez le client';
    }
    else if  (this.carStatus === 'etape21') {
      return this.statusBooking = 'Vérification de l\'identité';
    }
    else if  (this.carStatus === 'etape22') {
      return this.statusBooking = 'Vidéo de la voiture';
    }
    else if  (this.carStatus === 'etape23') {
      return this.statusBooking = 'Photo de la voiture';
    }
    else if  (this.carStatus === 'etape24') {
      return this.statusBooking = 'Frais additionnel';
    }
    else if  (this.carStatus === 'etape25') {
      return this.statusBooking = 'Fiche états des lieux';
    }
    else if  (this.carStatus === 'etape26') {
      return this.statusBooking = 'Valider la restiution';
    }
    else if  (this.carStatus === 'etape 27') {
      return this.statusBooking = 'Véhicule restitué';
    }
  }

  onBooking() {
    this.router.navigate(['booking/' + this.idBooking]);
  }
}
