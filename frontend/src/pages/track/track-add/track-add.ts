import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

/**
 * Generated class for the TrackAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-add',
  templateUrl: 'track-add.html',
})
export class TrackAddPage {

  track = {
    name: ""
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service:DataProvider,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackAddPage');
  }

  createTrack() {
    this.service.tracks$()
      .create(this.track)
      .subscribe((result:any) => {
        if( result._id !== null ){
          let toast = this.toastCtrl.create({
            message: 'Track: '+result.name+' was added successfully',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();

          this.navCtrl.pop();
        }

      });
  }
}
