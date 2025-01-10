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
  menuOpen: boolean = false;

  constructor(private elementRef: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
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
    const switchElements = this.elementRef.nativeElement.querySelectorAll('.language-switch div');
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    switchElements.forEach((switchElement: any) => {
      switchElement.querySelector('img:nth-child(1)').style.display = this.currentLanguage === 'en' ? 'block' : 'none';
      switchElement.querySelector('img:nth-child(2)').style.display = this.currentLanguage === 'de' ? 'block' : 'none';
    });

    this.translate.use(this.currentLanguage);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }
}
