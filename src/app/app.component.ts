import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/privacy-policy') {
          this.scrollToTop();
        }
      });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
