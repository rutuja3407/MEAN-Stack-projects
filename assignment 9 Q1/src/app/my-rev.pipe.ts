import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let temp : string = "";
    let i = 0;
    for(i=1;i<=value.length;i++)
    {
        temp += value[value.length-i];
    }
    return temp;
  }

}
