import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
@ViewChild('username') emailId;
@ViewChild('fname') firstName;
@ViewChild('lname') lastName;
@ViewChild('password') pwd;
@ViewChild('confirmPwd') confirmPwd;
  public url:string;
  public message:Observable<any>;
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  register(){
    var validate = true

    if(this.emailId.value == "" || this.firstName.value == "" || this.lastName.value ==""|| this.pwd.value == "" || this.confirmPwd.value == "") 
    {
      alert("Fields should not be empty" )
      validate = false;
    }

    if(!(this.pwd.value == this.confirmPwd.value)) 
    {
      alert("Password Should Match" )
      validate = false;
    }

    if (validate == true){
      this.url = 'http://127.0.0.1:3000/users/create';
      this.http.post(this.url,{
        email:this.emailId.value,
        firstName:this.firstName.value,
        lastName:this.lastName.value
      }).subscribe(
        (res:any)=>{
          this.message = res.message;
          alert(this.message);
          this.navCtrl.push(LoginPage);
        }
      )
    }
  }
  login(){
    this.navCtrl.push(LoginPage)
  }
}
