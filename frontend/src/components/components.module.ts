import { NgModule } from '@angular/core';
import { PilotSelectorComponent } from './pilotselector/pilotselector';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [PilotSelectorComponent],
	imports: [IonicModule],
	exports: [PilotSelectorComponent]
})

export class ComponentsModule {}
