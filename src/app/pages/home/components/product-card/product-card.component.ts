import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../data/products.data';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();
  onAdd() {
    this.add.next(this.product)
  }
}
