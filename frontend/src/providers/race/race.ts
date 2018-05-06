import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {SERVER_URL} from '../config';

let url = SERVER_URL + 'races/';

/*
  Generated class for the RaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RaceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RaceProvider Provider');
  }

  findAll() {
    return this.http.get(url);
  }

  get(id) {
      return this.http.get(url + id);
  }  

  create(race){
    return this.http.post(url, race);
  }

  update(race){
    return this.http.put(url+race._id, race);
  }

  remove(id){
    return this.http.delete(url+id);
  }
}
