import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlickCarouselComponent } from './slick-carousel/slick-carousel.component';
import { SlickCarouselItemDirective } from './slick-carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlickCarouselComponent,
    SlickCarouselItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
