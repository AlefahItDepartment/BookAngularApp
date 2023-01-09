import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomersAddressLines } from '../models/customersaddresslines';



@Injectable({

    providedIn: 'root'
})


export class CustomersAddressService {



    private userInfo: any;

    constructor(private http: HttpClient) {

        this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")

    }



    GetCustomersAddress(id: number) {



        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)

        return new Promise((resolve, reject) => {

            this.http.get(environment.BASE_URL_API + "/Customers/GetAddressList/" + id,{headers: headers, withCredentials:false}).subscribe({

                next: (res: any) => {

                    resolve(res);
                },
                error: (err: any) => {

                    reject(err);

                }

            })

        })



    }



    UpdateCustomerAddressLine (data:CustomersAddressLines) {

        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)


        debugger;

        return new Promise((resolve, reject) => {


            this.http.put(environment.BASE_URL_API +"/Customers/UpdateAddress/" + data.addressID, data, {headers: headers, withCredentials:false}).subscribe({


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


