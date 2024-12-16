import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// Funktion zur Erstellung des Http-Loaders für die Übersetzungsdateien
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Übersetzungsmodul zur AppConfig hinzufügen
appConfig.providers = [
  ...appConfig.providers,
  importProvidersFrom(
    HttpClientModule,
    TranslateModule.forRoot({ // Wichtig: forRoot() für globale Registrierung
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  )
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
