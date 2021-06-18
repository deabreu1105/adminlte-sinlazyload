// !Este archivo fue creado para hacer lazy loading
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// ! Para hacer Lazy Loading hay que crear un modulo en cada subcarpeta de page/main-page
// * por ejemplo  ==> ng g m pages/main-page/home

// ? Importamos los componentes
import { LoginComponent } from './login.component';


const routes: Routes = [
  {  path: '', component: LoginComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forChild(routes)],   // ! en Lazy loading cambiamos el root por forChild
  exports: [RouterModule]
})
export class LoginRoutingModule { }
