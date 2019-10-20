import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
        { path: 'grafica1', component: Graficas1Component, data: { titulo: 'Graficas' } },
        { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs' } },
        { path: 'accout-setting', component: AccoutSettingsComponent, data: { titulo: 'Configuracion' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
},

];

// tslint:disable-next-line: semicolon
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)