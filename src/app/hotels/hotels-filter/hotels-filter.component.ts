import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css']
})
export class HotelsFilterComponent {
  filterObj : any;

@Output()
 event : EventEmitter<any>= new EventEmitter


  constructor(){

  }

  ngOnInit(){
    this.filterObj ={
      rating : [{
        type : 'RATING',
        filterValue : 4,
        isSelected : false,
        filterRange : null,
        isRangeFilter : false
      },
      {
        type : 'RATING',
        filterValue : 3,
        isSelected : false,
        filterRange : null,
        isRangeFilter : false
      },
      {
        type : 'RATING',
        filterValue : 2,
        isSelected : false,
        filterRange : null,
        isRangeFilter : false
      },
      {
        type : 'RATING',
        filterValue : 1,
        isSelected : false,
        filterRange : null,
        isRangeFilter : false
      }],
      pricePerNight :[
        {
          type : 'PRICE_PER_NIGHT',
          filterValue : null,
          isSelected : false,
          filterRange : {
            min : 0,
            max : 2000
          },
          isRangeFilter : true
        },{
          type : 'PRICE_PER_NIGHT',
          filterValue : null,
          isSelected : false,
          filterRange : {
            min : 2000,
            max : 4000
          },
          isRangeFilter : true
        },{
          type : 'PRICE_PER_NIGHT',
          filterValue : null,
          isSelected : false,
          filterRange : {
            min : 4000,
            max : 8000
          },
          isRangeFilter : true
        }

      ],
    }

  }
  emitdata(item : any){
    this.event.emit(item);
  }
}
