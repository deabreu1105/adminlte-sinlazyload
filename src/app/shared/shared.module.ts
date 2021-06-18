import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ? Debemos importar el modulo de rutas
import { AppRoutingModule } from '../app-routing.module';

// ? Importamos componentes
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';





// ! En los componentes personalizados de declara y se exporta los componentes
@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SideBarComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
