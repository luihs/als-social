import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-users',
  templateUrl: './als-users.component.html',
  styleUrls: ['./als-users.component.css']
})
export class AlsUsersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  registerTutor(){
    this.route.navigate(["alsregistrartutor"])
  }
}
