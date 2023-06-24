import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproducts[] = [];
  constructor() {}

  addToCart(item: Iproducts): void {
    const existingItem = this.cart.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      existingItem.qtty += item.qtty; // Increase the quantity
    } else {
      this.cart.push(item);
    }
  }

  getCart() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
