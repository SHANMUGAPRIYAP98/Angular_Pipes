import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharComponent } from './Components/aadhar/aadhar.component';
import { AgeComponent } from './Components/age/age.component';
import { CreditComponent } from './Components/credit/credit.component';
import { ForexComponent } from './Components/forex/forex.component';
import { NumberFormatComponent } from './Components/number-format/number-format.component';
import { SSNComponent } from './Components/ssn/ssn.component';
import { TelephoneComponent } from './Components/telephone/telephone.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [{path:'Aadhar',component:AadharComponent},
  {path:'CreditCard',component:CreditComponent},
  {path:'SSN',component:SSNComponent},
  {path:'NumberFormat',component:NumberFormatComponent},
  {path:'AgeCalc',component:AgeComponent},
  {path:'Forex',component:ForexComponent},
  {path:'Telephone',component:TelephoneComponent},
  {path:'navbar',component:SideNavComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
