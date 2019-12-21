import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-als-navbarstudent',
  templateUrl: './als-navbarstudent.component.html',
  styleUrls: ['./als-navbarstudent.component.css']
})
export class AlsNavbarstudentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  logout(){
    this.route.navigate(["alslogin"])
  }

  mainPage(){
    this.route.navigate(["alsstudent"])
  }

  modulePage(){
    this.route.navigate(['alsmodulestudent'])
  }

  perfilPage(){
    this.route.navigate(['alsperfil'])
  }

  messagePage(){
    this.route.navigate(['alsmensajes'])
  }

  progressPge(){
    this.route.navigate(['alsprogress'])
  }

  configurationPage(){
    this.route.navigate(['alsconfiguration'])
  }

  certificado(){
    this.route.navigate(['alscertificado'])
  }
}
