import { Component, OnInit } from '@angular/core';
import { TransportAdService } from '../../shared/transport-ad.service';
import { TransportAd } from '../../shared/transport-ad.model';

@Component({
  selector: 'app-display-transport-ad',
  templateUrl: './display-transport-ad.component.html',
  styleUrls: ['./display-transport-ad.component.css']
})
export class DisplayTransportAdComponent implements OnInit {

  constructor(private transportAdService: TransportAdService) { }

  ngOnInit() {
    this.transportAdService.getTransportAdList().subscribe((res) => {
      this.transportAdService.transportAds = res as TransportAd[];
    });
  }

}
