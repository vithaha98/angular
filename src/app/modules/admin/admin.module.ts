import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AdminRoutingModule} from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCreatComponent } from './product-creat/product-creat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NewComponent } from './new/new.component';
import { DetialComponent } from './new/detial/detial.component';
import { EditComponent } from './new/edit/edit.component';
import { AddComponent } from './new/add/add.component';
import { BannerComponent } from './banner/banner.component';
import { DetailComponent } from './banner/detail/detail.component';
import { DetailBannerComponent } from './banner/detail-banner/detail-banner.component';
import { AddBannerComponent } from './banner/add-banner/add-banner.component';
import { EditBannerComponent } from './banner/edit-banner/edit-banner.component';



@NgModule({
  declarations: [AdminComponent, ProductListComponent, HeaderComponent, FooterComponent, ProductCreatComponent, ProductEditComponent, NewComponent, DetialComponent, EditComponent, AddComponent, BannerComponent, DetailComponent, DetailBannerComponent, AddBannerComponent, EditBannerComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,


  ],
  bootstrap:[AdminComponent]
})
export class AdminModule { }
