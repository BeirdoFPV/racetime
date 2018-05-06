import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilotAddPage } from './pilot-add';

@NgModule({
  declarations: [
    PilotAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PilotAddPage),
  ],
})
export class PilotAddPageModule {}
