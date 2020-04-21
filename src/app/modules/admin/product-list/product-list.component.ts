import { Component, OnInit } from '@angular/core';
import {Product} from '../../../Product';
import {ProductService} from '../product.service';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selected: Product;
  page = 1;
  pageSize  = 10;
  constructor(
    private productService: ProductService,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.titleService.setTitle('Products');
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    }, error => {

    });
  }
  removeProduct(id){
    this.productService.removeProductById(id).subscribe(response => {
      this.products = this.products.filter(product => product.id !== response.id);
    });
  };

}
