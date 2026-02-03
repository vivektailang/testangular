import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="text-light mt-5 py-4" style="background-color: #001f3f;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5><i class="bi bi-heart-pulse"></i> MEDiiMAGE HEALTHCARE</h5>
            <p>Pioneering healthcare solutions with cutting-edge medical imaging technology.</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Mission</a></li>
              <li><a href="#" class="text-light text-decoration-none">Partnership</a></li>
              <li><a href="#" class="text-light text-decoration-none">Why Choose Us</a></li>
              <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Connect With Us</h5>
            <div>
              <p class="text-light mb-2">
                <i class="bi bi-telephone"></i> +91 79748 83320
              </p>
              <p class="text-light mb-2">
                <i class="bi bi-envelope"></i> sales&#64;mediimage.in
              </p>
              <p class="text-light mb-2">
                <i class="bi bi-envelope"></i> support&#64;mediimage.in
              </p>
              <div class="mt-2">
                <a href="https://www.facebook.com/share/1AZ1N89nsT/" target="_blank" class="text-light me-3"><i class="bi bi-facebook"></i></a>
                <a href="https://www.linkedin.com/company/mediimagehealthcare" target="_blank" class="text-light me-3"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/mediimagehealthcare?igsh=ZWVpOGV4bGplajdw" target="_blank" class="text-light"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="text-center">
          <p>&copy; 2026 MEDiiMAGE HEALTHCARE. All rights reserved. | Website: www.mediimage.in</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      margin-top: auto;
    }
    a {
      transition: color 0.3s ease;
    }
    a:hover {
      color: #0dcaf0 !important;
    }
  `]
})
export class FooterComponent {
}
