import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-popular-recipes-section',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './popular-recipes-section.component.html',
  standalone: true,
  styleUrl: './popular-recipes-section.component.css'
})
export class PopularRecipesSectionComponent {

}
