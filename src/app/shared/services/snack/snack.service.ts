import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    const openedSnack = this.snackBar.open('You must be logged in!', 'OK', {
      duration: 5000,
    });

    return openedSnack
      .onAction()
      .pipe(tap((_) => this.router.navigate(['/user/login'])))
      .subscribe();
  }
}
