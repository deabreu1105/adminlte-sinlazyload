// !Este archivo fue creado para hacer lazy loading
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ! Para hacer Lazy Loading hay que crear un modulo en cada subcarpeta de page/main-page
// * por ejemplo  ==> ng g m pages/main-page/home

// ? Importamos los componentes
import { MainPageComponent } from './main-page/main-page.component';
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
import { Error404Component } from './main-page/error404/error404.component';




const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule) },
  { path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'subcategories', component: SubcategoriesComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'disputes', component: DisputesComponent },
      { path: 'messages', component: MessagesComponent },
      { path: '**', component: Error404Component }
    ]
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forChild(routes)],   // ! en Lazy loading cambiamos el root por forChild
  exports: [RouterModule]
})
export class PagesRoutingModule { }
