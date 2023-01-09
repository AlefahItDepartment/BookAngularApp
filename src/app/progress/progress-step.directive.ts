import {Directive, ElementRef, Input, OnInit, HostListener} from '@angular/core'
import { ProgressHelperService } from './progress-helper.service';


@Directive({

  selector:'[progressStepNext], [progressStepPrev]'
})


export class ProgressStepDirective implements OnInit {


    @Input('progressStepNext') next:any;
    @Input('progressStepPrev') prev:any;

    private methods = {


        next: false,
        prev:false

    }

    @HostListener('click', ['$event']) listen(e:Event) {

        this.progressHelper.eventHelper.next(this.methods);
    }

    constructor(private progressHelper: ProgressHelperService, 
        private el: ElementRef<HTMLButtonElement>) {

    }

  ngOnInit(): void {
      
    this.initMethods();
  }
    private initMethods () {


        if('next' in this){

            this.methods = {

                ...this.methods,
                next:true,
            }
        }

        if('prev' in this){

            this.methods = {
                ...this.methods,
                prev:true,
            }
        }
    }
}