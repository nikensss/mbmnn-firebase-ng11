import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmailLoginComponent } from './email-login/email-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginPageComponent } from './pages/login/login.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    EmailLoginComponent,
    NewProjectComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
})
export class UserModule {}
