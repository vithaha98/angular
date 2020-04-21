import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../../Product';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
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
  editProduct(){
    console.log(this.product);
    return this.productService.updateProductById(this.product).subscribe(() => this.router.navigateByUrl('/admin/products/list'));
  }


}
