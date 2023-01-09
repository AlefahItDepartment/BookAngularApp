import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/shared/auth.service';
import {User} from '../../models/userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  user: User = new User;
  clicked: boolean = false;
  constructor(private loginService: LoginService, private acc:AccountService, private router: Router) { }



   login = async () => {

       
       let results:any = await this.loginService.login(this.user);
     
       if(results !=null){

        if(results.status){          
           localStorage.setItem("userInfo", JSON.stringify(results));
           this.acc.addSession(localStorage.getItem('userInfo'));
           this.router.navigate(['/']);
          }
          else{
            this.clicked=false;
          }
          }
      
  }

  ngOnInit(): void {

    this.clicked=false;
    if(localStorage.getItem('userInfo') !=null)
         localStorage.removeItem('userInfo');

    this.acc.removeSession();
  }
}
