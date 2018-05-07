import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
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

  public pilots$:Observable<any>;
  @Input() selected:Array<string>;

  constructor(public service:DataProvider) {
    this.pilots$ = service.pilots$();
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
