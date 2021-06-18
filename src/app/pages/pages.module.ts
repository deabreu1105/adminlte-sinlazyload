import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ! Importamos el mudulo SharedModule
import { SharedModule } from '../shared/shared.module';

// ! Importamos el mudulo de rutas
import { AppRoutingModule } from '../app-routing.module';

// ? Importamos los componentes
import { MainPageComponent } from './main-page/main-page.component';
import { Error404Component } from './main-page/error404/error404.component';
import { HomeComponent } from './main-page/home/home.component';
import { UsersComponent } from './main-page/users/users.component';
import { CategoriesComponent } from './main-page/categories/categories.component';
import { SubcategoriesComponent } from './main-page/subcategories/subcategories.component';
import { StoresComponent } from './main-page/stores/stores.component';
import { ProductsComponent } from './main-page/products/products.component';
import { OrdersComponent } from './main-page/orders/orders.component';
import { SalesComponent } from './main-page/sales/sales.component';
import { DisputesComponent } from './main-page/disputes/disputes.component';
import { MessagesComponent } from './main-page/messages/messages.component';





// ! En los componentes personalizados se declara  los componentes
@NgModule({
  declarations: [
    MainPageComponent,
    Error404Component,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    StoresComponent,
    ProductsComponent,
    OrdersComponent,
    SalesComponent,
    DisputesComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
