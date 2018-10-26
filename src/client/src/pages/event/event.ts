import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  public eventId:Number;
  public eventName:Number;
  public eventDate:Date;
  public eventaddress:String;
  public eventzipcode:Number;
  url: String;
  public myInput: String;
  public drugName: String;
  public drugDescription: String;
  public classificationClass: String;
  public classificationSubclass: String;
  public dosageForm: String;
  public strength: String;
  public absorption: String;
  public quantityWhenNew: String;
  public quantityCollected: String;
  result:Observable<any>;
  message: string;

  constructor(public navCtrl: NavController,public params:NavParams, private http: HttpClient) {
    this.eventId = params.get('id');
    this.eventName =  this.eventId;
    console.log(this.eventId);  
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  
detect(){
if (this.myInput != ""){
    this.url = 'http://127.0.0.1:3000/drug/search?searchtext='+this.myInput;
     this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
         console.log(this.result);
          console.log(this.result[0].Absorption);
          this.drugName = this.result[0].name;
          this.drugDescription = this.result[0].description;
          this.classificationClass = this.result[0].classification.class;
          this.classificationSubclass = this.result[0].classification.subclass;
          this.dosageForm = this.result[0].dosages.dosage.form;
          this.strength = this.result[0].dosages.dosage.strength;
          this.absorption = this.result[0].absorption;

        }
      )
    console.log("Requesting")
}
}

drugData(){
if (this.myInput != "" && this.drugName !="" && this.drugDescription !="" ){
 this.url = 'http://127.0.0.1:3000/product/create';
  this.http.post(this.url,{
     drugName: this.drugName,
     drugDescription: this.drugDescription,
     classificationClass: this.classificationClass,
     classificationSubclass: this.classificationSubclass,
     dosageForm: this.dosageForm,
     strength:   this.strength,
     absorption: this.absorption,
     quantityWhenNew: this.quantityWhenNew,
     quantityCollected:this.quantityCollected,
     eventName: this.eventName,
     eventdate: this.eventDate,
     eventaddress: this.eventaddress,
     eventzipccode: this.eventzipcode

    }).subscribe(
        (res:any)=>{
        this.message = res.message;
        alert(this.message);
        }
      )
  }

//this.navCtrl.setRoot(this.navCtrl.getActive().component);

}
}

