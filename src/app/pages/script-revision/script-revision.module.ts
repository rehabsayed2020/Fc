import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptRevisionRoutingModule } from './script-revision-routing.module';
import { WelcomeScriptComponent } from './welcome-script/welcome-script.component';
import { AddScriptComponent } from './add-script/add-script.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [WelcomeScriptComponent, AddScriptComponent],
  imports: [
    CommonModule,
    ScriptRevisionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ScriptRevisionModule { }
