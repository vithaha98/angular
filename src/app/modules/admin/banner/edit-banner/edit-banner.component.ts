import { Component, OnInit } from '@angular/core';
import {Banners} from "../../../../Banners";
import {BannerService} from "../../banner.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.scss']
})
export class EditBannerComponent implements OnInit {
  banner : Banners;
  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBanner()
  }
  getBanner(){
    this.route.paramMap.pipe(
      switchMap((param:ParamMap) => {
        const id = parseInt(param.get('id'),10);
        return this.bannerService.getBannerId(id);
      })
    ).subscribe( banner => {
      this.banner = banner
    });
  }
  editBanner(){
    return this.bannerService.updateBannerId(this.banner).subscribe(()=>this.router.navigateByUrl('/admin/banner'))
  }

}
