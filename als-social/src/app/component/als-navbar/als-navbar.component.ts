import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-navbar',
  templateUrl: './als-navbar.component.html',
  styleUrls: ['./als-navbar.component.css']
})
export class AlsNavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  routelogin(){
    this.route.navigate(['alslogin']);
  }

  routeRegister(){
    this.route.navigate(['alsregister']);
  }
}
