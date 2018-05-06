import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RaceProvider } from '../../../providers/race/race';

/**
 * Generated class for the RaceAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race-add',
  templateUrl: 'race-add.html',
})
export class RaceAddPage {

  race = {
    name: "",
    pilots: new Array<string>()
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service:RaceProvider,
    public toastCtrl:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceAddPage');
  }

  createRace() {
    this.service
      .create(this.race)
      .subscribe((result:any) => {
        if( result._id !== null ){
          let toast = this.toastCtrl.create({
            message: 'Race: '+result.name+' was added successfully',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();

          this.navCtrl.pop();
        }

      });
  }
}
