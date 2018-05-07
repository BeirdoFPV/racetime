import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../../providers/data/data';

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
    public service:DataProvider,
    public toastCtrl:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceAddPage');
  }

  createRace() {
    this.service.races$()
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
