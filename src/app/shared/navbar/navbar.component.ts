import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit{

  ngAfterViewInit() {
    const nav = document.querySelector('nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainContent = document.querySelector('main');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', () => {
        nav?.classList.toggle('active');
        mainContent?.classList.toggle('blur');
      });
    }
  }

}
