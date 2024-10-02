import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HomeComponent], // Use HomeComponent in imports array
  standalone: true // Mark AppComponent as standalone
})
export class AppComponent {
  title = 'ecommerce-angular';
}
