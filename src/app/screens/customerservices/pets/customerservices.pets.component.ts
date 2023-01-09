import { Component, OnInit } from "@angular/core";
import { ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, IDatasource, IGetRowsParams } from "ag-grid-community";
import { agGridRequest } from "src/app/models/agridrequest";

import * as moment from "moment";
import { CustomerPetService } from "src/app/services/customerpet.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerServicesPetsCreateComponent } from "./create/customerservices.pets.create";

@Component({


    selector:'app-customerservicespets',
    templateUrl:'./customerservices.pets.component.html'

})


export class CustomerServicesPetsComponent implements OnInit {
    
    private userInfo:any;
    public gridApi!:GridApi;
    public columnApi!:ColumnApi;
    public agGridrequest = new agGridRequest();
    public columnDefs!:ColDef[];
    public defaultColDef!: ColDef;
    public gridOptions!: GridOptions; 

    public overlayLoadingTemplate:any;
    public overlayNoRowsTemplate:any;

    constructor(private customerPets: CustomerPetService, private petModal: NgbModal){

         this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");


    }

    ngOnInit(): void {
        

        this.columnDefs =[
            {field:'petImage', headerName:'Image', width:100, cellRenderer: function(params:any) {
                return '<img class="rounded-circle" src="data:image/jpeg;base64, '+ (params.value || '') +'" border="0" style="width:40px;height:40px;" />'
              } },
            {field:'petName', headerName:'Pet Name', width:440, filter:true},
            {field:'gender', headerName:'Gender', width:120},     
            {field:'petStatus', headerName:'Status', width:115, cellRenderer: function(params:any) {
              return '<span><div class="badge '+ ((params.value || 'Alive') =='Alive' ? 'bg-success text-success bg-opacity-10' : 'bg-danger text-danger bg-opacity-10') +'">'+ params.value +'</div></span>'
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


          this.overlayLoadingTemplate =
          '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
         this.overlayNoRowsTemplate =
          "<span style=\"padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;\">This is a custom 'no rows' overlay</span>";

    }


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
   
           this.customerPets.GetAllPetsByCustomerID(gridReq).then((response:any) => {
               params.successCallback(response.data, response.totalRecords);
                           
           }); 
         }
      }

      openPetModal =() => {

            const modalRef = this.petModal.open(CustomerServicesPetsCreateComponent);
            //modalRef.componentInstance

      }

      

}