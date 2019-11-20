import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DemandAd } from './demand-ad.model';


@Injectable({
  providedIn: 'root'
})
export class DemandAdService {
  selectedDemandAd: DemandAd;
  demandAds: DemandAd[];
  readonly baseURL = 'http://localhost:3000/demandAd';

  constructor(private http: HttpClient,private _router:Router) { }

  postDemandAd(dem: DemandAd) {
    return this.http.post(this.baseURL, dem);
  }

  getDemandAdList() {
    return this.http.get(this.baseURL);
  }

  getDemandAdListbyid(){
    return this.http.get(this.baseURL + '/getdemandadsbyuser');
  }

  getDemandAd(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putDemandAd(dem: DemandAd) {
    return this.http.put(this.baseURL + `/${dem._id}`, dem);
  }
  deleteDemandAd(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
