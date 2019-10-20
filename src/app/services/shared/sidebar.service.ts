import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'nav-icon icon-speedometer',
      submenu: [
        {
          titulo: 'Dashboard', url: '/dashboard'
        },
        {
          titulo: 'ProgressBars', url: '/progress'
        },
        {
          titulo: 'Graficas', url: '/grafica1'
        },
        {
          titulo: 'Promesas', url: '/promesas'
        },
        {
          titulo: 'RxJs', url: '/rxjs'
        }
      ]
    }
  ];
  constructor() { }
}
