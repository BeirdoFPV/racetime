import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilotProvider } from '../../../providers/pilot/pilot';

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

  pilot;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PilotProvider) {
    this.pilot = this.navParams.data;
        service.get(this.pilot._id).subscribe(
          pilot => this.pilot = pilot
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotDetailPage');
  }

}
