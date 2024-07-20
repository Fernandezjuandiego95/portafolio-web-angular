import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-disponible',
  standalone: true,
  imports: [],
  templateUrl: './button-disponible.component.html',
  styleUrl: './button-disponible.component.css'
})
export class ButtonDisponibleComponent {

  @Input() buttonText: string = '';

}
