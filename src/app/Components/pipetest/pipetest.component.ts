import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent implements OnInit {

  name="ragheb lahbazi";
  mydate=new Date();
  jsonVariable={name:"ragheb",lastname:"lahbazi",age:31}
  constructor() { }

  ngOnInit(): void {
  }

}
