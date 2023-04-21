import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 


  }
  // add new employee  data
  addemployee(data:datamodel){
    this.http.post<datamodel>("http://localhost:3000/posts",data)
  }

}
