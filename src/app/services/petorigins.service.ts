import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn:'root'
})


export class PetOriginsService {


    constructor(private http:HttpClient) {}

    GetPetOriginsList =() => {

         return  new Promise ((resolve, reject) => {


           this.http.get(environment.BASE_URL_API +"/PetOrigins/PetOriginsList").subscribe({


            next:(res:any) => {

              resolve(res);

            },
            error:(err:any) => {
              reject(err);
            }
           })

         })
    }

}