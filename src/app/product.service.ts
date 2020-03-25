import { Injectable } from '@angular/core';
import {data} from './MockProduct';
import {Product} from './Product';
import  { Observable } from "rxjs";
/*
 get du lieu
*/
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products = 'https://5e7aaa520e04630016332391.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.products);

  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.products + `/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.products, product);
  }

  removeProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(this.products + `/${id}`);
  }

  updateProductById(data: Product): Observable<Product> {
    return this.http.put<Product>(this.products + `/${data.id}`, data);
  }


  // getProductList() {
  //   return this.products;
  // }
  // getProduct(id: Number){
  //   const product = this.products.find(product => product.id == id);
  //   console.log(product);
  //   if (product) {
  //     return product;
  //   } else {
  //     throw Error('Not Found');
  //   }
  // }
  // addProduct(product){
  //   let newObj =
  //   {
  //     id:6,
  //     ...product,
  //     status:true
  //   };
  //   this.products.push(newObj);
  // }
  // deleteProduct(id:Number){
  //   this.products = this.getProductList().filter(product=>product.id !== id);
  //   return this.products;
  // }



}
