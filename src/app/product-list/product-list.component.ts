import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit(): void {
    this.getProducts();

    // this.products = this.ProductService.getProductList();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    }, error => {

    });
  }

  removeProduct = (id: number) => this.productService.removeProductById(id);

}
