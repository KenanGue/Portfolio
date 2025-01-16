import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
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
  emailSent: boolean = false; 
  errorMessage: string = '';

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

  onSubmit(contactForm: NgForm): void {
    if (contactForm.submitted && contactForm.form.valid) {
      this.sendEmail(contactForm);
    } else {
      this.handleInvalidForm();
    }
  }

  private sendEmail(contactForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: (response) => this.handleEmailSuccess(contactForm, response),
        error: (error) => this.handleEmailError(error),
      });
  }

  private handleEmailSuccess(contactForm: NgForm, response: any): void {
    console.info('Response:', response);
    this.emailSent = true;
    contactForm.resetForm();
    this.privacyChecked = false;
  
    setTimeout(() => {
      this.emailSent = false;
    }, 3000);
  }

  private handleEmailError(error: any): void {
    console.error('Error:', error);
    this.errorMessage = 'Failed to send email. Please try again later.';
  
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  
  private handleInvalidForm(): void {
    console.warn('Form is invalid or not submitted correctly.');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  
}
