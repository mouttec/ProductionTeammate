import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { AgencyComponent } from './agency-view/agency/agency.component';
import { AgencyFormComponent } from './agency-view/agency-form/agency-form.component';
import { SingleAgencyComponent } from './agency-view/single-agency/single-agency.component';
import { AgencyService } from 'src/app/services/agency.service';
import { TeammateService } from 'src/app/services/teammate.service';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { SingleTeammateComponent } from './teammate-view/single-teammate/single-teammate.component';
import { TeammateFormsComponent } from './teammate-view/teammate-forms/teammate-forms.component';
import { TeammateComponent } from './teammate-view/teammate/teammate.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';
import { CustomerFormsComponent } from './customer-view/customer-forms/customer-forms.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CalendarComponent } from './calendar/calendar.component';
import { SingleBookingComponent } from './single-booking/single-booking.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { PartnerComponent } from './partner-view/partner/partner.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractComponent } from './contract-view/contract/contract.component';
import { SingleContractComponent } from './contract-view/single-contract/single-contract.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgencyViewComponent,
    AgencyComponent,
    AgencyFormComponent,
    SingleAgencyComponent,
    TeammateViewComponent,
    SingleTeammateComponent,
    TeammateFormsComponent,
    TeammateComponent,
    CustomerViewComponent,
    CustomerComponent,
    CustomerFormsComponent,
    SingleCustomerComponent,
    AuthComponent,
    ProfilComponent,
    CalendarComponent,
    SingleBookingComponent,
    BookingFormsComponent,
    PartnerViewComponent,
    PartnerComponent,
    PartnerFormsComponent,
    SinglePartnerComponent,
    ContractViewComponent,
    ContractComponent,
    SingleContractComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [
    DatePipe,
    AgencyService,
    TeammateService,
    AuthService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
