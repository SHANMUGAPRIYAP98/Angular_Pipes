import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditMask'
})
export class CreditMaskPipe implements PipeTransform {

  transform(creditNum:string,seeDigits:number=4):string
  {
    let mask=creditNum.slice(0,-seeDigits);
    let seeVal=creditNum.slice(-seeDigits);
    let a= mask.replace(/./g,"$")+seeVal;
    return a.match(new RegExp('.{1,4}', 'g')).join(" ");
  }

  }
