import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    const openedSnack = this.snackBar.open('You must be logged in!', 'OK', {
      duration: 5000
    });

    return openedSnack.onAction().subscribe(() => this.router.navigate(['/user/login']));
  }
}
