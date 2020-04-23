import { Component, OnInit } from '@angular/core';
import {News} from '../../../../News';
import {NewService} from '../../new.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrls: ['./detial.component.scss']
})
export class DetialComponent implements OnInit {
  news: News;
  constructor(
    private newService: NewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getNews();
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

}
