import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-navbaradmin',
  templateUrl: './als-navbaradmin.component.html',
  styleUrls: ['./als-navbaradmin.component.css']
})
export class AlsNavbaradminComponent implements OnInit {

  constructor(private  route:Router) { }

  ngOnInit() {
  }
  
  logout(){
    this.route.navigate(["alslogin"])
  }
  mainPage(){
    this.route.navigate(["alsadmin"])
  }
  
  usersPage(){
    this.route.navigate(["alsusers"])
  }
  modulePage(){
    this.route.navigate(["alsmoduleadmin"])
  }
  messagePage(){
    this.route.navigate(["alsmessageadmin"])
  }
  registerTutor(){
    this.route.navigate(["alsregistrartutor"])
  }
}
