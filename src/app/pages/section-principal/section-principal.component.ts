import { Component } from '@angular/core';
import { ButtonDisponibleComponent } from '../../shared/button-disponible/button-disponible.component';
import { ButtonContactComponent } from '../../shared/button-contact/button-contact.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-section-principal',
  standalone: true,
  imports: [ButtonDisponibleComponent, ButtonContactComponent],
  templateUrl: './section-principal.component.html',
  styleUrl: './section-principal.component.css'
})
export class SectionPrincipalComponent {

}
