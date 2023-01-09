import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutingModule } from './aboutus.routing.module';



@NgModule({

imports:[CommonModule, AboutusRoutingModule],
declarations:[AboutusComponent]

})


export class AboutUsModule {



}




