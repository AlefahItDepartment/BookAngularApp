import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn:'root'
})


export class PetSubSpeciesService {


    constructor(private http:HttpClient) {}

    GetPetSubSpeciesList =(id:number) => {

         return  new Promise ((resolve, reject) => {


           this.http.get(environment.BASE_URL_API +"/PetSubSpecies/PetSubSpeciesList/" + id).subscribe({


            next:(res:any) => {

              resolve(res);

            },
            error:(err:any) => {
              reject(err);
            }
           })

         })
    }

    PetSubSpeciesList =() => {

      return  new Promise ((resolve, reject) => {


        this.http.get(environment.BASE_URL_API +"/PetSubSpecies/GetPetSubSpeciesList").subscribe({


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