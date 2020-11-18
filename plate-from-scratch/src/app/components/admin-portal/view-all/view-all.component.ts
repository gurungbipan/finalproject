import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  products:Array<Product>;
  //products:Product[];
  flag : boolean = false;
  constructor(public productService:ProductService) { } //DI for Service class 


  ngOnInit(): void {
    
  }
  loadProductInfo(): void {
    this.flag = true;
    this.productService.getAllProductDetails().subscribe(data=>this.products=data);
  }
}


