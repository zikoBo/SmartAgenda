import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { comptePage } from '../pages/compte/compte';
import { evenementPage } from '../pages/evenement/evenement';
import { ordonnancementPage } from '../pages/ordonnancement/ordonnancement';
import { parametrePage } from '../pages/parametre/parametre';
import { deconnexionPage } from '../pages/deconnexion/deconnexion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = comptePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.pages = [
      { title: 'Mon Compte', component: comptePage },
      { title: 'Ajouter un événement', component: evenementPage },
      { title: 'Ordonnancer les événements', component: ordonnancementPage },
      { title: 'Paramétres', component: parametrePage },
      { title: 'Déconnexion', component: deconnexionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
