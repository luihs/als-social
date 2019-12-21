import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-login',
  templateUrl: './als-login.component.html',
  styleUrls: ['./als-login.component.css']
})
export class AlsLoginComponent implements OnInit {
  userModel = new User('','');
  constructor(private route:Router) { }

  ngOnInit() {
  }

  validateLoginUser(){
    // if user is admin
    if (this.userModel.user == "admin" && this.userModel.pwd == "admin"){
        this.route.navigate(['alsadmin']);
        console.log(this.userModel.user);   
    }
    // if user is student
    if(this.userModel.user == "stu" && this.userModel.pwd == "stu"){
      this.route.navigate(['alsstudent']);
    }

    //if user is tutor
    if (this.userModel.user == "tutor" && this.userModel.pwd == "tutor"){
      this.route.navigate(['alstutor']);
    }
  }
}
