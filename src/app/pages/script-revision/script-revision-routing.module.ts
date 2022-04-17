import { WelcomeScriptComponent } from './welcome-script/welcome-script.component';
import { AddScriptComponent } from './add-script/add-script.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  children: [
    {
      path: 'scriptrevision',
      component: WelcomeScriptComponent,
      data: {
        title: 'script'
      }
    },
    {
      path: 'addscript',
      component: AddScriptComponent
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptRevisionRoutingModule { }
