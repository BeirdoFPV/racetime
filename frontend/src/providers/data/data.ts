import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeathersProvider } from '../feathers/feathers';
import 'rxjs/add/operator/map'

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private feathers:FeathersProvider) {
    console.log('Hello DataProvider Provider');
  }

  private services:Map<string,any> = new Map<string,any>();

  private fetch(name:string){
    return (<any>this.feathers
      .service(name))
      .watch();

    /* let service = this.services[name];
    if(service === undefined)
    {
      service = (<any>this.feathers
      .service(name)
      .watch());

      this.services[name] = service;
    }

    return service; */
  }
  pilots$(){
    return this.fetch('pilots');
  }

  races$(){
    return this.fetch('races');
  }

  tracks$(){
    return this.fetch('tracks');
  }
}
