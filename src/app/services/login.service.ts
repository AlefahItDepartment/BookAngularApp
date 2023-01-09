import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { User } from '../models/userlogin';
import { environment } from 'src/environments/environment';


@Injectable({


   providedIn:'root'

})

export class LoginService {

   
     constructor(private http:HttpClient){}
 

     login (user: User) {

     
            return new Promise((resolve, reject) => {
                     
            this.http.post(environment.BASE_URL_API + "/Auth/Login", user
                ).subscribe({

                     next: (res: any) => {
                     resolve(res);                       
                     },
                     error: (err:any) => {
                      reject(err);
                     }
                });
            });

     }

}