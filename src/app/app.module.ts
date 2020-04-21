import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatogeryComponent } from './catogery/catogery.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CatogeryComponent,
    ProductComponent,
    ProductListComponent,
    SlideComponent,
    ProductAddComponent,
    ProductManagerComponent,
    AboutComponent,
    ServiceComponent,
    HomepageComponent,
    ProductDetailComponent,
    NotFoundComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
