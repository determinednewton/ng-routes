import { AfterViewInit, Directive, ElementRef, Host, OnDestroy } from '@angular/core';
import { SlickCarouselComponent } from './slick-carousel/slick-carousel.component';

@Directive({
  selector: '[appSlickCarouselItem]'
})
export class SlickCarouselItemDirective implements AfterViewInit, OnDestroy {

  constructor(private el: ElementRef, @Host() private carousel: SlickCarouselComponent) {
  }
  ngAfterViewInit() {
    this.carousel.addSlide(this);
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
}
