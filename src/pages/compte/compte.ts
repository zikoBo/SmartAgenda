import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
@Component({
  selector: 'page-Compte',
  templateUrl: 'compte.html'
})
export class comptePage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'week',
    currentDate: new Date()
  };
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
  addEvent() {
    let modal = this.modalCtrl.create('ModalEventPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
