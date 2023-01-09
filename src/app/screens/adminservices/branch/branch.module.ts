import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { BranchComponent } from './branch.component';
import { BranchRoutingModule } from './branch.routing.module';
import { BranchCreateComponent } from './create/branch.create.component';
import { BranchEditComponent } from './edit/branch.edit.component';


@NgModule({


    imports: [CommonModule,BranchRoutingModule],
    declarations: [BranchComponent, BranchCreateComponent, BranchEditComponent]

})

export class BranchModule {}