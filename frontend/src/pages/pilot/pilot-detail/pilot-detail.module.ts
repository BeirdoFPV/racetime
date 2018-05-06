import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilotDetailPage } from './pilot-detail';

@NgModule({
  declarations: [
    PilotDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PilotDetailPage),
  ],
})
export class PilotDetailPageModule {}
