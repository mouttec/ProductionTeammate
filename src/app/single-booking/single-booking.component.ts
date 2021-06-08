import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-booking',
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.css'],
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

  results = <any>[]; // tableau qui contient le résultat de toutes les étapes

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carStatus = this.bookingService.getStatusCarProcess();
    this.getBooking(this.route.snapshot.paramMap.get('idBooking'));
    this.getChangeStatus();

    // -----------------------------------------------------------------------   à supprimer
    this.carStatus = 'etape2';
    console.log('this.carStatus', this.carStatus);
    // -----------------------------------------------------------------------   à supprimer
  }

  onResult(event) {
    this.results.push(event);
    console.log(this.results);
  }

  getBooking(idBooking) {
    this.bookingService.getBookingById(idBooking).subscribe((booking) => {
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
    });
  }

  getChangeStatus() {
    if (this.carStatus === 'etape1') {
      return (this.statusBooking = 'En attente de prise en charge');
    } else if (this.carStatus === 'etape2') {
      return (this.statusBooking =
        "Photo de la carte d'identité de la personne qui nous remet la voiture");
    } else if (this.carStatus === 'etape3') {
      return (this.statusBooking = 'Vidéo de la video');
    } else if (this.carStatus === 'etape4') {
      return (this.statusBooking = 'Photo de la voiture');
    } else if (this.carStatus === 'etape5') {
      return (this.statusBooking = 'Procuration pour la restitution');
    } else if (this.carStatus === 'etape6') {
      return (this.statusBooking = 'Fiche états des lieux');
    } else if (this.carStatus === 'etape7') {
      return (this.statusBooking = 'En route vers le partenaire');
    } else if (this.carStatus === 'etape8') {
      return (this.statusBooking = 'Vidéo de la voiture');
    } else if (this.carStatus === 'etape9') {
      return (this.statusBooking = 'Photo de la voiture');
    } else if (this.carStatus === 'etape10') {
      return (this.statusBooking = 'Fiche états des lieux');
    } else if (this.carStatus === 'etape11') {
      return (this.statusBooking = 'Chez le partenaire');
    } else if (this.carStatus === 'etape12') {
      return (this.statusBooking = 'Chez le partenaire');
    } else if (this.carStatus === 'etape13') {
      return (this.statusBooking = 'Paiement en attente');
    } else if (this.carStatus === 'etape14') {
      return (this.statusBooking = 'Paiement validé');
    } else if (this.carStatus === 'etape15') {
      return (this.statusBooking = 'Véhicule disponible');
    } else if (this.carStatus === 'etape16') {
      return (this.statusBooking = 'Prendre en charge');
    } else if (this.carStatus === 'etape17') {
      return (this.statusBooking = 'Vidéo de la voiture');
    } else if (this.carStatus === 'etape18') {
      return (this.statusBooking = 'Photo de la voiture');
    } else if (this.carStatus === 'etape19') {
      return (this.statusBooking = 'Fiche états des lieux');
    } else if (this.carStatus === 'etape20') {
      return (this.statusBooking = 'En route chez le client');
    } else if (this.carStatus === 'etape21') {
      return (this.statusBooking = "Vérification de l'identité");
    } else if (this.carStatus === 'etape22') {
      return (this.statusBooking = 'Vidéo de la voiture');
    } else if (this.carStatus === 'etape23') {
      return (this.statusBooking = 'Photo de la voiture');
    } else if (this.carStatus === 'etape24') {
      return (this.statusBooking = 'Frais additionnel');
    } else if (this.carStatus === 'etape25') {
      return (this.statusBooking = 'Fiche états des lieux');
    } else if (this.carStatus === 'etape26') {
      return (this.statusBooking = 'Valider la restiution');
    } else if (this.carStatus === 'etape 27') {
      return (this.statusBooking = 'Véhicule restitué');
    }
  }

  onClick(idBooking) {
    console.log(this.currentBooking[0].idBooking);
    this.router.navigate(['step']);
  }

  onSwitchEtape2() {
    this.carStatus === 'etape2';
  }

  onSwitchEtape3() {
    //button pour ouvrir directement l'appareil photo et enregistrer la cni sur la table carIdCustomer
    this.carStatus === 'etape3';
  }

  onSwitchEtape4() {
    //button pour ouvrir directement la video et enregistrer la video sur la table video pour urlCustomerForthVideo
    this.carStatus === 'etape4';
  }

  onSwitchEtape5() {
    //si pas besoin de photo passer directement à l'étape suivante
    this.carStatus === 'etape5';
  }

  onSwitchEtape5Photo() {
    //button pour ouvrir directement l'appareil photo et enregistrer la video sur la table video pour urlCustomerForthPhoto
    this.carStatus === 'etape5';
  }

  onSwitchEtape6() {
    //si pas de procuration passer directement à l'étape suivante
    this.carStatus === 'etape6';
  }

  onSwitchEtape6Procuration() {
    //aller sur la page step et valider le nom de la personne pour la procuration et enregistrer dans la tableau cardIdInvetory dans firstNameProxy lastNameProxy
    this.carStatus === 'etape6';
  }

  onSwitchEtape7() {
    //établir la fiche états des lieux comme celle en modele en pdf sachant qu'il faut que les informations d'en haut soit automatiquement remplit, dans la partie ou il y a des dessins il faut pouvoir faire des croix sur les schémas à la fin il faut que le client puissent "signé" le formulaire (pour ces deux zones voir peut etre pour faire une zone de dessin). Donc je ne sais pas si le mieux est de directement faire un pdf préremplit ou bien de faire une page web puit d'éditer un pdf. A enregistrer dans la table contrat urlCustomerForthInventory
    this.carStatus === 'etape7';
  }

  onSwitchEtape8() {
    this.carStatus === 'etape8';
  }

  onSwitchEtape9() {
    //button pour ouvrir directement la video et enregistrer la video sur la table video pour urlPartnerForthVideo
    this.carStatus === 'etape9';
  }

  onSwitchEtape10Photo() {
    //button pour ouvrir directement l'appareil photo et enregistrer la video sur la table video pour urlPartnerForthPhoto
    this.carStatus === 'etape10';
  }

  onSwitchEtape10() {
    //si pas besoin de photo passer directement à l'étape suivante
    this.carStatus === 'etape10';
  }

  onSwitchEtape11() {
    //pour cette fiche il faut impérativement récupérer toutes les informations (même les infos de la zone des schémas des voitures) de la fiche établit précédemment. et il faut que le partner signé la fiche urlPartnerForthInventory
    this.carStatus === 'etape11';
  }

  onSwitchEtape17() {
    this.carStatus === 'etape17';
  }

  onSwitchEtape18() {
    //button pour ouvrir directement la video et enregistrer la video sur la table video pour urlPartnerBackVideo
    this.carStatus === 'etape18';
  }

  onSwitchEtape19() {
    //si pas besoin de photo passer directement à l'étape suivante
    this.carStatus === 'etape19';
  }

  onSwitchEtape19Photo() {
    //button pour ouvrir directement l'appareil photo et enregistrer la video sur la table video pour urlPartnerBackPhoto
    this.carStatus === 'etape19';
  }

  onSwitchEtape20() {
    //pour cette fiche il faut impérativement récupérer toutes les informations (même les infos de la zone des schémas des voitures) de la fiche établit précédemment. et il faut que le partner signé la fiche urlPartnerBackInventory
    this.carStatus === 'etape20';
  }

  onSwitchEtape21() {
    this.carStatus === 'etape21';
  }

  onSwitchEtape22() {
    //ouvrir la page step si procurration avec le nom et la personne de la personne si pas procurration afficher la cni de la table carIdCustomer
    this.carStatus === 'etape22';
  }

  onSwitchEtape23() {
    //button pour ouvrir directement la video et enregistrer la video sur la table video pour urlCustomerBackVideo
    this.carStatus === 'etape23';
  }

  onSwitchEtape24() {
    //si pas besoin de photo passer directement à l'étape suivante
    this.carStatus === 'etape24';
  }

  onSwitchEtape24Photo() {
    //button pour ouvrir directement l'appareil photo et enregistrer la video sur la table video pour urlCustomerBackPhoto
    this.carStatus === 'etape24';
  }

  onSwitchEtape25() {
    //si pas besoin de frais passer directement à l'étape suivante
    this.carStatus === 'etape25';
  }

  onSwitchEtape25Frais() {
    //ouvrir la page step ajouter le montant des frais et valider dans la table contrat
    this.carStatus === 'etape25';
  }

  onSwitchEtape26() {
    //pour cette fiche il faut impérativement récupérer toutes les informations (même les infos de la zone des schémas des voitures) de la fiche établit précédemment. et il faut que le customer signé la fiche urlCustomerBackInventory
    this.carStatus === 'etape26';
  }

  onSwitchEtape27() {
    this.carStatus === 'etape27';
  }
}
