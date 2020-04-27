import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../News';
import {Product} from "../../Product";

@Injectable({
  providedIn: 'root'
})
export class NewService {
  news = 'https://5ea1b36cb9f5ca00166c20fd.mockapi.io/news';;
  constructor(
    private http: HttpClient
  ) { }
  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.news);
  }
  getNewsId(id: number): Observable<News>{
    return this.http.get<News>(this.news + `/${id}`);
  }
  updateNewid(data: News): Observable<News> {
    return this.http.put<News>(this.news + `/${data.id}`, data);
  }
}
