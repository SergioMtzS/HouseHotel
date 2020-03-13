import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient,private http2: HTTP) { }
  
  searchData() {
    return this.http.get(`${this.url}/films`)
  }

  
  search(){
  return this.http2.get('http://127.0.0.1:3000/films', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
}
}
