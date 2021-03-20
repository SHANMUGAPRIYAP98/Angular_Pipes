import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(selectedCon:string):string
  {
    var code;
    if(selectedCon=="USA")
    {
      let phone="4156403180"
      code="(+1 )" + phone.match(new RegExp('.{1,3}', 'g')).join("-");
    }
    else if(selectedCon=="Canada")
    {
      let phone="4156403180"
      code="(+1 )" + phone.match(new RegExp('.{1,3}', 'g')).join(" ");
    }
    else if(selectedCon=="Indonesia")
    {
      let phone="8123334567"
      code="(+62 )" + phone.match(new RegExp('.{1,3}', 'g')).join(" ");
    }
    else if(selectedCon=="Afghanistan")
    {
      let phone="795225002"
      code="(+93 )" + phone.match(new RegExp('.{1,3}', 'g')).join(" ");
    }
    else if(selectedCon=="American Samoa")
    {
      let phone="79522"
      code="(+1-684)"+"-"+ phone.match(new RegExp('.{1,2}', 'g')).join("-");
    }
    else{
      code="Invalid Selection"
    }
    return code;
  }
  }
