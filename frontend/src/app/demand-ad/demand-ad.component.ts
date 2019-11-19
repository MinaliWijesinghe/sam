import { NgForm } from '@angular/forms';
import { DemandAdService } from './../shared/demand-ad.service';
import { Component, OnInit } from '@angular/core';
import { DemandAd } from '../shared/demand-ad.model';



@Component({
  selector: 'app-demand-ad',
  templateUrl: './demand-ad.component.html',
  styleUrls: ['./demand-ad.component.css'],
  providers: [DemandAdService]
})
export class DemandAdComponent implements OnInit {

  constructor(private demandAdService: DemandAdService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshDemandAdList();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.demandAdService.selectedDemandAd = {
      _id: "",
      userId:"",
      name: "",
      maxPrice: null,
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
      this.demandAdService.postDemandAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDemandAdList();
      });
    }
    else {
      this.demandAdService.putDemandAd(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDemandAdList();
      });
    }
  }
  refreshDemandAdList() {
    this.demandAdService.getDemandAdListbyid().subscribe((res) => {
      this.demandAdService.demandAds = res as DemandAd[];
    });
  }
  onEdit(dem: DemandAd) {
    this.demandAdService.selectedDemandAd = dem;

  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.demandAdService.deleteDemandAd(_id).subscribe((res) => {
        this.refreshDemandAdList();
        this.resetForm(form);
      });
    }
  }
}
