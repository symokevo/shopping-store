import { Component } from '@angular/core';
import { PRODUCTS } from '../../../../data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = PRODUCTS;
}
