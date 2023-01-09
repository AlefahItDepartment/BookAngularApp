import { Component, ViewChild, OnInit } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, IDatasource, IGetRowsParams } from "ag-grid-community";
import { agGridRequest } from "src/app/models/agridrequest";
import * as moment from 'moment';
import { BookingService } from "src/app/services/booking.service";
import { CustomerPetService } from "src/app/services/customerpet.service";



@Component({

selector:'app-customerservicesdashboard',
templateUrl:'./customerservices.dashboard.component.html'

})

export class CustomerServicesDashboardComponent implements OnInit {


    userInfo:any;

    public gridApi!:GridApi;
    public columnApi!:ColumnApi;

    public agGridrequest = new agGridRequest();
    public columnDefs!:ColDef[];
    public defaultColDef!: ColDef;
    public gridOptions!: GridOptions; 

    public overlayLoadingTemplate:any;
    public overlayNoRowsTemplate:any;

    @ViewChild('gridAppointments') gridAppointments!:AgGridAngular;


    public CountAppointmentsAssign?:number;
    public CountAppointmentsClose?:number;
    public CountAppointmentsPending?:number;
    public CountCustomerPets?:number;

 
 constructor(private bookingService: BookingService, private customerPetService: CustomerPetService) {}


    ngOnInit():void {


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


      //End Pending Appointments Settings

      this.overlayLoadingTemplate =
      '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
     this.overlayNoRowsTemplate =
      "<span style=\"padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;\">This is a custom 'no rows' overlay</span>";


      this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "");


      this.customerPetService.CustomersPETList().then((res:any) => {

        this.CountCustomerPets = res.data.length;
      })


      this.bookingService.ActiveAppointments().then((res:any) => {

        this.CountAppointmentsAssign = res.data.length;
 
       });

      this.bookingService.CloseAppointments().then((res:any) => {

       this.CountAppointmentsClose = res.data.length;

      });

      this.bookingService.PendingAppointments().then((res:any) => {

        this.CountAppointmentsPending = res.data.length;
 
       });


    }

    
 ///////// Active Appointments 
   onGridReady(params: GridReadyEvent) {

    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.setDatasource(this.dataSource);
  }
  onPaginationChanged(event:any) { 
  }

 
  dataSource:IDatasource = {
 
     getRows: (params: IGetRowsParams) => {

      let gridReq =  new agGridRequest();
      gridReq.id = this.userInfo.data.customers.customer.customerID;
      gridReq.startRow = params.startRow;
      gridReq.endRow = params.endRow;     

       this.bookingService.GetAllAppointments(gridReq).then((response:any) => {
           params.successCallback(response.data, response.totalRecords);
                       
       }); 
     }
  }
  



     

}