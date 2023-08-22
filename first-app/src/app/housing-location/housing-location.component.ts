import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <!-- NB: per far funzionare router link ho aggiunto RouterModule negli imports  -->
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent {
  // input will enable you to customize the data displayed in the component
  // sharing data from the parent component to the child component by binding data to those properties in the template using property binding
  @Input() housingLocation!: HousingLocation;
}
