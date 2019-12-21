import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-navbartutor',
  templateUrl: './als-navbartutor.component.html',
  styleUrls: ['./als-navbartutor.component.css']
})
export class AlsNavbartutorComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }

  tutorModule(){
    this.route.navigate(["alstutormodule"])
  }

  promover(){
    this.route.navigate([""])
  }

  configuracionTutor(){
    this.route.navigate([""])
  }

  mainPage(){
    this.route.navigate(["alstutor"])
  }

  logout(){
    this.route.navigate(["alslogin"])
  }
  perfilPage(){
    this.route.navigate(['alsperfil'])
  }

  messagePage(){
    this.route.navigate(['alsmensajes'])
  }

  promoverPage(){
    this.route.navigate(['alspromover'])
  }

  conferenciaPage(){
    this.route.navigate(['alsconferencia'])
  }

  configuracionTutorPage(){
    this.route.navigate(['alsconfiguraciontutor']);
  }
}
