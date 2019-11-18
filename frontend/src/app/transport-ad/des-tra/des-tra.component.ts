import { TransportAdService } from './../../shared/transport-ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-tra',
  templateUrl: './des-tra.component.html',
  styleUrls: ['./des-tra.component.css'],
  providers: [TransportAdService]
})
export class DesTraComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private transportAdService: TransportAdService) { }
  transportAd: any = {}
  id: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.transportAdService.getTransportAd(this.id).subscribe((res) => {
        this.transportAd = res
      });
    })
  }

}
