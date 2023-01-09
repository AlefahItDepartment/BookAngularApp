import { Component, OnInit } from '@angular/core';
import { HeaderMenuChangeService } from 'src/app/services/headermenuchange.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{

  constructor(private headerMenuChangeService: HeaderMenuChangeService) {}

  ngOnInit() {

   this.headerMenuChangeService.removeSession();
   this.headerMenuChangeService.addSession('aboutus');

  }

}
