import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-shoot',
  templateUrl: './welcome-shoot.component.html',
  styleUrls: ['./welcome-shoot.component.scss']
})
export class WelcomeShootComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  addservice()
  {
    this.router.navigateByUrl('/serviceshoot/addshoot');
  
  }

}
