import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-reservation-section',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './reservation-section.component.html',
  standalone: true,
  styleUrl: './reservation-section.component.css'
})
export class ReservationSectionComponent {

}
