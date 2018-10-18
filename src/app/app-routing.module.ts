import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'about',
        // loadChildren: './lazy-about/lazy-about.module#LazyAboutModule',
        loadChildren: async () => (await import('./lazy-about/lazy-about.module')).LazyAboutModule,
canLoad: [
          AuthGuard
        ]
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
      {
        path: '**',
        component: MainComponent,
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
