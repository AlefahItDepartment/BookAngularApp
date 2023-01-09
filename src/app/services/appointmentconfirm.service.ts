import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs'


@Injectable({

    providedIn:'root',

})



export class AppointmentConfirmService {


     public appointmentConfirm$ = new BehaviorSubject(null);

    constructor() {}

    addSessionAppointmentConfirm(data:any){

        this.appointmentConfirm$.next(data);

    }
    removeSessionAppointmentConfirm(){

    }

}



