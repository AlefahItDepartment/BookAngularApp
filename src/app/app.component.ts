import { Component, OnInit, ViewChild, AfterViewInit,AfterContentChecked,ChangeDetectorRef } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,AfterContentChecked   {
  title = 'APClinicApp';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private changeDetector: ChangeDetectorRef){}


  
  ngOnInit(): void {
       
    

  }

     ngAfterViewInit(): void {
       
    //   this.changeDetector.checkNoChanges
     
    // this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
    //    if (res.matches) {
    //      this.sidenav.mode = 'over';
    //      this.sidenav.close();
    //    } else {
    //      this.sidenav.mode = 'side';
    //      this.sidenav.open();
    //    }
    //  });

     }

     ngAfterContentChecked(): void {
       

      this.changeDetector.detectChanges();

     }



  loggedinUser(value:any):void{
 
console.log(value);
    alert(value); 
    
  }

}
