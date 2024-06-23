import { Component } from '@angular/core';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { HousingLocationComponent } from '../components/housing-location/housing-location.component';
import { HousingLocation } from '../interfaces/housinglocation.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: true
  };

}
