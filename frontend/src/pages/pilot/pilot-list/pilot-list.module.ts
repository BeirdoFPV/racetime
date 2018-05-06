import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilotListPage } from './pilot-list';

@NgModule({
  declarations: [
    PilotListPage,
  ],
  imports: [
    IonicPageModule.forChild(PilotListPage),
  ],
})
export class PilotListPageModule {}
