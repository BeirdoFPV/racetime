import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RaceAddPage } from '../race-add/race-add';
import { RaceDetailPage } from '../race-detail/race-detail';
import { RaceProvider } from '../../../providers/race/race';
import { RaceEditPage } from '../race-edit/race-edit';

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
})
export class RaceListPage {

  races;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: RaceProvider) {
    service.findAll().subscribe((data:any) => this.races = data.data);
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
    this.service.remove(race._id);
  }

  editRace(race) {
    this.navCtrl.push(RaceEditPage, race);
  }
}
