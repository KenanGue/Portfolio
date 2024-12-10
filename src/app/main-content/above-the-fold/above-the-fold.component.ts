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
    if (isPlatformBrowser(this.platformId)) {
      
        this.intervalId = setInterval(() => {
        }, 10000);
    }
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

