import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  results: any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  search(){
    
    this.results = this.apiService.search();
    console.log(this.results);

  }

}
