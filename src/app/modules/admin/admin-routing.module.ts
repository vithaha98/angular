import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreatComponent} from './product-creat/product-creat.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {NewComponent} from './new/new.component';
import {DetialComponent} from './new/detial/detial.component';
import {EditComponent} from "./new/edit/edit.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AddComponent} from "./new/add/add.component";
import {BannerComponent} from "./banner/banner.component";
import {DetailBannerComponent} from "./banner/detail-banner/detail-banner.component";
import {AddBannerComponent} from "./banner/add-banner/add-banner.component";
import {EditBannerComponent} from "./banner/edit-banner/edit-banner.component";

const routes: Routes = [
  {
    path: '', // localhost/admin
    component: AdminComponent,
    children: [
      {
        path: '', // localhost/admin
        component: ProductListComponent
      },
      {
        path: 'products', // localhost/admin/products
        children: [
          {
            path: 'list', // localhost/admin/products/list
            component: ProductListComponent
          },
          {path: 'detail/:id',
            component: ProductDetailComponent
          },
          {
            path: 'create',
            component: ProductCreatComponent
          },
          {
            path: 'edit/:id',
            component: ProductEditComponent
          }

        ]
      },
      {
        path: 'news',
        children: [
          {path:'',component: NewComponent},
          {path:'detail/:id',component: DetialComponent},
          {path: 'edit/:id',component: EditComponent},
          {path: 'add', component: AddComponent}
        ]
      },
      {
        path: 'banner',
        children: [
          {path: '',component: BannerComponent},
          {path: 'chitiet/:id',component: DetailBannerComponent},
          {path: 'add-banner',component: AddBannerComponent},
          {path: 'edit-banner/:id',component: EditBannerComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
