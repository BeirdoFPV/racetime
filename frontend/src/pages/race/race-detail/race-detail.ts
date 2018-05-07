import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../../providers/data/data';

/**
 * Generated class for the RaceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race-detail',
  templateUrl: 'race-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceDetailPage {

  race$:Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:DataProvider) {
    this.race$ = service.races$().get(this.navParams.data._id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceDetailPage');
  }

}
