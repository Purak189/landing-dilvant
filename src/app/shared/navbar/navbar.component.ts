import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent implements AfterViewInit {
  private sections!: NodeListOf<HTMLElement>;
  private navLinks!: NodeListOf<HTMLAnchorElement>;

  constructor() {}

  ngAfterViewInit() {
    // Cargar elementos del DOM
    this.sections = document.querySelectorAll('main section');
    this.navLinks = document.querySelectorAll('nav a, .btn-contact, .btn-contact-mobile');

    const nav = document.querySelector('nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainContent = document.querySelector('main');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', () => {
        nav?.classList.toggle('active');
        mainContent?.classList.toggle('blur');
      });
    }

    this.navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        // Obtener ID del destino
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
          // Desplazamiento suave
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Quitar clases activas para cerrar menú móvil, si corresponde
          nav?.classList.remove('active');
          mainContent?.classList.remove('blur');

          // Actualizar decoración manualmente (enlace activo)
          this.navLinks.forEach((navLink) => navLink.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let currentSection: HTMLElement | null = null;

    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Detectar si la sección está en el área visible
      if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section;
      }
    });

    this.navLinks.forEach((link) => {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href')?.substring(1) === currentSection.id) {
        link.classList.add('active');
      }
    });
  }
}
