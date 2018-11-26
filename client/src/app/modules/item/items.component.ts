import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';
import { Page } from 'ui/page';
import { device } from 'platform';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Item[];
  actionTitle = 'My app';

  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(
    private itemService: ItemService,
    private page: Page,
  ) {
    // page.actionBarHidden = true;
    page.backgroundSpanUnderStatusBar = true;
    this.actionTitle = device.model;
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
