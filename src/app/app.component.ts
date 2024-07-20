import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SectionPrincipalComponent } from './pages/section-principal/section-principal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SectionSobremiComponent } from './pages/section-sobremi/section-sobremi.component';
import { SectionCertificadosComponent } from './pages/section-certificados/section-certificados.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SectionPrincipalComponent, SectionSobremiComponent, SectionCertificadosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
