import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { comptePage } from '../pages/compte/compte';
import { evenementPage } from '../pages/evenement/evenement';
import { ordonnancementPage } from '../pages/ordonnancement/ordonnancement';
import { parametrePage } from '../pages/parametre/parametre';
import { deconnexionPage } from '../pages/deconnexion/deconnexion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    comptePage,
    evenementPage,
    ordonnancementPage,
    parametrePage,
    deconnexionPage,
    
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    comptePage,
    evenementPage,
    ordonnancementPage,
    parametrePage,
    deconnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
