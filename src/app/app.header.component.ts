import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AccountService } from "./services/account.service";
import { HeaderMenuChangeService } from "./services/headermenuchange.service";


@Component({

      selector:'app-header',
      templateUrl:'./app.header.component.html',
      styleUrls:['./app.header.component.scss']

})


export class AppHeaderComponent implements OnInit {

 
    LoggedinUserInfo:any;

     constructor(private acc: AccountService, private headerMenuChangeService: HeaderMenuChangeService, private router:Router){}

    ngOnInit(): void {
        

      this.acc.acc$.subscribe((value:any) => {
     
             
        if(localStorage.getItem('userInfo') == null){
           this.LoggedinUserInfo =  JSON.parse(value || null);
         }
        else {
            this.LoggedinUserInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
        }

      });


      this.headerMenuChangeService.url$.subscribe((value:any) => {

               
          switch (value){


            case "home":

            var mainHomeHeader:any = document.querySelector("#mainHeader");
            mainHomeHeader?.classList.remove('mainOtherHeader');
            mainHomeHeader?.classList.add('mainHeader');
                  
              break;

              case "aboutus":
                var mainAboutusHeader:any = document.querySelector("#mainHeader");
                mainAboutusHeader?.classList.remove('mainOtherHeader');
                mainAboutusHeader?.classList.add('mainHeader');
                break;


                
              default:

              var mainOtherHeader:any = document.querySelector("#mainHeader");
              mainOtherHeader?.classList.remove('mainHeader');
              mainOtherHeader?.classList.add('mainOtherHeader');
            
                break;


          }
             



      });

       
    }


    public logout():void{

      
           localStorage.removeItem('userInfo');
          this.acc.removeSession();
    }
}