import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjusted import path
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Ensure this is declared here
  ],
  imports: [
    BrowserModule,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
