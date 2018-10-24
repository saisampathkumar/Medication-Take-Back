import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { state } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'page-events-register',
  templateUrl: 'events-register.html',
})

export class EventsRegisterPage {
  public eventName:string;
  public eventStartDate:Date;
  public eventEndDate:Date;
  public address_one:string;
  public address_two:string;
  public address_city:string;
  public address_state:string;
  public address_zipcode:number;
  constructor(public navCtrl: NavController) {
  }
  createEvent(){
    console.log(this.eventName);
    console.log(this.eventStartDate);
    console.log(this.address_one);
    console.log(this.address_zipcode);
  }
  
}