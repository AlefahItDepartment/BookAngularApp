export class Booking {

    bookingID?:number;
    bookingDate?:Date = new Date();
    bookingNumber?:string =' ';
    appointmentDate!:Date;   
    serviceTypeID!:number;  
    branchID!:number;
    customerID!:number;
    customerPetID!:number;
    bookingStatusID!:number;
}

export class BookingDetails {

    serviceTypeID?:number;
    serviceDetailID?:number;
}

export class Appointment {


    booking!: Booking;
    bookingDetails?:BookingDetails[];

}