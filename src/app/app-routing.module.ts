import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  { path: 'add', component: ProductAddComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'home',
    component: HomepageComponent
  },
  {
    path: 'productmanager',
    component: ProductManagerComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'ablout',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
