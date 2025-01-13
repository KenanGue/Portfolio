import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  constructor(public translate: TranslationService) {}

}
