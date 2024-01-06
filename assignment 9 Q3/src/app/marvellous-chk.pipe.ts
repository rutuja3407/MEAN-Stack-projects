import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {

    let result : string = "";
    let i : number = 2;
    let flag : boolean = false;
    let divAdd : number = 0;
    if(args[0] == "Even" && value%2 != 0)
    {
      if(value%2 != 0)
      {
        result = "It is not Even";
      }
      else
      {
        result = "It is Even";
      }
    }

    if(args[0] == "Prime")
    {
      for(i=2 ; i<=value/2 ; i++)
      {
        if(value % i == 0)
        {
          flag = true;
        }
      }
      if(!flag)
      {
        result = "It is Prime Number";
      }
      else
      {
        result = "It is not a Prime Number";
      }
    }

    if(args[0] == "Perfect")
    {
      for(i=1 ; i<= value/2 ; i++)
      {
        if(value%i == 0)
        {
          divAdd = divAdd + i;
        }
      }
      if(divAdd == value)
      {
        result = "It is Perfect Number";
      }
      else
      {
        result = "It is not a Perfect Number";
      }
    }

    return result;
  }

}
