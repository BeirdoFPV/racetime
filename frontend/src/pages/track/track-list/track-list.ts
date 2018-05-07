import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TrackAddPage } from '../track-add/track-add';
import { TrackDetailPage } from '../track-detail/track-detail';
import { TrackEditPage } from '../track-edit/track-edit';
import { DataProvider } from '../../../providers/data/data';
import 'rxjs/add/operator/map';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackListPage {

  tracks$ : Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:DataProvider) {    
    this.tracks$ = service.tracks$().find().map(t => t.data);
  }

  addTrack() {
    this.navCtrl.push(TrackAddPage);
  }

  removeTrack(track) {
    this.service.tracks$().remove(track);
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
