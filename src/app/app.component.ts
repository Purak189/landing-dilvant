import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PopularRecipesSectionComponent} from './components/popular-recipes-section/popular-recipes-section.component';
import {SeasonalDishSectionComponent} from './components/seasonal-dish-section/seasonal-dish-section.component';
import {HowItWorksSectionComponent} from './components/how-it-works-section/how-it-works-section.component';
import {
  UniqueExperienceSectionComponent
} from './components/unique-experience-section/unique-experience-section.component';
import {ReservationSectionComponent} from './components/reservation-section/reservation-section.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    NavbarComponent,
    FooterComponent,
    PopularRecipesSectionComponent,
    SeasonalDishSectionComponent,
    HowItWorksSectionComponent,
    UniqueExperienceSectionComponent,
    ReservationSectionComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-dilvant';
}
