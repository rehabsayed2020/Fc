import { ShootDoneComponent } from './shoot-done/shoot-done.component';
import { AddShootComponent } from './add-shoot/add-shoot.component';
import { WelcomeShootComponent } from './welcome-shoot/welcome-shoot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'shoot',
        component: WelcomeShootComponent,
        data: {
          title: 'script'
        }
      },
      {
        path: 'addshoot',
        component: AddShootComponent
      }
      ,
      {
        path: 'sucess',
        component: ShootDoneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShootsRoutingModule { }
