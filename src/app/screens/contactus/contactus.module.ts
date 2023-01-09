import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactusComponent } from './contactus.component';
import { ContactusRoutingModule } from './contactus.routing.module';

@NgModule({

    imports:[CommonModule, ContactusRoutingModule],
    declarations:[ContactusComponent]
})

export class ContactusModule {}