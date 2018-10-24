import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  public eventId:Number;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.eventId = params.get('id');
    console.log(this.eventId);
  }
}
