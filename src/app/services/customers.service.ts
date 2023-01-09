import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';


@Injectable({

    providedIn: 'root'

})

export class CustomersService {

    private userInfo: any;

    constructor(private http: HttpClient) {

        this.userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');


    }

    AddCustomer(customer: any) {

    }

    UpdateCustomer(customer: Customer) {

        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)

        return new Promise((resolve, reject) => {

            this.http.put(environment.BASE_URL_API +"/Customers/Update/" + customer.customerID, customer, {headers:headers, withCredentials:false}).subscribe({

                   
                  next:(res:any) => {

                    resolve(res);
                  },
                  error: (err:any) =>{
                    reject(err);
                  }

            });

        })
    }

    GetCustomer(id: number) {


        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)

        return new Promise((resolve, reject) => {

                  this.http.get(environment.BASE_URL_API +"/Customers/Get/" + id, {headers: headers, withCredentials:false}).subscribe({


                          next: (res:any) => {

                              resolve(res);

                          },
                          error: (err:any) => {
                                
                               reject(err);

                          }

                  })
            
        })


    }

}