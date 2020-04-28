import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../../Product';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const id = parseInt(param.get('id'), 10);
        return this.productService.getProductById(id);
      })
    ).subscribe(product => {
      this.product = product;
    });

  }
}
