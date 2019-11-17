import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // user = JSON.parse(localStorage.getItem("user"));

  constructor(private http: HttpClient) { }
userdata:any = {}
  ngOnInit() {

    this.http.get('http://localhost:3000/api/getprofile')
    .subscribe((data)=>
    {
this.userdata=data
console.log(data)
  
    })


  }

}
