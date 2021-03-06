import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PilotProvider } from '../../../providers/pilot/pilot';

/**
 * Generated class for the PilotAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilot-add',
  templateUrl: 'pilot-add.html',
})
export class PilotAddPage {

  pilot = { 
    callsign: "", 
    name:"", 
    vtx: { 
      band: "R", 
      channel: 1
    }
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:PilotProvider,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotAddPage');
  }

  createPilot() {
    this.service
      .create(this.pilot)
      .subscribe((result:any) => {
        if( result._id !== null ){
          let toast = this.toastCtrl.create({
            message: 'Pilot: '+result.callsign+' was added successfully',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();

          this.navCtrl.pop();
        }

      });
  }
}
