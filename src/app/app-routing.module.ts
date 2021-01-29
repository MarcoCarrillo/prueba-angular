import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


const routes:Routes = [
 { path: 'about', component: AboutComponent }, //cada objeto del arreglo representa una ruta
 { path: 'contact', component: ContactComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'home', component: HomeComponent },
 { path: '', pathMatch: 'full', redirectTo: '/home' },
 { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
