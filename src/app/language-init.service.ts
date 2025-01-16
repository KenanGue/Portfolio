import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageInitService {
  constructor(private translate: TranslateService) {}

  initializeLanguage(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isBrowserEnvironment()) {
        const savedLanguage = this.getSavedLanguage();
        this.loadLanguage(savedLanguage, resolve);
      } else {
        this.loadDefaultLanguage(resolve);
      }
    });
  }

  private isBrowserEnvironment(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }
  
  private getSavedLanguage(): string {
    return localStorage.getItem('language') || 'en';
  }

  private loadLanguage(language: string, resolve: () => void): void {
    this.translate.use(language).subscribe({
      next: () => {
        console.log(`Language loaded: ${language}`);
        resolve();
      },
      error: (err) => {
        console.error(`Error loading language: ${err}`);
        resolve();
      },
    });
  }

  private loadDefaultLanguage(resolve: () => void): void {
    this.translate.use('en').subscribe({
      next: () => {
        console.log('Default language loaded: en');
        resolve();
      },
      error: (err) => {
        console.error('Error loading default language:', err);
        resolve();
      },
    });
  }
}
