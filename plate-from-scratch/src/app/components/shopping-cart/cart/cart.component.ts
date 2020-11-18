import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService } from 'src/app/services/messenger.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1, productId:1, productName: 'Prpduct Test 1', qty:5, price: 100},
    // {id:2, productId:3, productName: 'Prpduct Test 2', qty:1, price: 200},
    // {id:3, productId:2, productName: 'Prpduct Test 3', qty:2, price: 300},
    // {id:4, productId:4, productName: 'Prpduct Test 4', qty:3, price: 400}
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      // console.log(product) 
      this.addProductToCart(product)     

    })
  }


  addProductToCart(product: Product){

    let productExists = false;

    for(let i in this.cartItems){
        if(this.cartItems[i].productId === product._id) {
        this.cartItems[i].qty++
        productExists=true;
        break
        }
      }

    if(!productExists){
      this.cartItems.push({
        productId: product._id,
        productName: product.name,
        qty:1,
        price: product.price
      })
    }
    
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
    })
  }
}