import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventService } from './event.service';
import { SupplyAdComponent } from './supply-ad/supply-ad.component';
import { HomeComponent } from './home/home.component';
import { DemandAdComponent } from './demand-ad/demand-ad.component';
import { TransportAdComponent } from './transport-ad/transport-ad.component';
import { DisplayDemandAdComponent } from './demand-ad/display-demand-ad/display-demand-ad.component';
import { DisplayTransportAdComponent } from './transport-ad/display-transport-ad/display-transport-ad.component';
import { DesSupComponent } from './supply-ad/des-sup/des-sup.component';
import { DisplaySupplyAdComponent } from './supply-ad/display-supply-ad/display-supply-ad.component';
import { DesDemComponent } from './demand-ad/des-dem/des-dem.component';
import { DesTraComponent } from './transport-ad/des-tra/des-tra.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    SupplyAdComponent,
    HomeComponent,
    DemandAdComponent,
    TransportAdComponent,
    DisplayDemandAdComponent,
    DisplayTransportAdComponent,
    DesSupComponent,
    DisplaySupplyAdComponent,
    DesDemComponent,
    DesTraComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
