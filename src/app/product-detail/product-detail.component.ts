import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(data => {
      let { id } = data;
      this.product = this.productService.getProduct(id);
    })
    
  }

}
