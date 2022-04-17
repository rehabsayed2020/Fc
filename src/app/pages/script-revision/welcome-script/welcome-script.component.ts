import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-welcome-script',
  templateUrl: './welcome-script.component.html',
  styleUrls: ['./welcome-script.component.scss']
})
export class WelcomeScriptComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }


  addservice()
{
  this.router.navigateByUrl('/services/addscript');

}

}
