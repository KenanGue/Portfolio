import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']  // Achte auf den Plural "styleUrls"
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyChecked: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Danke für den Kontakt, ich melde mich bei ihnen.');
    } else {
    }
  }
}
