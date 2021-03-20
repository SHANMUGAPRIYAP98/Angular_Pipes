import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sSNMask'
})
export class SSNMaskPipe implements PipeTransform {
   transform(ssnNo:string,canSee:number=4)
   {
     let mask=ssnNo.slice(0,-canSee);
     let seeVal=ssnNo.slice(-canSee);
     let res=mask.replace(/./g,'*')+seeVal;
     return res.match(new RegExp('.{1,3}', 'g')).join("-");

   }
  }

