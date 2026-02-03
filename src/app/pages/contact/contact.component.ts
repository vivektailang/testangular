import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <h1 class="text-center mb-5" style="color: #001f3f;">Get In Touch - MEDiiMAGE HEALTHCARE</h1>
      
      <div class="row">
        <!-- Contact Information -->
        <div class="col-md-6 mb-4">
          <div class="contact-info">
            <h4 class="mb-4" style="color: #001f3f;">Get in Touch</h4>
            
            <div class="info-item mb-4">
              <i class="bi bi-geo-alt fs-5" style="color: #001f3f;" id="geoIcon"></i>
              <div>
                <h6>Headquarters</h6>
                <p>India | Channel Partner of Konica Minolta Healthcare</p>
              </div>
            </div>

            <div class="info-item mb-4">
              <i class="bi bi-telephone fs-5" style="color: #001f3f;"></i>
              <div class="ms-3">
                <h6>Phone</h6>
                <p>+91 79748 83320</p>
              </div>
            </div>

            <div class="info-item mb-4">
              <i class="bi bi-envelope fs-5" style="color: #001f3f;"></i>
              <div class="ms-3">
                <h6>Email</h6>
                <p>sales&commat;mediimage.in</p>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-chat-dots fs-5" style="color: #001f3f;"></i>
              <div class="ms-3">
                <h6>WhatsApp</h6>
                <p>+91 79748 83320</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-md-6">
          <form class="contact-form" (ngSubmit)="sendMessage()">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" 
                     [(ngModel)]="formData.name" name="name" required>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" 
                     [(ngModel)]="formData.email" name="email" required>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" 
                     [(ngModel)]="formData.phone" name="phone">
            </div>

            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" class="form-control" id="subject" 
                     [(ngModel)]="formData.subject" name="subject" required>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="5" 
                        [(ngModel)]="formData.message" name="message" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg w-100">
              <i class="bi bi-send"></i> Send Message
            </button>
          </form>

          <div *ngIf="submitMessage" class="alert alert-success mt-3">
            {{ submitMessage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-info {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    .info-item {
      display: flex;
      align-items: flex-start;
    }
    .contact-form {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    .form-control {
      border-color: #e0e0e0;
    }
    .form-control:focus {
      border-color: #001f3f;
      box-shadow: 0 0 0 0.2rem rgba(0, 31, 63, 0.25);
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitMessage = '';

  sendMessage() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      this.submitMessage = '✓ Thank you for your message! We will get back to you soon.';
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      setTimeout(() => {
        this.submitMessage = '';
      }, 3000);
    }
  }
}
