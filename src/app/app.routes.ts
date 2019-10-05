import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
// import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    // { 
    //     path: '', 
    //     component: PagesComponent,
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //     ]
    // },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },

    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
