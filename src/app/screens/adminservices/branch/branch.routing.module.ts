import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch.component';
import { BranchCreateComponent } from './create/branch.create.component';
import { BranchEditComponent } from './edit/branch.edit.component';


const routes: Routes =[

      {path: '', component: BranchComponent},
      {path:'create', component: BranchCreateComponent},
      {path:'edit/:id', component: BranchEditComponent}

]

@NgModule({

   imports : [RouterModule.forChild(routes)],
   exports: [RouterModule]


})

export class BranchRoutingModule {}