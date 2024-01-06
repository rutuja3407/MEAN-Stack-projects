import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private obj : ElementRef) 
  { 

  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.obj.nativeElement.style.color = "Green";
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.obj.nativeElement.style.color = "black";
  }

}
