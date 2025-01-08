import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent implements OnInit {
  scrollingTexts: string[] = [];
  arrowImages: string[] = [
    './../../../assets/img/above-the-fold/arrow-btn-normal.png',
    './../../../assets/img/above-the-fold/arrow-btn-down.png',
  ];
  currentArrowIndex: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadBannerTexts();

    // Beobachte Sprachwechsel, um Texte dynamisch zu aktualisieren
    this.translate.onLangChange.subscribe(() => {
      this.loadBannerTexts();
    });

    // Arrow-Animation nur im Browser starten
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.run(() => {
        setInterval(() => {
          this.currentArrowIndex =
            (this.currentArrowIndex + 1) % this.arrowImages.length;
        }, 1000); // Wechsel alle 1 Sekunde
      });
    }
  }

  loadBannerTexts() {
    // Lade Banner-Texte aus den Übersetzungsdateien
    this.translate.get('BANNER_TEXTS').subscribe((texts: string[]) => {
      this.scrollingTexts = texts;
    });
  }

  ngOnDestroy() {
    if (this.currentArrowIndex) {
      clearInterval(this.currentArrowIndex); // Speicherlecks vermeiden
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
