import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(val:string):string{
    return val.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  }
