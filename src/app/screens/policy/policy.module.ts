import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolicyComponent } from './policy.component';
import { PolicyRoutingModule } from './policy.routing.module';

@NgModule({

    imports: [CommonModule, PolicyRoutingModule],
    declarations:[PolicyComponent]
})


export class PolicyModule {


}