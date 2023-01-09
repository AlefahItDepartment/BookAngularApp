import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn:'root'
})


export class PetColorsService {


    constructor(private http:HttpClient) {}

    GetPetColorsList =() => {

         return  new Promise ((resolve, reject) => {


           this.http.get(environment.BASE_URL_API +"/PetColors/PetColorsList").subscribe({


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