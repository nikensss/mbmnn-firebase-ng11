import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SnackService } from '../../../shared/services/snack/snack.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private snack: SnackService,
    private router: Router
  ) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await this.auth.currentUser;
    const isLoggedIn = user !== null;

    if (!isLoggedIn) {
      this.snack.authError();
      return this.router.parseUrl('/user/login');
    }

    return isLoggedIn;
  }
}
