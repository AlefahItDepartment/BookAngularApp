import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./screens/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./screens/aboutus/aboutus.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./screens/contactus/contactus.module').then(m => m.ContactusModule)
  },
  {
    path: 'bookappointment',
    loadChildren: () => import('./screens/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./screens/policy/policy.module').then(m => m.PolicyModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./screens/adminservices/adminservices.module').then(m => m.AdminServicesModule), canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./screens/customerservices/customerservices.module').then(m => m.CustomerServiceModule), canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
