import {HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const createTranslationLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
};
