import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AadharPipe } from './Pipes/aadhar.pipe';
import { CreditMaskPipe } from './Pipes/credit-mask.pipe';
import { SSNMaskPipe } from './Pipes/ssnmask.pipe';
import { CountryPipe } from './Pipes/country.pipe';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { NumberPipe } from './Pipes/number.pipe';
import { AgePipe } from './Pipes/age.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AadharComponent } from './Components/aadhar/aadhar.component';
import { CreditComponent } from './Components/credit/credit.component';
import { SSNComponent } from './Components/ssn/ssn.component';
import { AgeComponent } from './Components/age/age.component';
import { NumberFormatComponent } from './Components/number-format/number-format.component';
import { ForexComponent } from './Components/forex/forex.component';
import { TelephoneComponent } from './Components/telephone/telephone.component';

@NgModule({
  declarations: [
    AppComponent,
    AadharPipe,
    CreditMaskPipe,
    SSNMaskPipe,
    CountryPipe,
    CurrencyPipe,
    NumberPipe,
    AgePipe,
    SideNavComponent,
    AadharComponent,
    CreditComponent,
    SSNComponent,
    AgeComponent,
    NumberFormatComponent,
    ForexComponent,
    TelephoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
