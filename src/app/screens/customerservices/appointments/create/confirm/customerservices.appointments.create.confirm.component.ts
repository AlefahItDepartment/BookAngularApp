import { Component, OnInit } from "@angular/core";
import {SafeUrl} from '@angular/platform-browser'
import { ActivatedRoute } from "@angular/router";
import { async } from "rxjs";
import { AppointmentConfirmService } from "src/app/services/appointmentconfirm.service";
import { BookingService } from "src/app/services/booking.service";



@Component({


  selector:'app-customerappointmentconfirm',
  templateUrl:'./customerservices.appointments.create.confirm.component.html',
  // styleUrls:['./customerservices.appointments.create.confirm.component.css']



})


export class CustomerServicesAppointmentsCreateConfirmComponent implements OnInit {

    public appointmentConfirmData:any;
    public url:SafeUrl ='';
    constructor(private appointmentConfirm: AppointmentConfirmService,
       private activatedRouter: ActivatedRoute,
       private booking:BookingService){}

     ngOnInit(): void {
      


      if(this.appointmentConfirm !=null){
      this.appointmentConfirm.appointmentConfirm$.subscribe({

        next: (res:any) => {

          this.appointmentConfirmData = res;
          
        }
      });
    }
    else
    {

        this.getAppointment(); 
    }
}

     getAppointment  = () => {

       this.activatedRouter.params.subscribe((params:any) => {

        this.booking.GetAppointment(<number>params['id']).then((reslt:any)=> {

          this.appointmentConfirmData = reslt;

        })

        });

     }



     onCodeChange(url:SafeUrl):void {

        this.url = url;

     }

}