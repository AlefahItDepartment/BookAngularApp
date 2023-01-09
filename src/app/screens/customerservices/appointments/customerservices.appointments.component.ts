import { Component, OnInit, ViewChild } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, IDatasource, IGetRowsParams } from "ag-grid-community";
import { Observable } from "rxjs";
import { agGridRequest } from "src/app/models/agridrequest";
import { BookingService } from "src/app/services/booking.service";
import * as bootstrap from 'bootstrap'
import * as moment from "moment";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {CustomerServicesAppointmentsCreateComponent} from './create/customerservices.appointments.create'


@Component({

   selector:'app-customerserviceappointment',
   templateUrl:'./customerservices.appointments.component.html'


})

export class CustomerServicesAppointmentsComponent implements OnInit {


    private userInfo:any;

    public gridApi!:GridApi;
    public columnApi!:ColumnApi;


    public gridCloseApi!:GridApi;
    public columnCloseApi!:ColumnApi;


    public gridPendingApi!:GridApi;
    public columnPendingApi!:ColumnApi;

    public agGridrequest = new agGridRequest();
    public columnDefs!:ColDef[];
    public defaultColDef!: ColDef;
    public gridOptions!: GridOptions; 

    public columnCloseDefs!:ColDef[];
    public defaultCloseColDef!: ColDef;
    public gridCloseOptions!: GridOptions; 

    public columnPendingDefs!:ColDef[];
    public defaultPendingColDef!: ColDef;
    public gridPendingOptions!: GridOptions; 


    public overlayLoadingTemplate:any;
    public overlayNoRowsTemplate:any;

    @ViewChild('gridActiveAppointments') gridActiveAppointments!:AgGridAngular;
    @ViewChild('gridCloseAppointments') gridCloseAppointments!:AgGridAngular;
    @ViewChild('gridPendingAppointments') gridPendingAppointments!:AgGridAngular;
  

    constructor(private bookingService:BookingService, private modal:NgbModal) {

     this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

    }

