import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaceAddPage } from './race-add';

@NgModule({
  declarations: [
    RaceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(RaceAddPage),
  ],
})
export class RaceAddPageModule {}
