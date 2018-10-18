import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HistoryComponent } from '../history/history.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
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
    }])
  ],
  declarations: [
    RouterModule,
  ]
})
export class LazyAboutRoutingModule { }
