import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsFilterComponent } from './hotels-filter/hotels-filter.component';

@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    HotelsFilterComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    BsDatepickerModule,
    FormsModule
    
  ]
})
export class HotelsModule { }
