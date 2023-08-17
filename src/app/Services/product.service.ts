import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  producttable=[
{name:"ragheb",age:"26",nationalite:"tunisie"},
{name:"moussa",age:"25",nationalite:"MARROC"},
{name:"farhat",age:"45",nationalite:"ALGERIE"}
  ]
  constructor() { }
}
