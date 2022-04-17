import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShootsRoutingModule } from './shoots-routing.module';
import { WelcomeShootComponent } from './welcome-shoot/welcome-shoot.component';
import { AddShootComponent } from './add-shoot/add-shoot.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShootDoneComponent } from './shoot-done/shoot-done.component';
import { SafePipe } from 'app/shared/pipes/safe.pipe';


@NgModule({
  declarations: [WelcomeShootComponent, AddShootComponent, ShootDoneComponent , SafePipe],
  imports: [
    CommonModule,
    ShootsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShootsModule { }
