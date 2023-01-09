import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressStepDirective } from './progress-step.directive';
import { ProgressStepComponent } from './progress-step/progress-step.component';
import { ProgressComponent } from './progress.component';



@NgModule({


   imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
    exports:[],
   declarations:[
     ]


})

export class ProgressModule {}