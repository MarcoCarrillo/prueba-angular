import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PromesaComponent } from './promesa/promesa.component';
import { ObservableComponent } from './observable/observable.component';

import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent,
    PromesaComponent,
    ObservableComponent,
    UsuariosComponent
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }
