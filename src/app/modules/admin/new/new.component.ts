import { Component, OnInit } from '@angular/core';
import {News} from '../../../News';
import {NewService} from '../new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  news: News[];
  page = 1;
  pageSize = 10;
  selected: News;
  constructor(
    private newService: NewService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews(){
    this.newService.getNews().subscribe(response => {
      this.news = response;
    }, error =>{

    });
  }

}
