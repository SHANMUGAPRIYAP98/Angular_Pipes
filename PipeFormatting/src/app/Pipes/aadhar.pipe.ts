import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadhar'
})
export class AadharPipe implements PipeTransform {
  transform(aadharNo:string,visible:number=4):string{
    let mask=aadharNo.slice(0,-visible);
    let canSee=aadharNo.slice(-visible);
    return mask.replace(/./g,"#")+canSee;
  }
}
