import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google;
/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Tylenol',     11],
      ['Paracetomol',      2],
      ['Decongestants',  2],
      ['Acetaminophen', 2],
      ['Azithromycin',    7]
    ]);

    var options = {
      title: 'Major Variety of pills collected',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

}
