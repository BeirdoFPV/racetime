import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaceListPage } from './race-list';

@NgModule({
  declarations: [
    RaceListPage,
  ],
  imports: [
    IonicPageModule.forChild(RaceListPage),
  ],
})
export class RaceListPageModule {}
