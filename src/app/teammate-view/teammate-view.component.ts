import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeammateService } from 'src/app/services/teammate.service';
import { Teammate } from 'src/app/models/teammates.model';

@Component({
  selector: 'app-teammate-view',
  templateUrl: './teammate-view.component.html',
  styleUrls: ['./teammate-view.component.css']
})
export class TeammateViewComponent implements OnInit, OnDestroy {

  teammates: Teammate[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.readListTeammate();
  }

  ngOnDestroy() {
    this.teammateSubscription.unsubscribe();
  }
}
