import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {SERVER_URL} from '../config';

let pilotsUrl = SERVER_URL + 'pilots/';
/*
  Generated class for the PilotsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PilotProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PilotsProvider Provider');
  }

  findAll() {
    return this.http.get(pilotsUrl);
  }

  get(id) {
      return this.http.get(pilotsUrl + id);
  }  

  create(pilot){
    return this.http.post(pilotsUrl, pilot);
  }

  update(pilot){
    return this.http.put(pilotsUrl+pilot._id, pilot);
  }

  remove(id){
    return this.http.delete(pilotsUrl+id);
  }
}
