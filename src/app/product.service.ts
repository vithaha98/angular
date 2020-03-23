import { Injectable } from '@angular/core';
import {data} from './MockProduct';
import {Product} from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product> = data;
  constructor() { }
  getProductList() {
    return this.products;
  }
  getProduct(id: Number){
    const product = this.products.find(product => product.id == id);
    console.log(product);
    if (product) {
      return product;
    } else {
      throw Error('Not Found');
    }
  }
  addProduct(product){
    let newObj = 
    {
      id:6,
      ...product,
      status:true
    };
    this.products.push(newObj);
  }
  deleteProduct(id:Number){
    this.products = this.getProductList().filter(product=>product.id !== id);
    return this.products;
  }
 
  

}
