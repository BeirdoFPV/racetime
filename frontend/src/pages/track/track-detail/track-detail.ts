import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../../providers/data/data';

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

  track:Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:DataProvider) {
    this.track = service.tracks$().get(this.navParams.data._id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackDetailPage');
  }

}
