import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransportAdService } from '../../shared/transport-ad.service';
import { TransportAd } from '../../shared/transport-ad.model';

@Component({
  selector: 'app-display-transport-ad',
  templateUrl: './display-transport-ad.component.html',
  styleUrls: ['./display-transport-ad.component.css']
})
export class DisplayTransportAdComponent implements OnInit {

  constructor(private transportAdService: TransportAdService,
    private _router: Router) { }

  ngOnInit() {
    this.transportAdService.getTransportAdList().subscribe((res) => {
      this.transportAdService.transportAds = res as TransportAd[];
    });
  }
  onView(id) {
    this._router.navigate([`/DesTra/${id}`]);
  }
}
