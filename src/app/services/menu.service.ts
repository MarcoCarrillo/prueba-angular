import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[]= [
    {
      titulo: 'Paginas',
      subMenus:[
        {
          titulo: 'Home',
          url: '/home'
        },
        {
          titulo: 'About',
          url: '/about'
        },
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'Contact',
          url: '/contact'
        },
        {
          titulo: 'Usuarios',
          url: '/usuarios'
        }
      ]
    }
  ]

  obtenerMenus(): Menu[]{
    return this.menus;
  }

  constructor() { }
}
