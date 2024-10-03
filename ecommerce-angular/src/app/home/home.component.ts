import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';


@Component({
  selector: 'app-home',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule,MainCarouselComponent], // Optionally import other required modules
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Your component logic here
}