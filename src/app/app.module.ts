import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactUsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
