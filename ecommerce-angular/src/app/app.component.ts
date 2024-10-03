import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component'; // Adjust path if needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HomeComponent,MainCarouselComponent], // Use HomeComponent in imports array
  standalone: true // Mark AppComponent as standalone
})
export class AppComponent {
  title = 'ecommerce-angular';
}
