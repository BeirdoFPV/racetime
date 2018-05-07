import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilotAddPage } from '../pilot-add/pilot-add';
import { PilotDetailPage } from '../pilot-detail/pilot-detail';
import { PilotEditPage } from '../pilot-edit/pilot-edit';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../../providers/data/data';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PilotListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilot-list',
  templateUrl: 'pilot-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PilotListPage {

  pilots$:Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: DataProvider) {
    this.pilots$ = service.pilots$().find().map(p => p.data);
  }

  addPilot() {
    this.navCtrl.push(PilotAddPage);
  }

  openDetail(pilot) {
    this.navCtrl.push(PilotDetailPage, pilot);
  }

  removePilot(pilot) {
    this.service.pilots$().remove(pilot._id);
  }

  editPilot(pilot) {
    this.navCtrl.push(PilotEditPage, pilot);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotListPage');
  }

}
