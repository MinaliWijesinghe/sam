import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { SupplyAd } from './supply-ad.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class SupplyAdService {
  selectedSupplyAd: SupplyAd;
  supplyAds: SupplyAd[];
  readonly baseURL = 'http://localhost:3000/supplyAd';

  constructor(private http: HttpClient, private _router: Router) { }

  postSupplyAd(sup: SupplyAd) {
    return this.http.post(this.baseURL, sup);
  }

  getSupplyAdList() {
    return this.http.get(this.baseURL);
  }
  getSupplyAd(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
  putSupplyAd(sup: SupplyAd) {
    return this.http.put(this.baseURL + `/${sup._id}`, sup);
  }
  deleteSupplyAd(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
