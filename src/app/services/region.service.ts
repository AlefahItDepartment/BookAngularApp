import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({

    providedIn:'root'
})


export class RegionService {


   constructor(private http:HttpClient) {

   }


   getRegion(id:number) {

    return new Promise ((resolve, reject) => {


       this.http.post(environment.BASE_URL_API +"/Region/RegionList/"+id, {key:''}).subscribe({

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