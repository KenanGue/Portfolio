import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';
  menuOpen: boolean = false;

  constructor(private elementRef: ElementRef, private translate: TranslateService) {}

  ngOnInit(): void {
    // Lade gespeicherte Sprache aus localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.translate.use(this.currentLanguage);
    } else {
      // Standard auf Englisch
      this.translate.setDefaultLang(this.currentLanguage);
    }
  }

  logo() {
    this.elementRef.nativeElement.querySelector('.header-logo').classList.add('hover');
  }

  logoHover() {
    this.elementRef.nativeElement.querySelector('.header-logo').classList.remove('hover');
  }

  logoMobile() {
    this.elementRef.nativeElement.querySelector('.mobile-logo').classList.add('hover');
  }

  logoHoverMobile() {
    this.elementRef.nativeElement.querySelector('.mobile-logo').classList.remove('hover');
  }

  hamburger() {
    this.elementRef.nativeElement.querySelector('.hamburger').classList.add('hover');
  }

  hamburgerHover() {
    this.elementRef.nativeElement.querySelector('.hamburger').classList.remove('hover');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.toggleBodyScroll(this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;
    this.toggleBodyScroll(false);
  }

  toggleBodyScroll(disableScroll: boolean) {
    if (disableScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  switchButton(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);

    localStorage.setItem('selectedLanguage', this.currentLanguage);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }
}
