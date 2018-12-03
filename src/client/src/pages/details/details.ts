import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  
  public url:string;
  public result:Observable<any>;
  public eventName:string;
  constructor(public navCtrl: NavController, public params: NavParams, private http: HttpClient) {
    
    this.eventName = params.get('id');
    this.loadevents(this.eventName);
  }

  loadevents(name:string){
    this.url = 'https://medication-take-back.herokuapp.com/events?searchtext='+name;
    console.log(this.url);
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          console.log(res)
          this.result = res.data;
        }
      )
  }


}
