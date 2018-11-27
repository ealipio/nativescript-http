import { NativeScriptLoader } from '@danvick/ngx-translate-nativescript-loader';

export const createTranslationLoader = () => {
    return new NativeScriptLoader( '/assets/i18n/', '.json');
};
