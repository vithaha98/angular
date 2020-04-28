import { Component, OnInit } from '@angular/core';
import {News} from "../../../../News";
import {NewService} from "../../new.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  new: News = new News();
  constructor(
    private newService: NewService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  create(){
    this.newService.addNew(this.new).subscribe(p =>{
      return this.router.navigateByUrl('admin/news')
    })
  }

}
