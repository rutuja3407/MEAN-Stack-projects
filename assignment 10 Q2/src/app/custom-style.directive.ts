import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) 
  { 
    this.customStyle();
  }

  customStyle()
  {
    console.log("customstyle");
    this.obj.nativeElement.style.background = "yellow";
    this.obj.nativeElement.style.font = "bold";
  }

}
