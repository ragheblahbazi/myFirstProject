import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {


  tunisie=true;
  algerie=false;
  brazil=false;

  constructor() { }

  ngOnInit(): void {
  }

  couleuralgerie(){
 this.algerie=true;
 this.tunisie=false;
 this.brazil=false;

  }

  couleurtunisie(){
    this.algerie=false;
    this.tunisie=true;
    this.brazil=false;
   
     }


     couleurbrazil(){
      this.algerie=false;
      this.tunisie=false;
      this.brazil=true;
     
       }
}
