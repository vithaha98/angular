import { Component, OnInit } from '@angular/core';
import {Banners} from "../../../Banners";
import {BannerService} from "../banner.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner : Banners[];
  page = 1;
  pageSize = 5;
  constructor(
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.getBanner();
  }
  getBanner(){
    this.bannerService.getBanner().subscribe( response =>{
      this.banner = response;
    }, error => {

    });
  }

  removeBanner(id){
    this.bannerService.removebannerId(id).subscribe(response =>{
      this.banner = this.banner.filter(banner => banner.id !== response.id);
    })
  }

}
