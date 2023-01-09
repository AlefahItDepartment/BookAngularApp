import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import * as moment from "moment";


@Injectable({

    providedIn:'root'
})


export class BranchSchedulesService {

    userInfo:any;

    constructor(private http:HttpClient) {

        this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "");
    }


    getBranchSchedules = async(id:number, date: Date) => {

           

         return new Promise((resolve, reject) => {


            const headers = new HttpHeaders()
                .set("Content-Type","application/json")
                .set('Access-Control-Allow-Origin', '*')
                .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
                .set('Authorization', 'Bearer '+ this.userInfo.data.token)

                    this.http.post(environment.BASE_URL_API +"/BranchSchedules/GetBranchAppointmentSlot", {branchID: id, slotDate:date}, {headers: headers, withCredentials:false}).subscribe({

                           next: (res:any) =>{                            
                             resolve(res);                               
                           },
                           error: (err:any) =>{
                            reject(err);
                           }

                    })

         })

    }

}