import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../../providers/data/data';
/**
 * Generated class for the PilotDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilot-detail',
  templateUrl: 'pilot-detail.html',
})
export class PilotDetailPage {

  pilot:Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: DataProvider) {
    this.pilot = service.pilots$().get(this.navParams.data._id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotDetailPage');
  }

}
