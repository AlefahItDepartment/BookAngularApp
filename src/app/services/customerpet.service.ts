import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { agGridRequest } from "../models/agridrequest";


@Injectable({


    providedIn:'root'
})


export class CustomerPetService { 

userInfo?:any;

constructor(private http:HttpClient) {

    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "");
}


AddPet = (data:any) => {

  const headers = new HttpHeaders()
  .set("Content-Type","application/json")
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  .set('Authorization', 'Bearer '+ this.userInfo.data.token)

  data.customerID = this.userInfo.data.customers?.customerID;

    return new Promise((resolve, reject)=> {

                   
      this.http.post(environment.BASE_URL_API +"/CustomersPET/Create", data, {headers: headers, withCredentials:false}).subscribe({

            next: (res:any) => {
   
              return resolve(res);
             },
             error:(err:any) => {
            return reject(err);
         }

      })
              

   })

}

GetAllPetsByCustomerID = (data:agGridRequest) => {


    const headers = new HttpHeaders()
    .set("Content-Type","application/json")
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    .set('Authorization', 'Bearer '+ this.userInfo.data.token)


      return new Promise((resolve, reject)=> {

                     
        this.http.post(environment.BASE_URL_API +"/CustomersPET/GetCustomersPETList", data, {headers: headers, withCredentials:false}).subscribe({

              next: (res:any) => {     
                resolve(res);
               },
               error:(err:any) => {
              reject(err);
           }

        })
                

     })
}


CustomersPETList = () => {


  const headers = new HttpHeaders()
  .set("Content-Type","application/json")
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  .set('Authorization', 'Bearer '+ this.userInfo.data.token)


    return new Promise((resolve, reject)=> {

                   
      this.http.get(environment.BASE_URL_API +"/CustomersPET/CustomersPETList/"+ this.userInfo.data.customers.customer.customerID, {headers: headers, withCredentials:false}).subscribe({

            next: (res:any) => {     
              resolve(res);
             },
             error:(err:any) => {
            reject(err);
         }

      })
              

   })
}



}