import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { CustomerServicesAppointmentsCreateComponent } from './appointments/create/customerservices.appointments.create';
import { CustomerServicesAppointmentsComponent } from './appointments/customerservices.appointments.component';
import { CustomerservicesComponent } from './customerservices.component';
import { CustomerServicesDashboardComponent } from './dashboard/customerservices.dashboard.component';
import { CustomerServicesPetsComponent } from './pets/customerservices.pets.component';
import { CustomerServicesPetsCreateComponent } from './pets/create/customerservices.pets.create';
import { CustomerServicesProfileComponent } from './profile/customerservices.profile.component';
import { CustomerServicesAppointmentsCreateConfirmComponent } from './appointments/create/confirm/customerservices.appointments.create.confirm.component';

const routes: Routes =[

       {path:'', component:CustomerservicesComponent, canActivate:[AuthGuard],
       
       children:[
              
             {path:'dashboard', component:CustomerServicesDashboardComponent}  ,
             {path:'appointments', component:CustomerServicesAppointmentsComponent},
             {path:'appointments/create', component:CustomerServicesAppointmentsCreateComponent},
             {path:'appointments/create/confirm/:{id}', component:CustomerServicesAppointmentsCreateConfirmComponent},
             {path:'pets', component:CustomerServicesPetsComponent},
             {path:'pets/create', component:CustomerServicesPetsCreateComponent},
             {path:'profile', component:CustomerServicesProfileComponent}            

             
       ]}


];


@NgModule({


     imports:[RouterModule.forChild(routes)],
     exports:[RouterModule]

})


export class CustomerServiceRoutingModule {}