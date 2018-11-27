import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ApiService } from './api.service';
import { IResponse } from './message-model';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  data: any;
  constructor(
    private api: ApiService,
    private translateService: TranslateService,
    ) {

    this.translateService.addLangs(['en']);
    // this.translateService.setDefaultLang('en');
    // this.translateService.use('en');
  }
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
