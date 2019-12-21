import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-modulestudent',
  templateUrl: './als-modulestudent.component.html',
  styleUrls: ['./als-modulestudent.component.css']
})
export class AlsModulestudentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  startModule(){
    this.route.navigate(["alsstartmodule"])
  }

  startPractice(){
    this.route.navigate(["alsmodulepractice"])
  }
}
