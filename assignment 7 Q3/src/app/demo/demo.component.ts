import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  Name: string = "Marvellous InfoSystems";

  public fun()
  {
    this.Name = "Educating for better tomorrow";
  }
}
