import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from 'src/app/models/agencies.model';

@Component({
  selector: 'app-agency-view',
  templateUrl: './agency-view.component.html',
  styleUrls: ['./agency-view.component.css']
})
export class AgencyViewComponent implements OnInit, OnDestroy {

  agencies: Agency[]
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: Agency[]) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.readListAgency();
  }

  ngOnDestroy() {
    this.agencySubscription.unsubscribe();
  }

}
