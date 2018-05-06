import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilotEditPage } from './pilot-edit';

@NgModule({
  declarations: [
    PilotEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PilotEditPage),
  ],
})
export class PilotEditPageModule {}
