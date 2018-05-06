import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {SERVER_URL} from '../config';

let url = SERVER_URL + 'tracks/';

/*
  Generated class for the TrackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TrackProvider Provider');
  }

  findAll() {
    return this.http.get(url);
  }

  get(id) {
      return this.http.get(url + id);
  }  

  create(track){
    return this.http.post(url, track);
  }

  update(track){
    return this.http.put(url+track._id, track);
  }

  remove(id){
    return this.http.delete(url+id);
  }
}
