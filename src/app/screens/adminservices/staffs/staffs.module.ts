import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { StaffsCreateComponent } from './create/staffs.create.component';
import { StaffsEditComponent } from './edit/staffs.edit.component';
import { StaffsComponent } from './staffs.component';
import { StaffsRoutingModule } from './staffs.routing.module';


@NgModule({


      imports: [CommonModule, StaffsRoutingModule],
      declarations: [StaffsComponent, StaffsCreateComponent, StaffsEditComponent]



})


export class StaffsModule {}