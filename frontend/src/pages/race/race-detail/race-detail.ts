import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RaceProvider } from '../../../providers/race/race';

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
})
export class RaceDetailPage {

  race;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:RaceProvider) {
    this.race = this.navParams.data;
        service.get(this.race._id).subscribe(
          race => this.race = race
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceDetailPage');
  }

}
