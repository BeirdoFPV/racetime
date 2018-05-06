import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilotProvider } from '../../../providers/pilot/pilot';
import { PilotAddPage } from '../pilot-add/pilot-add';
import { PilotDetailPage } from '../pilot-detail/pilot-detail';
import { PilotEditPage } from '../pilot-edit/pilot-edit';

/**
 * Generated class for the PilotListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilot-list',
  templateUrl: 'pilot-list.html'
})
export class PilotListPage {

  pilots;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PilotProvider) {
    service.findAll().subscribe((data:any) => this.pilots = data.data);
  }

  addPilot() {
    this.navCtrl.push(PilotAddPage);
  }

  openDetail(pilot) {
    this.navCtrl.push(PilotDetailPage, pilot);
  }

  removePilot(pilot) {
    this.service.remove(pilot._id);
  }

  editPilot(pilot) {
    this.navCtrl.push(PilotEditPage, pilot);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotListPage');
  }

}
