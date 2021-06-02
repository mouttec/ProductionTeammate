import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { AuthComponent } from './auth/auth.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SingleBookingComponent } from './single-booking/single-booking.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { SingleContractComponent } from './contract-view/single-contract/single-contract.component';
import { SingleAgencyComponent } from './agency-view/single-agency/single-agency.component';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { SingleTeammateComponent } from './teammate-view/single-teammate/single-teammate.component';
import { TeammateFormsComponent } from './teammate-view/teammate-forms/teammate-forms.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'booking/:idBooking', component: SingleBookingComponent },
  { path: 'addBooking', component: BookingFormsComponent },
  { path: 'customer', component: CustomerViewComponent },
  { path: 'customer/:idCustomer', component: SingleCustomerComponent },
  { path: 'partner', component: PartnerViewComponent },
  { path: 'partner/:idPartner', component: SinglePartnerComponent },
  { path: 'contract', component: ContractViewComponent },
  { path: 'contract/:idContract', component: SingleContractComponent },
  { path: 'teammate', component: TeammateViewComponent },
  { path: 'teammate/:idTeammate', component: SingleTeammateComponent },
  { path: 'addTeammate', component: TeammateFormsComponent },
  { path: 'agency', component: AgencyViewComponent },
  { path: 'agency/:idAgency', component: SingleAgencyComponent },
  { path: 'addPartner', component: PartnerFormsComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
