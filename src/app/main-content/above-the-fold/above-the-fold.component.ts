import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  scrollingTexts: string[] = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Mayen',
    'Open to opportunities'
  ];
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {}

  ngOnInit() {
<<<<<<< HEAD
    if (isPlatformBrowser(this.platformId)) {
      
        this.intervalId = setInterval(() => {
        }, 10000);
    }
=======
    this.updateBanner();
    setInterval(() => this.updateBanner(), 5000);
>>>>>>> af4aaf814b1d415271101097548e7e4284f016c8
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

<<<<<<< HEAD
=======
  private updateBanner() {
    this.currentBannerText = this.bannerItems[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length; 
  }
}
>>>>>>> af4aaf814b1d415271101097548e7e4284f016c8
