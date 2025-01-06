import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: ''
  };
  privacyChecked: boolean = false;

  post = {
    endPoint: 'https://kenan-günes.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      responseType: 'text' as const,
    },
  };

  constructor() {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.submitted && contactForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.info('Response:', response);
            contactForm.resetForm();
          },
          error: (error) => {
            console.error('Error:', error);
          },
          complete: () => console.info('Post request complete'),
        });
    } else if (contactForm.submitted && contactForm.form.valid) {
      console.info('Mail test active, skipping HTTP request.');
      contactForm.resetForm();
    }
  }
}
