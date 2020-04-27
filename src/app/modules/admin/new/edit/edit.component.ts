import { Component, OnInit } from '@angular/core';
import {News} from "../../../../News";
import {NewService} from "../../new.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  news: News;

  constructor(
    private newService: NewService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getNews()
  }
  getNews(){
    this.route.paramMap.pipe(
      switchMap((param:ParamMap) => {
        const id = parseInt(param.get('id'),10);
        return this.newService.getNewsId(id);
      })
    ).subscribe( news => {
      this.news = news
    });
  }
  editnew(){
    return this.newService.updateNewid(this.news).subscribe(() => this.router.navigateByUrl('/admin/news'));
  }

}
