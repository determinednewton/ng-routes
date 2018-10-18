import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HistoryComponent } from '../history/history.component';
import { LazyAboutRoutingModule } from './lazy-about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyAboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
    ContactUsComponent,
    HistoryComponent
  ]
})
export class LazyAboutModule { }
