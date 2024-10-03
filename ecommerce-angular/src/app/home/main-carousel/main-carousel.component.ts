import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { homeCarouselData } from '../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule to the imports array
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    console.log(homeCarouselData); // Log the imported data
    this.carouselData = homeCarouselData;
    console.log(this.carouselData); // Log the populated data
    //this.autoPlay()
    //this.autoPlay()
   
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
    //console.log('Current Slide:', this.currentSlide); // Check the current slide number

  }
 
  
} 