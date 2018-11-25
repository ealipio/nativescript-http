import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IResponse } from './message-model';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private api: ApiService) {}
  ngOnInit() {
    // this.getData();
  }
  getData(): void {
    this.api.getData().subscribe((response: IResponse) => {
      this.data = response;
      console.log(response.message);
    });
  }
}
