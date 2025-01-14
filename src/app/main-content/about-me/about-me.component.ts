import { Component, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
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
