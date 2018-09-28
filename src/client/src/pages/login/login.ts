import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register'
import {TabsPage} from '../tabs/tabs'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') uname;
@ViewChild('password') pwd;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
signIn(){
if ( this.uname.value=== null || this.pwd.value === null){
      return Observable.throw("Please insert credentials");

}
if(this.uname.value == "admin" && this.pwd.value == "admin")
{
this.navCtrl.push(TabsPage)
}
else{
alert("Invalid Credentials")
}
}


register(){
this.navCtrl.push(RegisterPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
