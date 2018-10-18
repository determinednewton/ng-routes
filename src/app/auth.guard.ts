import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const target = next.url.join('/');
    if (!this.userService.isLoggedIn()) {
      // const parsed: UrlTree = this.router.parseUrl('/forbidden');
      // parsed.queryParams = { target };
      // this.router.navigateByUrl(parsed);

      this.router.navigateByUrl(`/forbidden?target=${target}`); // '/forbidden?target=' + target
    }

    return true;
  }
}
