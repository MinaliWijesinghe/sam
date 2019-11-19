import { Router } from '@angular/router';
import { TransportAd } from './transport-ad.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class TransportAdService {
  selectedTransportAd: TransportAd;
  transportAds: TransportAd[];
  readonly baseURL = 'http://localhost:3000/transportAd';

  constructor(private http: HttpClient,
    private _router:Router) { }

  postTransportAd(tra: TransportAd) {
    return this.http.post(this.baseURL, tra);
  }

  getTransportAdList() {
    return this.http.get(this.baseURL);
  }
  getTransportAdListbyid(){
    return this.http.get(this.baseURL + '/gettransportadsbyuser');
  }
  getTransportAd(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
  putTransportAd(tra: TransportAd) {
    return this.http.put(this.baseURL + `/${tra._id}`, tra);
  }
  deleteTransportAd(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  /////
  getTransportAdbyid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
