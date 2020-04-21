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



@NgModule({
  declarations: [AdminComponent, ProductListComponent, HeaderComponent, FooterComponent, ProductCreatComponent],
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
