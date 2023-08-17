import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() item='';
@Output() public newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.newItemEvent.emit("value");
  }

}
