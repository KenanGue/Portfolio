import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent implements OnInit {
  private bannerItems: string[] = [
    "Available for remote work",
    "Frontend Developer",
    "Based in Mayen",
    "Open to opportunities"
  ];
  private currentIndex: number = 0;
  public currentBannerText: string = '';

  ngOnInit() {
    this.updateBanner();
    setInterval(() => this.updateBanner(), 5000);
  }

  private updateBanner() {
    this.currentBannerText = this.bannerItems[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length; 
  }
}