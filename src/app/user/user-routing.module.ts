import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginPageComponent } from './pages/login/login.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-project',
    component: NewProjectComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
