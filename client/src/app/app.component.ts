import { Component } from '@angular/core';
import { ApiService } from './api.service';
interface IResponse {
    message: string
}
@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
})

export class AppComponent {
  data: any;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.api.getData().subscribe((response: IResponse) => {
      this.data = response;
      console.log(response.message);
    });
  }
}
