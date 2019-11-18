import { DemandAd } from './../../shared/demand-ad.model';
import { DemandAdService } from './../../shared/demand-ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-dem',
  templateUrl: './des-dem.component.html',
  styleUrls: ['./des-dem.component.css'],
  providers: [DemandAdService]
})
export class DesDemComponent implements OnInit {
  demandAds: DemandAd[];
  selectedDemandAd: DemandAd;

  constructor(private demandAdService: DemandAdService,
    private _router: Router, private route: ActivatedRoute) { }

  demandAd: any = {}
  id: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.demandAdService.getDemandAd(this.id).subscribe((res) => {
        this.demandAd = res
        console.log("res" + JSON.stringify(this.demandAd))
      });
    })
  }

}
