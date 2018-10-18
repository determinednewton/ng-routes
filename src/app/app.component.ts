import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-routes';

  constructor(private userService: UserService) {}

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
