import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        TranslateModule,
        CommonModule,

    ],
    exports: [
        CommonModule,
        TranslateModule,
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