    ngOnInit(): void {
        
      //Active Appointments Settings
      this.columnDefs =[

        {field:'bookingDate', headerName:'Booking Date', width:160, hide:true, cellRenderer: (params:any) => {
          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'bookingNumber', headerName:'Appt #',width:120},
        {field:'appointmentDate', headerName:'Appt Date',width:140, cellRenderer: (params:any) => {    

          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'petName', headerName:'Pet Name',width:200},
        {field:'serviceTypeNameEN', headerName:'Service',width:200},
        {field:'bookingStatusNameEN', headerName:'Status',width:115, cellRenderer: function(params:any) {      
          return '<span><div class="badge '+ ((params.value || 'Pending') =='Pending' ? 'bg-info text-info bg-opacity-10' : (params.value || 'Pending') =='Assign' ? 'bg-success text-success bg-opacity-10' : (params.value || 'Pending') =='Close' ? 'bg-danger text-danger bg-opacity-10':'bg-light')    +'">'+ params.value +'</div></span>'
        }},
    ]

      this.defaultColDef = {
        sortable: true,
        filter: true,
    };

    this.gridOptions = {
      pagination: true,
      rowModelType: 'infinite',
      cacheBlockSize: 20, // you can have your custom page size
      paginationPageSize: 20, //pagesize,
      rowHeight:50
      
      };

      //// End Active Appointments Settings


      // Close Appointments Settings

      this.columnCloseDefs =[

        {field:'bookingDate', headerName:'Booking Date', width:160, hide:true, cellRenderer: (params:any) => {
          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'bookingNumber', headerName:'Appt #',width:120},
        {field:'appointmentDate', headerName:'Appt Date',width:140, cellRenderer: (params:any) => {    

          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'petName', headerName:'Pet Name',width:200},
        {field:'serviceTypeNameEN', headerName:'Service',width:200},
        {field:'bookingStatusNameEN', headerName:'Status',width:115, cellRenderer: function(params:any) {      
          return '<span><div class="badge '+ ((params.value || 'Pending') =='Pending' ? 'bg-info text-info bg-opacity-10' : (params.value || 'Pending') =='Assign' ? 'bg-success text-success bg-opacity-10' : (params.value || 'Pending') =='Close' ? 'bg-danger text-danger bg-opacity-10':'bg-light')    +'">'+ params.value +'</div></span>'
        }},
    ]

      this.defaultCloseColDef = {
        sortable: true,
        filter: true,
    };

    this.gridCloseOptions = {
      pagination: true,
      rowModelType: 'infinite',
      cacheBlockSize: 20, // you can have your custom page size
      paginationPageSize: 20, //pagesize,
      rowHeight:50
      
      };

      //End Close Appointments Settings

      let formats =[
        moment.ISO_8601
      ]

 // Pending Appointments Settings
      this.columnPendingDefs =[

        {field:'bookingDate', headerName:'Booking Date', width:160, hide:true, cellRenderer: (params:any) => {
          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'bookingNumber', headerName:'Appt #',width:120},
        {field:'appointmentDate', headerName:'Appt Date',width:140, cellRenderer: (params:any) => {    

          return moment(params.value).format('DD/MM/YYYY HH:mm')
        }},
        {field:'petName', headerName:'Pet Name',width:200},
        {field:'serviceTypeNameEN', headerName:'Service',width:200},
        {field:'bookingStatusNameEN', headerName:'Status',width:115, cellRenderer: function(params:any) {      
          return '<span><div class="badge '+ ((params.value || 'Pending') =='Pending' ? 'bg-info text-info bg-opacity-10' : (params.value || 'Pending') =='Assign' ? 'bg-success text-success bg-opacity-10' : (params.value || 'Pending') =='Close' ? 'bg-danger text-danger bg-opacity-10':'bg-light')    +'">'+ params.value +'</div></span>'
        }},
    ]

      this.defaultPendingColDef = {
        sortable: true,
        filter: true,
    };

    this.gridPendingOptions = {
      pagination: true,
      rowModelType: 'infinite',
      cacheBlockSize: 20, // you can have your custom page size
      paginationPageSize: 20, //pagesize,
      rowHeight:50
      
      };

      //End Pending Appointments Settings

      this.overlayLoadingTemplate =
      '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
     this.overlayNoRowsTemplate =
      "<span style=\"padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;\">This is a custom 'no rows' overlay</span>";

    }
    
 ///////// Active Appointments 
   onActiveAppointmentsGridReady(params: GridReadyEvent) {

     this.gridApi = params.api;
     this.columnApi = params.columnApi;
     this.gridApi.setDatasource(this.dataActiveAppointmentsSource);
   }
   onActiveAppointmentsPaginationChanged(event:any) { 
   }
 
  
   dataActiveAppointmentsSource:IDatasource = {
  
      getRows: (params: IGetRowsParams) => {
 
       let gridReq =  new agGridRequest();
       gridReq.id = this.userInfo.data.customers.customer.customerID;
       gridReq.startRow = params.startRow;
       gridReq.endRow = params.endRow;     

        this.bookingService.GetActiveAppointments(gridReq).then((response:any) => {
          console.log(response.data.totalRecords);
            params.successCallback(response.data, response.totalRecords);
                        
        }); 
      }
   }
   //////////// End Active Appointments



   /////////// Close Appointments
   onCloseAppointmentsGridReady(params: GridReadyEvent) {

    this.gridCloseApi = params.api;
    this.columnCloseApi = params.columnApi;
    this.gridCloseApi.setDatasource(this.dataCloseAppointmentsSource);
  }
  onCloseAppointmentsPaginationChanged(event:any) { 
  }

 
  dataCloseAppointmentsSource:IDatasource = {
 
     getRows: (params: IGetRowsParams) => {

      let gridReq =  new agGridRequest();
      gridReq.id = this.userInfo.data.customers.customer.customerID;
      gridReq.startRow = params.startRow;
      gridReq.endRow = params.endRow;     

       this.bookingService.GetCloseAppointments(gridReq).then((response:any) => {
        console.log(response.data.totalRecords);
           params.successCallback(response.data, response.totalRecords);
                       
       }); 
     }
  }

  ////////// End Close Appointments





  /////////// Pending Appointments
  onPendingAppointmentsGridReady(params: GridReadyEvent) {

    this.gridPendingApi = params.api;
    this.columnPendingApi = params.columnApi;
    this.gridPendingApi.setDatasource(this.dataPendingAppointmentsSource);
  }
  onPendingAppointmentsPaginationChanged(event:any) { 
  }

 
  dataPendingAppointmentsSource:IDatasource = {
 
     getRows: (params: IGetRowsParams) => {

      let gridReq =  new agGridRequest();
      gridReq.id = this.userInfo.data.customers.customer.customerID;
      gridReq.startRow = params.startRow;
      gridReq.endRow = params.endRow;     

       this.bookingService.GetPendingAppointments(gridReq).then((response:any) => {
           params.successCallback(response.data, response.totalRecords);
                       
       }); 
     }
  }

  ////////// End Pending Appointments



  openAppointmentModal =() => {


    var modalRef = this.modal.open(CustomerServicesAppointmentsCreateComponent);

  }

}