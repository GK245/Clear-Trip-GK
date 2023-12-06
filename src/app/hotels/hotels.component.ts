import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  selectedDate! : any;
  city! : string;
  checkInDate! :Date;
  checkOutDate! : Date;
  roomsArr : string[]=['1 Room, 1 Adult', '1 Room, 2 Adults', '2 Room, 4 Adults'];
  selRoom!: string;
  

  constructor(){

  }

  ngOnInit(){
    
    
  }

  searchHotel(){
    // console.log(this.selectedDate);
    // console.log(this.city);
  }

  dateChanged(){
      if(this.selectedDate && this.selectedDate.length==2){
        this.checkInDate=this.selectedDate[0];
        this.checkOutDate= this.selectedDate[1];
      }else{
        alert("Please enter Correct Date")
      }
  }
  selectedRoom(selRoom : string){
    this.selRoom =selRoom;
  }
}
