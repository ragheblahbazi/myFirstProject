import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html'
  
  
  
  
  
  
  ,
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  form={email:null,password:null}
  name = '';

 
  constructor() { }

  ngOnInit(): void {
  }
  printValue(): void {
    console.log(this.name);}
}
