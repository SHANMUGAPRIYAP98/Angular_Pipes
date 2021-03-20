import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(currency:string):number  {
    var result;
    var value=1500;
    if(currency=="INR TO USD")
    {
      
      result=value*0.014+" USD ";
    }
    else if(currency=="INR TO SGD")
    {
      result=value*0.019+ " SGD "; 
    }
    else if(currency=="INR TO Belarusian Ruble")
    {
      result=value*0.036 + " Belarusian Ruble " 
    }
    else if(currency=="INR TO Malagasy Ariary")
    {
      result=value*52.11+" Malagasy Ariary ";
    }
    else if(currency=="INR TO Yemeni Rial")
    {
      result=value*3.46+" Yemeni Rial ";
    }
    else{
      result="Invalid Option";
    }
    return result;
  }

}
