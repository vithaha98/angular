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
          {path:':id',component: DetialComponent},
          {path: 'edit/:id',component: EditComponent}
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
