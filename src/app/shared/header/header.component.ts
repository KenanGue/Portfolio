import { Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'en';

  constructor(private elementRef: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage); 
  }

  logo() {
    this.elementRef.nativeElement.querySelector('.header-logo').classList.add('hover');
  }

  logoHover() {
    this.elementRef.nativeElement.querySelector('.header-logo').classList.remove('hover');
  }

  switchButton(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    const switchElement = this.elementRef.nativeElement.querySelector('.language-switch div');
    switchElement.querySelector('img:nth-child(1)').style.display = this.currentLanguage === 'en' ? 'block' : 'none';
    switchElement.querySelector('img:nth-child(2)').style.display = this.currentLanguage === 'de' ? 'block' : 'none';
    this.translate.use(this.currentLanguage);
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language; 
    this.translate.use(language);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
