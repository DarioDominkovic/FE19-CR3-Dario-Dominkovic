import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Iproducts[] = [];
  amount: number = 0;
  serviceAmount: number = 0;
  total: number = 0;
  discountedTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateBill();
  }

  calculateBill(): void {
    this.amount = this.calculateTotal();
    this.serviceAmount = this.amount * 0.1; // 10% of the total amount
    this.total = this.amount;

    if (this.amount > 40) {
      const discount = this.amount * 0.15; // 15% discount
      this.discountedTotal = this.amount - discount;
    } else {
      this.discountedTotal = 0;
    }
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.qtty;
    }
    return total;
  }

  increaseQuantity(item: Iproducts): void {
    item.qtty++;
    this.calculateBill();
  }

  decreaseQuantity(item: Iproducts): void {
    if (item.qtty > 1) {
      item.qtty--;
      this.calculateBill();
    }
  }

  removeItem(item: Iproducts): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.calculateBill();
    }
  }
}
