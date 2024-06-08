import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../../../../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = PRODUCTS;
  constructor(private cartService: CartService) {}

  // onAdd method
  onAdd(product: Product) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    })
  }
}
