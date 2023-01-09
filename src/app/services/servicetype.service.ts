import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn:'root'
})


export class ServiceTypeService {

   constructor(private http: HttpClient) {

   }



  getServiceTypes(){


    return new Promise((resolve, reject) => {

        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')

               this.http.post(environment.BASE_URL_API + "/ServiceType/ServiceTypeList", {key:""}, {headers: headers, withCredentials:false}).subscribe({

                         
                next: (res:any) => {
                  resolve(res)
                },
                error: (err:any) => {
                  reject(err)
                }
               })

    })

  }


}