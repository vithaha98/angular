import { Component, OnInit } from '@angular/core';
import {Banners} from "../../../../Banners";
import {BannerService} from "../../banner.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-detail-banner',
  templateUrl: './detail-banner.component.html',
  styleUrls: ['./detail-banner.component.scss']
})
export class DetailBannerComponent implements OnInit {
  banner: Banners
  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getBanner()
  }
  getBanner(){
    this.route.paramMap.pipe(
      switchMap((param:ParamMap) =>{
        const id = parseInt(param.get('id'),10);
        return this.bannerService.getBannerId(id);
      })
    ).subscribe(banner =>{
      this.banner= banner
    });
  }

}
