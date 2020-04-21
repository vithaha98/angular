import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreatComponent} from './product-creat/product-creat.component';

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
          {
            path: 'create',
            component: ProductCreatComponent
          }

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
