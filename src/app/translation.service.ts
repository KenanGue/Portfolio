import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public translations: any = {};
  public currentLang = 'en'; 

  private langChangeSubject = new Subject<string>();
  public onLangChange: Observable<string> = this.langChangeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLang);
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.loadTranslations(lang);
    this.langChangeSubject.next(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe((res) => {
      this.translations = res;
    });
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  public get(key: string): Observable<any> {
    return of(this.translations[key]);
  }
}
