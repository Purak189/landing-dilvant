import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero-section.component.html',
  standalone: true,
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
