import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-events-join',
  templateUrl: 'events-join.html',
})
export class EventsJoinPage {
  public created_by:string;
  public url:string;
  public result:Observable<any>;
  constructor(public navCtrl: NavController,private http: HttpClient) {
  }
  loadevents(name:string){
    this.url = 'http://127.0.0.1:3000/events/search/users?user=false&searchtext='+name;
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
        }
      )
  }
  joinTheEvent(name:string){
    console.log(name);
  }
  ngOnInit() {
    this.created_by = 'admin';
    this.loadevents(this.created_by);
  }
}
