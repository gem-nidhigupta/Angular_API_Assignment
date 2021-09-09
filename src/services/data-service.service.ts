import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  sendData(values: any) {
    return this.http.post(
      `https://jsonplaceholder.typicode.com/photos`,
      values
    );
  }
  getRecords() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/`);
  }
}
