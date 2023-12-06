import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    baseUrl = 'http://localhost:3000/';
    headers = new HttpHeaders({
      'content-type'  : 'Application/Json'
    })

  constructor(private http : HttpClient) {


   }

   getDataFromServer( endPoint : string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers : this.headers})
   }

   getHotelsFromServer(endPoint : string, obj : any){
      let httpParams = new HttpParams()
                        .set("city",obj.city)
                        .set("checkInDate",obj.checkInDate)
                        .set("checkOutDate",obj.checkOutDate)
                        .set("selectedRoom",obj.selectedRoom)
    
      const url = this.baseUrl + endPoint
      return this.http.get(url,{headers : this.headers, params : httpParams})
   }
}
