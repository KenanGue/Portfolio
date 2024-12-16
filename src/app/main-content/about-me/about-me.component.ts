import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private elementRef: ElementRef) { }

  onMouseOver() {
    this.elementRef.nativeElement.querySelector('.image-container').classList.add('hover');
  }

  onMouseOut() {
    this.elementRef.nativeElement.querySelector('.image-container').classList.remove('hover');
  }
}
