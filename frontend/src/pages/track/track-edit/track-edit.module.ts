import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackEditPage } from './track-edit';

@NgModule({
  declarations: [
    TrackEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackEditPage),
  ],
})
export class TrackEditPageModule {}
