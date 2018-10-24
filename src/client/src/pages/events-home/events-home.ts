import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { EventsRegisterPage } from '../events-register/events-register';
import { EventsJoinPage } from '../events-join/events-join';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-events-home',
  templateUrl: 'events-home.html',
})
export class EventsHomePage {

  constructor(public navCtrl: NavController) {

  }
  addEvent(){
    this.navCtrl.push(EventsRegisterPage);
  }
  joinEvent(){
    this.navCtrl.push(EventsJoinPage);
  }
  event(ID:Number){
    this.navCtrl.push(EventPage,{id:ID});
  }
}
