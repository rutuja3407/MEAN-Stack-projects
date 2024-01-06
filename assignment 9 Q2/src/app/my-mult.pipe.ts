import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let mult : number = 1;
    mult = value * args[0];
    return mult;
  }

}
