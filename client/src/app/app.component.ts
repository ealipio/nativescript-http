import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    data: any;
    constructor(private api: ApiService){}
    ngOnInit() {
         this.getData();
         this.data.subscribe(data => {
            console.log('---------------------------------------------', data.message);
         });
    }
    getData() : void {
        this.data = this.api.getData();
    }

 }
