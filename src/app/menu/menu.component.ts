import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  products: Iproducts[] = products;
  selectedCategory: string | null = null;

  constructor(private cartService: CartService) {}

  addToCart(product: Iproducts) {
    this.cartService.addToCart(product);
  }

  filterProducts(category: string) {
    this.selectedCategory = category;
  }

  showAllProducts() {
    this.selectedCategory = null;
  }

  getProductDisplayStyle(product: Iproducts): string {
    if (this.selectedCategory && product.category !== this.selectedCategory) {
      return 'none';
    }
    return 'block';
  }
}
