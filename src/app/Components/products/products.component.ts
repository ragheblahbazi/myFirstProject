import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
table:any[]=[];


  constructor(private rootservice:ProductService) { }


  ngOnInit(): void {
  }
 getProduct(){
 this.table = this.rootservice.producttable;

 console.log("mon table est :",this.table);
 }
}
