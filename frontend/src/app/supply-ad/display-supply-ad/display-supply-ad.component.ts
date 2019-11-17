//import { SupplyAd } from './../../shared/supply-ad.model';
//import { SupplyAdService } from './../../shared/supply-ad.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SupplyAdService } from '../../shared/supply-ad.service';
import { SupplyAd } from '../../shared/supply-ad.model';


@Component({
  selector: 'app-display-supply-ad',
  templateUrl: './display-supply-ad.component.html',
  styleUrls: ['./display-supply-ad.component.css'],
  //providers:[SupplyAd[]]
})
export class DisplaySupplyAdComponent implements OnInit {
  supplyAds: SupplyAd[];
  selectedSupplyAd: SupplyAd;
  constructor(private supplyAdService: SupplyAdService,
    private _router: Router) { }

  ngOnInit() {
    this.supplyAdService.getSupplyAdList().subscribe((res) => {
      this.supplyAdService.supplyAds = res as SupplyAd[];

    });
  }


  ////new/////
  onView(id) {
    this._router.navigate([`/DesSup/${id}`]);
    // localStorage.setItem('_ID', sup._id);
    // console.log("id" + sup._id);
  }
  //////////

}
