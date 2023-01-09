import { Component, OnInit } from '@angular/core';
import { HeaderMenuChangeService } from 'src/app/services/headermenuchange.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


   constructor(private headerMenuChangeService: HeaderMenuChangeService) {}

   ngOnInit() {

    this.headerMenuChangeService.removeSession();
    this.headerMenuChangeService.addSession('contactus');

   }
}
