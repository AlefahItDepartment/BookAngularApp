import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';
import {Observable,catchError, throwError} from 'rxjs';
import { UserPasswordValidate } from '../models/userpasswordvalidate';
import { UserPasswordValidateRequest } from '../models/userpasswordvalidaterequest';

@Injectable({

providedIn:'root'

})



export class UsersService { 

    private userInfo:any;
    private userPasswordValidateRequest: UserPasswordValidateRequest = new UserPasswordValidateRequest;
    constructor(private http:HttpClient){


        this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");



    }


    UpdateUser (data:Users) {


        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)
        
        return new Promise((resolve, reject) => { 


            this.http.put(environment.BASE_URL_API + "/Customers/UpdateUser/" + data.userID, data, {headers: headers, withCredentials:false}).subscribe({

                     next: (res:any) => {

                        resolve(res);
                     },
                     error: (err:any) => {

                        reject(err);
                     }

            })
        })


    }


    CheckPassword(password:string):Observable<UserPasswordValidate>  {

        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .set('Authorization', 'Bearer ' + this.userInfo.data.token)



        this.userPasswordValidateRequest.password = password;
        this.userPasswordValidateRequest.id = this.userInfo.data.user.userID;
        

           return this.http.post(environment.BASE_URL_API + "/Customers/PasswordValidate", this.userPasswordValidateRequest, {headers:headers, withCredentials:false }).pipe(catchError(this.handlerError));

    }


    private handlerError(error:any){

        return throwError(error.message || "server error");
      }


}

