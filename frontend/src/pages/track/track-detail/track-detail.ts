import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackProvider } from '../../../providers/track/track';

/**
 * Generated class for the TrackDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {

  track;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:TrackProvider) {
    this.track = this.navParams.data;
        service.get(this.track._id).subscribe(
          pilot => this.track = pilot
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackDetailPage');
  }

}
