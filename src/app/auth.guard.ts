import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next);
    const target = next.url.join('/');
    if (!this.userService.isLoggedIn()) {
      // const parsed: UrlTree = this.router.parseUrl('/forbidden');
      // parsed.queryParams = { target };
      // this.router.navigateByUrl(parsed);

      this.router.navigateByUrl(`/forbidden?target=${target}`); // '/forbidden?target=' + target
    }

    return true;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isLoggedIn();
  }
}
