import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ShellComponent } from './shell/shell.component';

const components = [ShellComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
