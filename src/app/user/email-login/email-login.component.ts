import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type FormType = 'login' | 'reset';
@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup | undefined;
  type: FormType = 'login';
  loading = false;
  serverMessage: string = '';

  constructor(private auth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }

  changeType(type: FormType) {
    this.type = type;
  }

  async onSubmit() {
    this.loading = true;
    try {
      const [email, password] = [this.email?.value, this.password?.value];
      if (this.isLogin) {
        await this.auth.signInWithEmailAndPassword(email, password);
      }

      if (this.isPasswordReset) {
        await this.auth.sendPasswordResetEmail(email);
        this.serverMessage = 'Please, check you email.';
        this.type = 'login';
      }
    } catch (ex) {
      this.serverMessage = ex.message;
    } finally {
      this.loading = false;
    }
  }
}
