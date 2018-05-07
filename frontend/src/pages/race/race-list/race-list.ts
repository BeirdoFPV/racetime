import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RaceAddPage } from '../race-add/race-add';
import { RaceDetailPage } from '../race-detail/race-detail';
import { RaceEditPage } from '../race-edit/race-edit';
import { DataProvider } from '../../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Generated class for the RaceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race-list',
  templateUrl: 'race-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceListPage {

  races$:Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: DataProvider) {
    this.races$ = service.races$().find().map(m => m.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceListPage');
  }


  addRace() {
    this.navCtrl.push(RaceAddPage);
  }

  openDetail(race) {
    this.navCtrl.push(RaceDetailPage, race);
  }

  removeRace(race) {
    this.service.races$().remove(race);
  }

  editRace(race) {
    this.navCtrl.push(RaceEditPage, race);
  }
}
