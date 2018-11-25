import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://192.168.0.19:8080/api';
  constructor(private http: HttpClient) { }
  getData() {
    let headers = this.createRequestHeader();
    return this.http.get(this.url, { headers: headers });
  }
  private createRequestHeader() {
    return new HttpHeaders({
      "Content-Type": "application/json",
    });
  }
}
