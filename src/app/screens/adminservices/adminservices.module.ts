import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; 
import { AdminservicesComponent } from "./adminservices.component";
import { AdminServicesRoutingModule } from "./adminservices.routing.module";


@NgModule({

  imports:[CommonModule, AdminServicesRoutingModule],
  declarations:[AdminservicesComponent]

})

export class AdminServicesModule {}