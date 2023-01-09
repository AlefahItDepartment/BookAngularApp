import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';




@NgModule({

    declarations:[ServicesComponent],
    imports:[CommonModule, ServicesRoutingModule]
})


export class ServicesModule {}