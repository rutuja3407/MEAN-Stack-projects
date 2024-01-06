import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
    Name:string = "Marvellous InfoSystems";
    isUpper:boolean = false;
    isLower:boolean = false;

    public UpperClicked()
    {
      this.isUpper = true;
    }

    public LowerClicked()
    {
      this.isLower = true;
    }
}
