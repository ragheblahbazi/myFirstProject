import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 statut1=false;
 firstName="lahbazi";
 listVlaue=[
{name: "ragheb", age:27,pay:"tunisie"},{name: "salma", age:24,pay:"Algérie"},
{name: "mohamed", age:24,pay:"Marrocco"}




 ]

  constructor(private myroute :Router) { }

  ngOnInit(): void {

  }

  retourverUser(){
 this.myroute.navigate(["/user"]);

  }
}
