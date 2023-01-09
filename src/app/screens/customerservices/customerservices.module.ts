import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgModule} from '@angular/core'
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerServicesAppointmentsComponent } from './appointments/customerservices.appointments.component';
import { CustomerservicesComponent } from './customerservices.component';
import { CustomerServiceRoutingModule } from './customerservices.routing.module';
import { CustomerServicesDashboardComponent } from './dashboard/customerservices.dashboard.component';
import { CustomerServicesPetsComponent } from './pets/customerservices.pets.component';
import { CustomerServicesPetsCreateComponent } from './pets/create/customerservices.pets.create';
import { CustomerServicesProfileComponent } from './profile/customerservices.profile.component';
import {  NgxDropzoneModule } from 'ngx-dropzone';
import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { CustomerServicesAppointmentsCreateComponent } from './appointments/create/customerservices.appointments.create';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ProgressModule } from '../../progress/progress.module';
import { ProgressComponent } from '../../progress/progress.component';
import { ProgressStepComponent } from '../../progress/progress-step/progress-step.component';
import { ProgressStepDirective } from 'src/app/progress/progress-step.directive';
import { CustomerServicesAppointmentsCreateConfirmComponent } from './appointments/create/confirm/customerservices.appointments.create.confirm.component';
import { QRCodeModule } from 'angularx-qrcode';
import { UserPasswordValidatorDirective } from 'src/app/directives/user.password.validator.directive';


 export function getDatepickerConfig(): BsDatepickerConfig {
   return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD'
  });
 }

@NgModule({


     imports:[CommonModule,
       FormsModule,
        ReactiveFormsModule,
         CustomerServiceRoutingModule,
          BsDatepickerModule,
          TimepickerModule,
           NgxDropzoneModule,
            AgGridModule,
             ProgressModule,
             QRCodeModule
             ],
     declarations:[
            
           CustomerservicesComponent,
           CustomerServicesAppointmentsComponent,
           CustomerServicesPetsComponent,
           CustomerServicesProfileComponent,
           CustomerServicesDashboardComponent,
           CustomerServicesPetsCreateComponent,
           CustomerServicesAppointmentsCreateComponent,
           CustomerServicesAppointmentsCreateConfirmComponent,
            ProgressComponent,
            ProgressStepComponent,
            ProgressStepDirective,
            UserPasswordValidatorDirective
          ],
      providers:[
        { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
      ] 


})


export class CustomerServiceModule {}