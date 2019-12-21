import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-tutormodule',
  templateUrl: './als-tutormodule.component.html',
  styleUrls: ['./als-tutormodule.component.css']
})
export class AlsTutormoduleComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  editarModulo(){
    this.route.navigate(["alseditarcontenido"])
  }
}
