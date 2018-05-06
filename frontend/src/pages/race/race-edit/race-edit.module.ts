import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaceEditPage } from './race-edit';

@NgModule({
  declarations: [
    RaceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(RaceEditPage),
  ],
})
export class RaceEditPageModule {}
