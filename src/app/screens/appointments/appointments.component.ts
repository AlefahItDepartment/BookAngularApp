import { Component,OnInit } from '@angular/core';
import { HeaderMenuChangeService } from 'src/app/services/headermenuchange.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {


  constructor(private headerMenuChangeService: HeaderMenuChangeService) {}

  ngOnInit() {

   this.headerMenuChangeService.removeSession();
   this.headerMenuChangeService.addSession('bookappointment');

  }

}
