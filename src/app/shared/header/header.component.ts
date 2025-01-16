import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';
  menuOpen: boolean = false;
  isInitialized: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const savedLanguage = this.getSavedLanguage();
    this.setLanguage(savedLanguage);
  }

  private getSavedLanguage(): string {
    return localStorage.getItem('language') || 'en';
  }

  private setLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language).subscribe({
      next: () => {
        this.isInitialized = true;
      },
      error: (err) => {
        console.error(`Error loading language: ${err}`);
        this.isInitialized = true;
      },
    });
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
    localStorage.setItem('language', this.currentLanguage);
    this.translate.use(this.currentLanguage).subscribe({
      error: (err) => console.error('Error switching language:', err)
    });
  }

  scrollToSection(section: string): void {
    this.closeMenu();
    const isHome = this.router.url === '/';
    if (isHome) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}