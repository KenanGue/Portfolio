import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';
  menuOpen: boolean = false;

  constructor(private elementRef: ElementRef, public translate: TranslationService) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        this.currentLanguage = savedLanguage;
        this.translate.setLanguage(this.currentLanguage);
      } else {
        this.translate.setLanguage(this.currentLanguage);
      }
    } else {
      console.warn('localStorage is not available in this environment.');
      this.translate.setLanguage(this.currentLanguage); 
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
    this.translate.setLanguage(this.currentLanguage);
  
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', this.currentLanguage);
    } else {
      console.warn('localStorage is not available, changes will not persist.');
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }
}
