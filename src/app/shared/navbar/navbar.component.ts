import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeLink: string = '';

  constructor() {}

  ngOnInit(): void {
    this.onWindowScroll(); // Para establecer el estado inicial
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.querySelector('.navbar-estyle-prop') as HTMLElement;
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
