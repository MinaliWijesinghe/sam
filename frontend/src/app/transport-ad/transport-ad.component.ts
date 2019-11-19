import { NgForm } from '@angular/forms';
import { TransportAdService } from './../shared/transport-ad.service';
import { Component, OnInit } from '@angular/core';
import { TransportAd } from '../shared/transport-ad.model';


@Component({
  selector: 'app-transport-ad',
  templateUrl: './transport-ad.component.html',
  styleUrls: ['./transport-ad.component.css'],
  providers: [TransportAdService]
})
export class TransportAdComponent implements OnInit {

  constructor(private transportAdService: TransportAdService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTransportAdList();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.transportAdService.selectedTransportAd = {
      _id: "",
      location: "",
      destination: "",
      vehicleType: "",
      packageType: "",
      name: "",
      maxPrice: null,
      quantity: "",
      date: "",
      des: "",
      advertiser: "",
      contactNo:""


    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.transportAdService.postTransportAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTransportAdList();
      });
    }
    else {
      this.transportAdService.putTransportAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTransportAdList();
      });
    }
  }
  refreshTransportAdList() {
    this.transportAdService.getTransportAdList().subscribe((res) => {
      this.transportAdService.transportAds = res as TransportAd[];
    });
  }
  onEdit(tra: TransportAd) {
    this.transportAdService.selectedTransportAd = tra;

  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.transportAdService.deleteTransportAd(_id).subscribe((res) => {
        this.refreshTransportAdList();
        this.resetForm(form);
      });
    }
  }
}
