import { Component, OnInit } from "@angular/core";
import { async } from "@angular/core/testing";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Observable } from "rxjs";
import { Appointment, Booking } from "src/app/models/appointment";
import { AccountService } from "src/app/services/account.service";
import { BranchService } from "src/app/services/branch.service";
import { BranchSchedulesService } from "src/app/services/branchschedules.service";
import { CustomerPetService } from "src/app/services/customerpet.service";
import { ServiceDetailService } from "src/app/services/servicedetail.service";
import { ServiceTypeService } from "src/app/services/servicetype.service";
import * as moment from 'moment'
import { BookingService } from "src/app/services/booking.service";
import { Router } from "@angular/router";
import { AppointmentConfirmService } from "src/app/services/appointmentconfirm.service";
import { Schedule } from "src/app/models/schedule";


@Component({

    selector:'app-customerserviceappointment-create',
    templateUrl:'./customerservices.appointments.create.component.html',
    styleUrls:['./customerservices.appointments.create.component.scss']

})


export class CustomerServicesAppointmentsCreateComponent implements OnInit {

  userInfo:any;
  public datePickerConfig?:Partial<BsDatepickerConfig>
  public appointment: Appointment = new Appointment();
  BranchList?:any;
  ServiceTypeList?:any;
  ServiceDetails?:any;
  PetDetailList?:any;
  BranchScheduleList?:any;
  BranchID?:number;
  selectedSlotDate?:any;
  bsValue?:Date = new Date();
  selectedSlot:boolean = false;
  selectedServiceTypeNameText:string ='';
  selectedBranchNameText:string='';
  selectedCustomerPetNameText:string='';

  selectedServiceDetails?:any[] = [];
  schedule!:Schedule;

  constructor(private acc: AccountService, 
    private router: Router,
    private branchService: BranchService,
    private serivceTypeService:ServiceTypeService,
    private serviceDetailService: ServiceDetailService,
    private customerPetService:CustomerPetService,
    private branchSchedulesService:BranchSchedulesService,
    private bookingService:BookingService,
    private appointmentConfirm:AppointmentConfirmService){

    this.datePickerConfig = Object.assign(new BsDatepickerConfig(),{
        
        containerClass:'theme-default',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        withTimepicker:false,
        minDate: new Date(),
    });


  }

        
  ngOnInit(): void {


    this.schedule = new Schedule;
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "");
    this.appointment.booking = new Booking;

    this.GetServiceTypeList();
    this.GetBranchList();
    this.getCustomerPets();

      
  }


  CreateAppointment = async() => {


     if(this.selectedSlotDate === null)
        return;

        //this.appointment.booking.appointmentDate = this.selectedSlotDate;
        this.appointment.booking.bookingStatusID =1;
        this.appointment.booking.customerID = this.userInfo.data.customers.customer.customerID;

        let results:any = await this.bookingService.CreateAppointment(this.appointment);

        debugger;

        if(results !== null){

          if(results.status){

              this.appointmentConfirm.addSessionAppointmentConfirm(results);
              this.router.navigate(['/customer/appointments/create/confirm/'+ results.data.bookingHeadID +'']);
              

          }
        }


  }

  GetBranchList = async() => {

        let results:any = await this.branchService.getBranchs();

        if(results !=null){

          this.BranchList = results?.data;
        }

  }
  GetServiceTypeList = async() => {

    let results:any = await this.serivceTypeService.getServiceTypes();

    if(results !=null){

      this.ServiceTypeList = results?.data;
    }

}

onServiceTypeChange = async (e:any) => {

      let results:any = await this.serviceDetailService.getServiceDetails(e.target.value);
      if(results !=null ){

        this.ServiceDetails =  results?.data;
      }
}        

getCustomerPets = async() => {

   let results:any = await this.customerPetService.CustomersPETList();

   if(results !=null){

        this.PetDetailList = results?.data;
   }
}


onBranchSelect = async(e:any) => {

 
   this.BranchID = e.target.value;
  
}

onBranchSchedule = async(e:any) => {
 
this.schedule.scheduleDate = e;
   let results:any = await this.branchSchedulesService.getBranchSchedules((this.BranchID  || 0), this.schedule.scheduleDate)
   if(results !=null){
       this.BranchScheduleList = results.data;
   }

}



onSelectSlot = async(e:any)=> {

  if(e === null)
      return;

    let btnSlots = document.querySelectorAll('.btnSlot');

    btnSlots.forEach((item, i) => {

        item.classList.remove('active');

    });

   this.selectedSlotDate = e.target?.value;
   this.appointment.booking.appointmentDate =  this.selectedSlotDate;
   e.target.className += ' active';
}


onFinalizeSchedule = async() => {

 

     let serviceTypeOption:any = document.querySelector('#serviceTypeID');
      if(serviceTypeOption !=null)
          this.selectedServiceTypeNameText= serviceTypeOption.options[serviceTypeOption.selectedIndex].text;

         let branchOption:any = document.querySelector('#branchID');
          if(branchOption !=null)
              this.selectedBranchNameText= branchOption.options[branchOption.selectedIndex].text;

              let customerPetOption:any = document.querySelector('#customerPetID');
              if(customerPetOption !=null)
                  this.selectedCustomerPetNameText= customerPetOption.options[customerPetOption.selectedIndex].text;




                  let serviceDetailList = document.querySelectorAll('.chkServiceDetails');

                  serviceDetailList.forEach((item:any, i) => {

                         if(item.checked === true){
                             
                          let nextElLabel = item.nextElementSibling;
                               this.selectedServiceDetails?.push({serviceTypeID:this.appointment.booking.serviceTypeID, serviceDetailID:item.value, serviceDetailNameEN: nextElLabel.textContent});

                         }

                  });

                         
                 this.appointment.bookingDetails = this.selectedServiceDetails;


}




}