import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { RaceProvider } from '../providers/race/race';
import { PilotListPage } from '../pages/pilot/pilot-list/pilot-list';
import { PilotDetailPage } from '../pages/pilot/pilot-detail/pilot-detail';
import { PilotAddPage } from '../pages/pilot/pilot-add/pilot-add';
import { PilotEditPage } from '../pages/pilot/pilot-edit/pilot-edit';

import { TrackProvider } from '../providers/track/track';
import { TrackAddPage } from '../pages/track/track-add/track-add';
import { TrackListPage } from '../pages/track/track-list/track-list';
import { TrackDetailPage } from '../pages/track/track-detail/track-detail';
import { TrackEditPage } from '../pages/track/track-edit/track-edit';

import { PilotProvider } from '../providers/pilot/pilot';
import { RaceListPage } from '../pages/race/race-list/race-list';
import { RaceDetailPage } from '../pages/race/race-detail/race-detail';
import { RaceEditPage } from '../pages/race/race-edit/race-edit';
import { RaceAddPage } from '../pages/race/race-add/race-add';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    PilotListPage,
    PilotDetailPage,
    PilotEditPage,
    PilotAddPage,
    
    RaceListPage,
    RaceEditPage,
    RaceAddPage,
    RaceDetailPage,

    TrackAddPage,
    TrackListPage,
    TrackDetailPage,
    TrackEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    PilotListPage,
    PilotDetailPage,
    PilotEditPage,
    PilotAddPage,
    
    RaceListPage,
    RaceEditPage,
    RaceAddPage,
    RaceDetailPage,

    TrackAddPage,
    TrackListPage,
    TrackDetailPage,
    TrackEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PilotProvider,
    RaceProvider,
    TrackProvider
  ]
})
export class AppModule {}
