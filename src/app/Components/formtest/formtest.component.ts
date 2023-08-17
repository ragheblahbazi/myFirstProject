import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormModel } from 'src/app/Modeles/form-model';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {

  login:FormModel;
  constructor() {
    this.login=new FormModel();


   }
   
  ngOnInit(): void {
  }

  onsubmit(form:NgForm){
console.log(this.login);
  }


}
