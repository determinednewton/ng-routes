import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: '',
            component: HistoryComponent,
          },
          {
            path: 'contact-us',
            component: ContactUsComponent,
            // children
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
