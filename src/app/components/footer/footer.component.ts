import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer mt-auto py-5" style="background-color: #000000; color: white;">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h5 class="text-uppercase mb-4 fw-bold" style="color: #0dcaf0;">MEDiiMAGE HEALTHCARE</h5>
            <p>
              Pioneering healthcare solutions with cutting-edge medical imaging technology. 
              Official Channel Partner of Konica Minolta.
            </p>
            <div class="social-links mt-4">
              <a href="#" class="text-white me-3"><i class="bi bi-facebook fs-5"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-twitter fs-5"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-linkedin fs-5"></i></a>
              <a href="#" class="text-white"><i class="bi bi-instagram fs-5"></i></a>
            </div>
          </div>
          
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h5 class="text-uppercase mb-4 fw-bold" style="color: #0dcaf0;">Quick Links</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a routerLink="/home" fragment="hero" class="text-white text-decoration-none hover-link">
                  <i class="bi bi-chevron-right small me-2"></i>Home
                </a>
              </li>
              <li class="mb-2">
                <a routerLink="/home" fragment="mission" class="text-white text-decoration-none hover-link">
                  <i class="bi bi-chevron-right small me-2"></i>Our Mission
                </a>
              </li>
              <li class="mb-2">
                <a routerLink="/home" fragment="products" class="text-white text-decoration-none hover-link">
                  <i class="bi bi-chevron-right small me-2"></i>Products
                </a>
              </li>
              <li class="mb-2">
                <a routerLink="/about" class="text-white text-decoration-none hover-link">
                  <i class="bi bi-chevron-right small me-2"></i>About Us
                </a>
              </li>
              <li class="mb-2">
                <a routerLink="/contact" class="text-white text-decoration-none hover-link">
                  <i class="bi bi-chevron-right small me-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4">
            <h5 class="text-uppercase mb-4 fw-bold" style="color: #0dcaf0;">Contact Info</h5>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="bi bi-geo-alt-fill me-2" style="color: #0dcaf0;"></i>
                123 Healthcare Avenue, Medical District, New Delhi - 110001
              </li>
              <li class="mb-3">
                <i class="bi bi-envelope-fill me-2" style="color: #0dcaf0;"></i>
                info&#64;mediimage.com
              </li>
              <li class="mb-3">
                <i class="bi bi-telephone-fill me-2" style="color: #0dcaf0;"></i>
                +91 79748 83320
              </li>
            </ul>
          </div>
        </div>
        
        <hr class="my-4" style="border-color: rgba(255,255,255,0.1);">
        
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0 small">&copy; 2024 MEDiiMAGE HEALTHCARE. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="mb-0 small">
              <a href="#" class="text-white text-decoration-none me-3">Privacy Policy</a>
              <a href="#" class="text-white text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .hover-link:hover { color: #0dcaf0 !important; padding-left: 5px; transition: all 0.3s ease; }
    .social-links a:hover { color: #0dcaf0 !important; }
  `]
})
export class FooterComponent {}