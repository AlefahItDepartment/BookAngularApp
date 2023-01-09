import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HeaderMenuChangeService } from 'src/app/services/headermenuchange.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerMenuChangeService: HeaderMenuChangeService) { }


  ngOnInit(): void {


     this.headerMenuChangeService.removeSession();
     this.headerMenuChangeService.addSession('home');

   }


}
