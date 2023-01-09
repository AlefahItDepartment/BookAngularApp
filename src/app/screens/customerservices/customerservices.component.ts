import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-customerservices',
  templateUrl: './customerservices.component.html',
  styleUrls: ['./customerservices.component.css']
})
export class CustomerservicesComponent implements OnInit {

  LoggedinUserInfo:any;
  constructor(private acc: AccountService) { }

  ngOnInit(): void {

    this.acc.acc$.subscribe((value:any) => {
             
      if(localStorage.getItem('userInfo') == null){
         this.LoggedinUserInfo =  JSON.parse(value || null);
       }
      else {
          this.LoggedinUserInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
      }

    });

  }

}
