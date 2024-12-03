import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-dilvant';
}
