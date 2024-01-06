import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{

  @Output() public LaserLight = new EventEmitter();

  Data:string = "";
  public buttonClicked(inputdata : any)
  {
    this.Data = inputdata;
    this.LaserLight.emit(this.Data);
  }

}
