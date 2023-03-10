import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({

    imports: [FormsModule, ReactiveFormsModule, CommonModule, LoginRoutingModule ],
    declarations: [LoginComponent]
    
})

export class LoginModule {}