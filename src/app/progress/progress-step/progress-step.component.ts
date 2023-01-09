import { Component, OnInit, HostBinding, Input } from "@angular/core";



@Component({

   selector:'app-progress-step',
   templateUrl:'./progress-step.component.html',
   styleUrls:['./progress-step.component.scss']


})

export class ProgressStepComponent implements OnInit {


    public stepIndex!: number;
    @HostBinding('class.activeStep')
    public isActive:boolean = false;

    @Input() public set activeState(step:any) {

        this.isActive = step === this;

    }

 constructor() {}
    ngOnInit(): void {
        
    }
}