import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  scrollingTexts: string[] = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Mayen',
    'Open to opportunities',
  ];

  arrowImages: string[] = [
    './../../../assets/img/above-the-fold/arrow-btn-normal.png',
    './../../../assets/img/above-the-fold/arrow-btn-down.png',
  ];

  currentArrowIndex: number = 0;
  private arrowIntervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.run(() => {
        setInterval(() => {
          this.currentArrowIndex =
            (this.currentArrowIndex + 1) % 2; // Zwischen 0 und 1 wechseln
        }, 1000); // Wechsel alle 1 Sekunde
      });
    }
  }
  
  switchArrowImage() {
    this.currentArrowIndex = (this.currentArrowIndex + 1) % this.arrowImages.length;
    setTimeout(() => this.switchArrowImage(),800); // Wechsel alle 1s
  }
  

  ngOnDestroy() {
    if (this.arrowIntervalId) {
      clearInterval(this.arrowIntervalId); // Speicherlecks vermeiden
    }
  }
}
