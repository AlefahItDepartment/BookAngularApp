

import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";

export interface ApplicationState {

     userProfile:any

}


const initialState: ApplicationState = {

    userProfile: null,
}

@Injectable({

    providedIn:'root'

})


export class AccountService {



       public acc$ = new BehaviorSubject(null);
       public LoggedinUserStatus$ = new BehaviorSubject(false);

        constructor(){}

    

      public addSession(data:any){

          this.acc$.next(data);
          this.LoggedinUserStatus$.next(!!data);

      }
      public removeSession(){

        this.acc$.next(null);
        this.LoggedinUserStatus$.next(false);
        
    }

}