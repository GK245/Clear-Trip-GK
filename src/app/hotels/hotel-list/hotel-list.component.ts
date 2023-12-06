import { HttpSentEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  searchHotelObj : any={
    city : '',
    checkInDate : null,
    checkOutDate : null,
    selectedRoom : ''
  }
  hotelList: any;
  selectedOpt !: number;
  hotelListCopy : any ;


  constructor(private activatedRoute : ActivatedRoute , private httpSvc : HttpService){
    this.searchHotelObj.city=this.activatedRoute.snapshot.queryParamMap.get('city');
    this.searchHotelObj.checkInDate=this.activatedRoute.snapshot.queryParamMap.get('checkInDate');
    this.searchHotelObj.checkOutDate = this.activatedRoute.snapshot.queryParamMap.get('checkOutDate');
    this.searchHotelObj.selectedRoom=this.activatedRoute.snapshot.queryParamMap.get('room')

  }
  ngOnInit(){
      let endPoint ='search-hotels';
      this.httpSvc.getDataFromServer(endPoint).subscribe((response)=>{
         console.log("response", response);
         
      } )
      this.httpSvc.getHotelsFromServer(endPoint,this.searchHotelObj).subscribe((el :any)=>
      {
        
        if(el && el.response && el.response.personalizedSections){
          this.hotelList =el.response.personalizedSections[0].hotels
          this.hotelListCopy  =[
            ...this.hotelList
        ] 
          console.log("hotel" , this.hotelList);
          
        }
      }
     
      )

      this.hotelListCopy  ={
        ...this.hotelList
      }  
  }
  sortHotels(type :any){
    this.selectedOpt=type;
    if(type==1){
    this.hotelList.sort((a :any,b : any)=>b.reviewSummary.cumulativeRating- a.reviewSummary.cumulativeRating)
  }
  else if(type==2){
    this.hotelList.sort((a :any,b : any)=>b.reviewSummary.totalReviewCount -a.reviewSummary.totalReviewCount)
  }

  else if(type==3){
    this.hotelList.sort((a :any,b : any)=>b.priceDetail.discountedPriceWithTax -a.priceDetail.discountedPriceWithTax)
    
  }
  else{
    this.hotelList.sort((a :any,b : any)=>a.priceDetail.discountedPriceWithTax - b.priceDetail.discountedPriceWithTax)
    
  }}

  emittedData(data : any){
        console.log("data", data)
        console.log(this.hotelListCopy);
        
      this.filter(data);
  }

  filter(data : any){
    if(data.type=='RATING' && data.isSelected ){
      this.hotelList=this.hotelListCopy.filter((el :any)=>{
       return el.reviewSummary.cumulativeRating >data.filterValue
      }
      ) 
    }else if(data.type=='PRICE_PER_NIGHT' && data.isSelected){
      this.hotelList=this.hotelListCopy.filter((el :any)=>{
        return el.priceDetail.discountedPriceWithTax<data.filterRange.max
    })}


  }
  //   if(data.type=='Rating'){
  //     console.log("hotelList",this.hotelList);
      
  //     this.hotelListCopy=this.hotelList.filter((el : any)=>{
  //       console.log("el",el);
        
  //       el.reviewSummary.cumulativeRating > data.filterValue
  //     })
  //   }else if(data.type=='PRICE_PER_NIGHT'){
  //     this.hotelListCopy=this.hotelList.filter((el : any)=>{
  //       el.priceDetail.discountedPriceWithTax<data.filterRange.max
  //     })
  //   }

  // }
}
