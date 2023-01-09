import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/auth.guard";
import { AdminservicesComponent } from "./adminservices.component";

const routes: Routes =[

       {path:'', component:AdminservicesComponent, canActivate:[AuthGuard], 
       
       children:[                
         {path:'branch', 
         loadChildren: () => import('./branch/branch.module').then(m=> m.BranchModule)
         },
         {path:'staffs', 
         loadChildren: () => import('./staffs/staffs.module').then(m=> m.StaffsModule)
         },

       ]}

]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class AdminServicesRoutingModule {}