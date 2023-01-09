import {Directive} from '@angular/core';
import { AbstractControl, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UsersService } from '../services/users.service';
import {Observable, map} from 'rxjs';

export function UserPasswordValidator(userService:UsersService): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  => {
               
    

         return userService.CheckPassword((control.value || "")).pipe(map((response:any) => {
         
                   return response ?  null: {check_user_password:true};

         }));



    } 

}

@Directive({

    selector:'[app-userpasswordvalidator][ngModel]',
    providers:[
        {provide: NG_ASYNC_VALIDATORS,
        useExisting: UserPasswordValidatorDirective,
        multi:true}
    ]
})


export class UserPasswordValidatorDirective { 

constructor(private userService:UsersService) {}
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
     
        return UserPasswordValidator(this.userService)(control);
}

}