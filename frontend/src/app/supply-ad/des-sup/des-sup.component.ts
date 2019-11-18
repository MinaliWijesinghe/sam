/////////////////
import { Router, ActivatedRoute } from '@angular/router';

import { SupplyAd } from './../../shared/supply-ad.model';
import { SupplyAdService } from './../../shared/supply-ad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-sup',
  templateUrl: './des-sup.component.html',
  styleUrls: ['./des-sup.component.css'],
  providers: [SupplyAdService]
})
export class DesSupComponent implements OnInit {
  supplyAds: SupplyAd[];
  selectedSupplyAd: SupplyAd;


  constructor(private supplyAdService: SupplyAdService,
    private _router: Router,

    /////////
    private route: ActivatedRoute

  ) { }

  ///////////////new///////////
  supplyAd: any = {}
  id: string;


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params.id;

      this.supplyAdService.getSupplyAd(this.id).subscribe((res) => {
        this.supplyAd = res
        console.log("res" + JSON.stringify(this.supplyAd))

      });

    })
    /////////////////////////

  }

}

