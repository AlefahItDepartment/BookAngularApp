import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsCreateComponent } from './create/staffs.create.component';
import { StaffsEditComponent } from './edit/staffs.edit.component';
import { StaffsComponent } from './staffs.component';

const routes: Routes = [

      {path:'', component: StaffsComponent},
      {path:'create', component: StaffsCreateComponent},
      {path:'edit/:id', component: StaffsEditComponent}

]

@NgModule({

   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]

})


export class StaffsRoutingModule {}