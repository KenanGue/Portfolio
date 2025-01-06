import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService, TranslateStore, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateFakeCompiler } from '@ngx-translate/core';

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
      provide: TranslateLoader, // Bereitstellung des TranslateLoader
      useFactory: createTranslateLoader,
      deps: [HttpClient],
    },
    {
      provide: TranslateCompiler, // Bereitstellung des TranslateCompiler
      useClass: TranslateFakeCompiler,
    },
    TranslateService, // TranslateService wird bereitgestellt
    TranslateStore,   // TranslateStore wird bereitgestellt
  ],
};
