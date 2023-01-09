import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesModule } from './services.module';

const routes: Routes = [

    {path:'', component: ServicesComponent}
]


@NgModule({

  exports:[RouterModule],
  imports:[RouterModule.forChild(routes)]

})




export class ServicesRoutingModule {}