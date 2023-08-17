import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

 seconde!: number;

  public tt='5';
  constructor() { }

  ngOnInit(): void {

    const counter=Observable.interval(1000);
    counter.subscribe((value:number)=>
    {
         this.seconde=value;
         

    })
  }

}
