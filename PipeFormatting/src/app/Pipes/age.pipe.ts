import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob:string):string{
    var age:number=0;
    let cdob=new Date().toLocaleDateString();
    let dyear=dob.slice(0,4)
    console.log(dyear);
    let cyear=cdob.slice(-4);
    age=parseInt(cyear)-parseInt(dyear);
    return age+" years";
  }
  }
