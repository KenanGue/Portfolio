import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService, TranslateStore, TranslateCompiler, TranslateParser, TranslateDefaultParser } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateFakeCompiler } from '@ngx-translate/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    {
      provide: TranslateLoader, 
      useFactory: createTranslateLoader,
      deps: [HttpClient],
    },
    {
      provide: TranslateCompiler, 
      useClass: TranslateFakeCompiler,
    },
    {
      provide: TranslateParser, 
      useClass: TranslateDefaultParser,
    },
    TranslateService, 
    TranslateStore,   
    provideAnimationsAsync(), 
  ],
};
