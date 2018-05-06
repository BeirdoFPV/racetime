import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackAddPage } from '../track-add/track-add';
import { TrackDetailPage } from '../track-detail/track-detail';
import { TrackEditPage } from '../track-edit/track-edit';
import { TrackProvider } from '../../../providers/track/track';

/**
 * Generated class for the TrackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-list',
  templateUrl: 'track-list.html',
})
export class TrackListPage {

  tracks : Array<{name:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: TrackProvider) {
    service.findAll().subscribe((data:any) => this.tracks = data.data);
  }

  addTrack() {
    this.navCtrl.push(TrackAddPage);
  }

  removeTrack(track) {
    this.service.remove(track._id);
  }

  editTrack() {
    this.navCtrl.push(TrackEditPage);
  }

  openDetail(pilot) {
    this.navCtrl.push(TrackDetailPage, pilot);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackListPage');
  }




}
