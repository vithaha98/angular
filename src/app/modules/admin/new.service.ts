import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../News';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  news = 'https://5e7aaa520e04630016332391.mockapi.io/product';;
  constructor(
    private http: HttpClient
  ) { }
  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.news);
  }
}
