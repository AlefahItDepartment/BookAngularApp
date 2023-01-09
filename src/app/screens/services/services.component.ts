import { Component, OnInit } from '@angular/core';
import { HeaderMenuChangeService } from 'src/app/services/headermenuchange.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private headerMenuChangeService: HeaderMenuChangeService) {}

  ngOnInit() {

   this.headerMenuChangeService.removeSession();
   this.headerMenuChangeService.addSession('contactus');

  }

}
