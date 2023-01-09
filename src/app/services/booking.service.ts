import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { agGridRequest } from "../models/agridrequest";
import { Appointment } from "../models/appointment";




@Injectable({

 providedIn:'root'

})


export class BookingService {
  

    private userInfo:any;

    constructor(private http:HttpClient){
             
        this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");

    }

    public GetAppointment(id:number) {

      return new Promise((resolve, reject) => {

                   
        this.http.get(environment.BASE_URL_API +"/Booking/GetDetail/"+ id +"").subscribe({

               next: (res:any) =>{

                resolve(res);
               },
               error: (err:any) => {

                reject(err);
                
               }

        })

      });

    }
    public CreateAppointment(appointment: Appointment) {


      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)


      return new Promise((resolve, reject) => {


        this.http.post(environment.BASE_URL_API + "/Booking/Create", appointment, {headers: headers, withCredentials:false}).subscribe({

                     
             next: ((res:any) => {

                resolve(res)
             }),
             error: ((err:any) => {

              reject(err);

             })


        })
      })


    }
    public GetActiveAppointments(data:agGridRequest) {


 

         const headers = new HttpHeaders()
         .set("Content-Type","application/json")
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
         .set('Authorization', 'Bearer '+ this.userInfo.data.token)


           return new Promise((resolve, reject)=> {

                          
             this.http.post(environment.BASE_URL_API +"/Booking/GetActiveAppointments", data, {headers: headers, withCredentials:false}).subscribe({

                   next: (res:any) => {          
                     resolve(res);
                    },
                    error:(err:any) => {
                     reject(err);
                }

             })
                     

          })


    }

    public ActiveAppointments() {


 

      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)


        return new Promise((resolve, reject)=> {

                       
          this.http.get(environment.BASE_URL_API +"/Booking/ActiveAppointments/"+ this.userInfo.data.customers.customer.customerID,{headers: headers, withCredentials:false}).subscribe({

                next: (res:any) => {          
                  resolve(res);
                 },
                 error:(err:any) => {
                  reject(err);
             }

          })
                  

       })

 }



    public GetCloseAppointments(data:agGridRequest) {


 

      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)


        return new Promise((resolve, reject)=> {

                       
          this.http.post(environment.BASE_URL_API +"/Booking/GetCloseAppointments", data, {headers: headers, withCredentials:false}).subscribe({

                next: (res:any) => {
       
                  return resolve(res);
                 },
                 error:(err:any) => {
                return reject(err);
             }

          })
                  

       })


    }


    public CloseAppointments() {


 

      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)


        return new Promise((resolve, reject)=> {

                       
          this.http.get(environment.BASE_URL_API +"/Booking/CloseAppointments/" + this.userInfo.data.customers.customer.customerID, {headers: headers, withCredentials:false}).subscribe({

                next: (res:any) => {
       
                  return resolve(res);
                 },
                 error:(err:any) => {
                return reject(err);
             }

          })
                  

       })


    }



 public GetPendingAppointments(data:agGridRequest) {


 

  const headers = new HttpHeaders()
  .set("Content-Type","application/json")
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  .set('Authorization', 'Bearer '+ this.userInfo.data.token)


    return new Promise((resolve, reject)=> {

                   
      this.http.post(environment.BASE_URL_API +"/Booking/GetPendingAppointments", data,  {headers: headers, withCredentials:false}).subscribe({

            next: (res:any) => {
   
              return resolve(res);
             },
             error:(err:any) => {
            return reject(err);
         }

      })
              

   })


    } 


    public PendingAppointments() {


 

      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)
    
    
        return new Promise((resolve, reject)=> {
    
                       
          this.http.get(environment.BASE_URL_API +"/Booking/PendingAppointments/"+ this.userInfo.data.customers.customer.customerID, {headers: headers, withCredentials:false}).subscribe({
    
                next: (res:any) => {
       
                  return resolve(res);
                 },
                 error:(err:any) => {
                return reject(err);
             }
    
          })
                  
    
       })
    
    
        } 

    public GetAllAppointments(data:agGridRequest){

      const headers = new HttpHeaders()
      .set("Content-Type","application/json")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .set('Authorization', 'Bearer '+ this.userInfo.data.token)

      return new Promise((resolve, reject) => {




        this.http.post(environment.BASE_URL_API +"/Booking/BookingList", data, {headers: headers, withCredentials:false}).subscribe({


          next:(res:any) => {
            resolve(res)
          },
          error: (error:any) => {
            reject(error);
          }
        })

      })
    }

}