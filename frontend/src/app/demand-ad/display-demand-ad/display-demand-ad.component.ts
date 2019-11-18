import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DemandAdService } from '../../shared/demand-ad.service';
import { DemandAd } from '../../shared/demand-ad.model';

@Component({
  selector: 'app-display-demand-ad',
  templateUrl: './display-demand-ad.component.html',
  styleUrls: ['./display-demand-ad.component.css']
})
export class DisplayDemandAdComponent implements OnInit {

  constructor(private demandAdService: DemandAdService,
    private _router: Router) { }

  ngOnInit() {
    this.demandAdService.getDemandAdList().subscribe((res) => {
      this.demandAdService.demandAds = res as DemandAd[];
    });
  }

  onView(id) {
    this._router.navigate([`/DesDem/${id}`]);
  }
}
