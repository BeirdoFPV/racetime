import { Component, Input } from '@angular/core';
import { PilotProvider } from '../../providers/pilot/pilot';

/**
 * Generated class for the PilotselectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pilotselector',
  templateUrl: 'pilotselector.html'
})
export class PilotSelectorComponent {

  public pilots:Array<any>;
  @Input() selected:Array<string>;

  constructor(public service:PilotProvider) {
    service.findAll().subscribe((data:any) => this.pilots = data.data);
  }

  togglePilot(pilot){
    if( this.isPilotSelected(pilot) )
    {
      this.unselectPilot(pilot);
    }
    else
    {
      this.selected.push(pilot._id);
    }
  }

  isPilotSelected(pilot){
    return this.selected.indexOf(pilot._id) != -1;
  }

  unselectPilot(pilot){
    this.selected.splice(this.selected.indexOf(pilot._id),1 );
  }

}
