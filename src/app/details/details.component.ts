import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['index'];
      this.product = { ...products[this.index] };
    });
  }
}
