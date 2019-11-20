import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SupplyAdService } from './../shared/supply-ad.service';
import { SupplyAd } from '../shared/supply-ad.model';

@Component({
  selector: 'app-supply-ad',
  templateUrl: './supply-ad.component.html',
  styleUrls: ['./supply-ad.component.css'],
  providers: [SupplyAdService]
})
export class SupplyAdComponent implements OnInit {

  constructor(private supplyAdService: SupplyAdService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSupplyAdList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.supplyAdService.selectedSupplyAd = {
      _id: "",
      name: "",
      price: null,
      quantity: "",
      hDate: "",
      eDate: "",
      des: "",
      advertiser: "",
      contactNo:""

    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.supplyAdService.postSupplyAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSupplyAdList();
      });
    }
    else {
      this.supplyAdService.putSupplyAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSupplyAdList();
      });
    }
  }


  refreshSupplyAdList() {
    this.supplyAdService.getSupplyAdList().subscribe((res) => {
      this.supplyAdService.supplyAds = res as SupplyAd[];
    });
  }

  onEdit(sup: SupplyAd) {
    this.supplyAdService.selectedSupplyAd = sup;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.supplyAdService.deleteSupplyAd(_id).subscribe((res) => {
        this.refreshSupplyAdList();
        this.resetForm(form);
      });
    }
  }
}
