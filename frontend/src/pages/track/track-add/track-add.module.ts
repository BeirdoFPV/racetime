import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackAddPage } from './track-add';

@NgModule({
  declarations: [
    TrackAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackAddPage),
  ],
})
export class TrackAddPageModule {}
