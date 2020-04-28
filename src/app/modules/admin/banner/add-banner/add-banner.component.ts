import { Component, OnInit } from '@angular/core';
import {Banners} from "../../../../Banners";
import {BannerService} from "../../banner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss']
})
export class AddBannerComponent implements OnInit {
  banner: Banners = new Banners();
  constructor(
    private bannerService: BannerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  createBanner(){
    this.bannerService.addBanner(this.banner).subscribe(p =>{
      return this.router.navigateByUrl('admin/banner')
    })
  }

}
