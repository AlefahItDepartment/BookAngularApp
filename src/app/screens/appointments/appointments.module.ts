import {NgModule} from '@angular/core';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentsRoutingModule } from './appointments.routing.module';

@NgModule({

    imports: [AppointmentsRoutingModule],
    declarations: [AppointmentsComponent]

})

export class AppointmentsModule {

}