import { Injectable } from '@angular/core';
import {Product} from '../../Product';
import  { Observable } from "rxjs";
/*
 get du lieu
*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
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
    return this.http.delete<Product>(this.products + `/${id}`, httpOption);
  }
  updateProductById(data: Product): Observable<Product> {
    return this.http.put<Product>(this.products + `/${data.id}`, data);
  }
}
