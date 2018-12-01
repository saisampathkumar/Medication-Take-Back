import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  public url:string;
  public result:Observable<any>;
  //barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public barChartData:any[] = [{data: []}];
  //pie chart
  public pieChartLabels:string[];
  public pieChartData:any[] = [{data: []}];
  public pieChartType:string = 'pie';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.loadByPlace();
    this.loadByName();
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  //methods to load data to graph
  public loadByPlace():void{
    this.url = 'http://127.0.0.1:3000/reports/barchart?name=place';
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
          let clone = JSON.parse(JSON.stringify(this.result));
          this.barChartLabels = clone.labels;
          this.barChartData[0].data = clone.values;
        }
      )
  }
  public loadByEvents():void {
    this.url = 'http://127.0.0.1:3000/reports/barchart?name=event';
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
          let clone = JSON.parse(JSON.stringify(this.result));
          this.barChartLabels = clone.labels;
          this.barChartData[0].data = clone.values;
        }
      )
  }
  public loadByName():void {
    this.url = 'http://127.0.0.1:3000/reports/piechart?name=name';
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
          let clone = JSON.parse(JSON.stringify(this.result));
          this.pieChartLabels = clone.labels;
          this.pieChartData[0].data = clone.values;
        }
      )
  }
  public loadByClass():void {
    this.url = 'http://127.0.0.1:3000/reports/piechart?name=class';
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
          let clone = JSON.parse(JSON.stringify(this.result));
          this.pieChartLabels = clone.labels;
          this.pieChartData[0].data = clone.values;
        }
      )
  }
}
