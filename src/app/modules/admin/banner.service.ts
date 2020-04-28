import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Banners} from "../../Banners";
const httOption = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )}

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  banners = 'https://5ea8621c35f3720016608fdc.mockapi.io/banner/banner';
  constructor(
    private http: HttpClient
  ) { }
  getBanner(): Observable<Banners[]>{
    return this.http.get<Banners[]>(this.banners)
  }
  getBannerId(id: number) : Observable<Banners>{
    return this.http.get<Banners>(this.banners +`/${id}`)
  }

  addBanner(banner:Banners): Observable<Banners>{
    return this.http.post<Banners>(this.banners, banner);
  }

  removebannerId(id: number): Observable<Banners>{
    return this.http.delete<Banners>(this.banners +`/${id}`,httOption)
  }
  updateBannerId(data: Banners): Observable<Banners>{
    return this.http.put<Banners>(this.banners +`/${data.id}`,data)
  }
}
