import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  selected: Product;
  constructor(
    private ProductService : ProductService
  ) { }
  ngOnInit(): void {
    this.products = this.ProductService.getProductList();
  }
  
  removeProduct = (id:number) => {
    this.products = this.ProductService.deleteProduct(id);
  }
  
}
