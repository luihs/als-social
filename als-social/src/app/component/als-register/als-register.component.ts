import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-register',
  templateUrl: './als-register.component.html',
  styleUrls: ['./als-register.component.css']
})
export class AlsRegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  routePayment(){
    this.route.navigate(['alspayment'])
  }
}
