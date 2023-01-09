import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from './home.routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({

  imports: [CommonModule, HomeRoutingModule,SlickCarouselModule, SlickCarouselModule],
  declarations: [HomeComponent]

})

export class HomeModule {}