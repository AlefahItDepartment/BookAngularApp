import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggined = () => {
         return !!localStorage.getItem('userInfo');
  }
}
