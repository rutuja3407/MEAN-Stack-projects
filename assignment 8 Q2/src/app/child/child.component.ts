import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Input() public GetFromParent : any = "";
    @Output() public LaserLight = new EventEmitter();

    public childToParent()
    {
      this.LaserLight.emit("Hello from Child");
    }
}
