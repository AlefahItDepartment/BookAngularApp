

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ApplicationState {

     pageUrl:any

}


const initialState: ApplicationState = {

    pageUrl: null,
}

@Injectable({

    providedIn:'root'

})


export class HeaderMenuChangeService {



       public url$ = new BehaviorSubject(null);

        constructor(){}

    

      public addSession(data:any){

          this.url$.next(data);

      }
      public removeSession(){

        this.url$.next(null);
        
    }

}