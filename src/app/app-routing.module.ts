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
import { AuthGuard } from 'src/app/services/auth.guard';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { UpdatePasswordComponent } from './profil/update-password/update-password.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  // vaka440
  //{ path: 'booking/:idBooking', component: SingleBookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/:idBooking', component: SingleBookingComponent },
  {
    path: 'addBooking',
    component: BookingFormsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customer',
    component: CustomerViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customer/:idCustomer',
    component: SingleCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'partner',
    component: PartnerViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'partner/:idPartner',
    component: SinglePartnerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contract',
    component: ContractViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contract/:idContract',
    component: SingleContractComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teammate',
    component: TeammateViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teammate/:idTeammate',
    component: SingleTeammateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addTeammate',
    component: TeammateFormsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'agency', component: AgencyViewComponent, canActivate: [AuthGuard] },
  {
    path: 'agency/:idAgency',
    component: SingleAgencyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addPartner',
    component: PartnerFormsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
  {
    path: 'profil/updateProfil',
    component: UpdateProfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profil/updatePassword',
    component: UpdatePasswordComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
