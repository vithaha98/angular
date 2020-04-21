import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../../Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.scss']
})
export class ProductCreatComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  createProduct(){
    // console.log(this.product);
    this.productService.createProduct(this.product).subscribe(p =>{
      console.log(p);
      return this.router.navigate(['/admin', 'products', 'list']);
    })
  }

}
