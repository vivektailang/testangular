import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="about-hero" style="background: linear-gradient(135deg, #001f3f 0%, #003d7a 100%); color: white; padding: 80px 0;">
      <div class="container">
        <div class="row align-items-center min-vh-60">
          <div class="col-lg-12">
            <h1 class="display-4 fw-bold mb-4">About MEDiiMAGE HEALTHCARE</h1>
            <p class="lead mb-4">
              Transforming healthcare delivery with innovative, cutting-edge solutions.
            </p>
            <p class="fs-5 mb-4">
              At MEDiiMAGE HEALTHCARE, we're committed to empowering healthcare professionals 
              with advanced medical imaging solutions. Leveraging our deep understanding of medical imaging 
              and healthcare, we enable hospitals and clinics to make informed decisions and deliver exceptional patient care.
            </p>
            <p class="fs-5 mb-4">
              As an official Channel Partner of Konica Minolta, we bring world-class medical imaging 
              technology and comprehensive support to healthcare providers across India.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Strengths Section -->
    <div style="background-color: #f8f9fa; padding: 80px 0;">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f; font-size: 2.5rem;">Our Key Strengths</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-award" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">14+ Years Experience</h5>
                <p class="text-muted">Proven track record in medical imaging and healthcare solutions</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-building" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">Konica Minolta Partner</h5>
                <p class="text-muted">Access to cutting-edge medical imaging technology</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-globe" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">Comprehensive Support</h5>
                <p class="text-muted">Sales and service support across all of India</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-lightbulb" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">Innovation-Driven</h5>
                <p class="text-muted">Bringing latest healthcare solutions to market</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-hand-thumbs-up" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">Trusted Partner</h5>
                <p class="text-muted">Dedicated to healthcare excellence and quality</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <i class="bi bi-headset" style="font-size: 3rem; color: #001f3f;"></i>
                <h5 class="mt-3 mb-2" style="color: #001f3f;">24/7 Support</h5>
                <p class="text-muted">Round-the-clock customer and technical support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Section -->
    <div style="padding: 80px 0;">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f; font-size: 2.5rem;">Meet Our Leadership</h2>
        <p class="text-center text-muted mb-5 fs-5">Backed by industry expertise and vision</p>
        <div class="row g-4 justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="card border-0 shadow h-100 text-center p-5">
              <img src="assets/img/founder.jpeg" alt="Brajesh Chaudhary" 
                   class="rounded-circle mx-auto mb-4" width="250" height="250" style="object-fit: cover;">
              <h4 style="color: #001f3f;" class="fw-bold mb-2">Brajesh Chaudhary</h4>
              <p class="text-muted mb-4 fs-5">Founder & Director</p>
              <p class="mb-3 lh-lg">
                Senior Engineer with 14+ years of dedicated service at Konica Minolta Healthcare India. 
                Industry expert with exceptional expertise in medical imaging technology and healthcare solutions. 
                Visionary leader committed to transforming healthcare delivery across India.
              </p>
              <hr>
              <div class="mt-4">
                <p class="mb-2"><strong>Expertise:</strong></p>
                <p class="text-muted">Medical Imaging Technology | Healthcare Solutions | Konica Minolta Products | Channel Partnership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .min-vh-60 {
      min-height: 60vh;
    }
    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 31, 63, 0.2) !important;
    }
  `]
})
export class AboutComponent {
}
