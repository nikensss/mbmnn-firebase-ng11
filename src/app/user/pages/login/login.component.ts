import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (!user) return;

      console.log(`User: ${user.email}`);
      this.ngZone.run(() => this.router.navigate(['user/admin']));
    });
  }
}
