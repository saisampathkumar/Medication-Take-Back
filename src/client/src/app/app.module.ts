import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { EventsHomePage } from '../pages/events-home/events-home';
import { EventsRegisterPage } from '../pages/events-register/events-register';
import { EventsJoinPage } from '../pages/events-join/events-join';
import { EventPage } from '../pages/event/event';
import { ReportsPage } from '../pages/reports/reports';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
// Initialize Firebase
export const firebaseConfig =
{
  // insert config here  
    apiKey: "AIzaSyBljgWZHFL7h2Q0OCQj9mYo2QiDiAl0J4Y",
    authDomain: "ioniclogin-624b9.firebaseapp.com",
    databaseURL: "https://ioniclogin-624b9.firebaseio.com",
    projectId: "ioniclogin-624b9",
    storageBucket: "ioniclogin-624b9.appspot.com",
    messagingSenderId: "122241974989"    
};
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),    
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
