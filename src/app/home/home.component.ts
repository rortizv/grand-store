import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
