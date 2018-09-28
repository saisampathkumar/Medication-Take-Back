import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register'
import {LoginPage} from '../login/login'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
@ViewChild('emailid') emailId;
@ViewChild('lname') firstName;
@ViewChild('fname') lastName;
@ViewChild('password') pwd;
@ViewChild('confirmPassword') confirmPwd;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
register(){
if(this.pwd.value == this.confirmPwd.value )
{
this.navCtrl.push(LoginPage)
}
else
alert("Enter all values")
}

login(){
this.navCtrl.push(LoginPage)
}

}
