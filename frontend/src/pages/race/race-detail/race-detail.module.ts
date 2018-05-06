import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaceDetailPage } from './race-detail';

@NgModule({
  declarations: [
    RaceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RaceDetailPage),
  ],
})
export class RaceDetailPageModule {}
