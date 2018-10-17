import { Component, ElementRef, NgZone } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css']
})
export class SlickCarouselComponent {
  constructor(private el: ElementRef,
              private zone: NgZone) {
  }

  $carousel: any;

  initialized = false;

  slides = [];

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick({});
    });
    this.initialized = true;
  }

  addSlide(slide) {
    if (!this.initialized) { this.initCarousel(); }
    this.slides.push(slide);
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
  }

  removeSlide(slide) {
    const idx = this.slides.indexOf(slide);
    this.$carousel.slick('slickRemove', idx);
    this.slides = this.slides.filter(s => s !== slide);
  }}
