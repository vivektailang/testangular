import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container text-center text-white d-flex align-items-center justify-content-center min-vh-50">
        <div class="hero-content">
          <h1 class="display-3 fw-bold mb-4">
            <i class="bi bi-heart-pulse"></i> MEDiiMAGE HEALTHCARE
          </h1>
          <p class="lead mb-4 fs-5">
            Pioneering healthcare solutions with cutting-edge medical imaging technology
          </p>
          <button class="btn btn-light btn-lg me-2" (click)="scrollToMission()">
            <i class="bi bi-arrow-down-circle"></i> Learn More
          </button>
          <button class="btn btn-outline-light btn-lg" routerLink="/contact">
            <i class="bi bi-telephone"></i> Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section py-5" #missionSection>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <h2 style="color: #001f3f;" class="mb-4">Our Mission</h2>
            <p class="lead">
              At MEDiiMAGE HEALTHCARE, we're committed to transforming healthcare delivery with innovative, 
              cutting-edge solutions.
            </p>
            <p>
              Leveraging our deep understanding of medical imaging and healthcare, we empower healthcare 
              professionals to make informed decisions and deliver exceptional patient care.
            </p>
            <div class="highlight-box mt-4">
              <h5 style="color: #001f3f;">
                <i class="bi bi-star-fill" style="color: #ffc107;"></i> Channel Partner Status
              </h5>
              <p class="mb-0">
                Recognized as an official Channel Partner of Konica Minolta, providing sales and service 
                support across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="leadership-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f;">
          <i class="bi bi-people-fill"></i> Meet Our Leadership
        </h2>
        <p class="text-center text-muted mb-5">Backed by industry expertise and vision</p>
        
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="leadership-card">
              <div class="leader-image">
                <img src="assets/img/founder.jpeg" alt="Brajesh Chaudhary" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
              </div>
              <h4 style="color: #001f3f;" class="mt-3">Brajesh Chaudhary</h4>
              <p class="text-muted">Founder</p>
              <p class="mt-3">
                Senior Engineer with 14+ years of dedicated service at Konica Minolta Healthcare India. 
                Industry expert with exceptional expertise in medical imaging and healthcare technology.
              </p>
              <div class="badge-container mt-3">
                <span class="badge bg-primary">14+ Years Experience</span>
                <span class="badge bg-info">Industry Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Section -->
    <section class="partnership-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f;">
          <i class="bi bi-handshake"></i> Our Partnership
        </h2>
        <p class="text-center text-muted mb-5">Empowered by industry-leading technology</p>
        
        <div class="row g-4">
          <div class="col-md-4">
            <div class="partnership-card text-center">
              <i class="bi bi-lightning-fill" style="font-size: 3rem; color: #001f3f;"></i>
              <h5 class="mt-3" style="color: #001f3f;">Cutting-Edge Technology</h5>
              <p class="text-muted">
                Access to Konica Minolta's advanced medical imaging solutions and latest healthcare technology.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="partnership-card text-center">
              <i class="bi bi-shield-check" style="font-size: 3rem; color: #001f3f;"></i>
              <h5 class="mt-3" style="color: #001f3f;">Channel Partner Status</h5>
              <p class="text-muted">
                Recognized as an official Channel Partner providing sales and service support across India.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="partnership-card text-center">
              <i class="bi bi-headset" style="font-size: 3rem; color: #001f3f;"></i>
              <h5 class="mt-3" style="color: #001f3f;">Complete Support</h5>
              <p class="text-muted">
                Comprehensive sales and service support tailored to meet the unique needs of Indian healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-5">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f;">
          <i class="bi bi-star-fill"></i> Why Choose Us?
        </h2>
        <p class="text-center text-muted mb-5">Strategic advantages for your healthcare facility</p>
        
        <div class="row g-4">
          <div class="col-md-6">
            <div class="why-card">
              <div class="icon-box">
                <i class="bi bi-briefcase" style="font-size: 2.5rem; color: #001f3f;"></i>
              </div>
              <h5 style="color: #001f3f;">Industry Expertise</h5>
              <p>14+ years of experience in medical imaging and healthcare technology with proven track record.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="why-card">
              <div class="icon-box">
                <i class="bi bi-lightbulb" style="font-size: 2.5rem; color: #001f3f;"></i>
              </div>
              <h5 style="color: #001f3f;">Innovation-Driven</h5>
              <p>Partnered with Konica Minolta to bring the latest cutting-edge healthcare solutions to India.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="why-card">
              <div class="icon-box">
                <i class="bi bi-tools" style="font-size: 2.5rem; color: #001f3f;"></i>
              </div>
              <h5 style="color: #001f3f;">Reliable Support</h5>
              <p>Dedicated support team committed to ensuring your equipment operates at peak efficiency.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="why-card">
              <div class="icon-box">
                <i class="bi bi-hand-thumbs-up" style="font-size: 2.5rem; color: #001f3f;"></i>
              </div>
              <h5 style="color: #001f3f;">Trusted Partnership</h5>
              <p>Choose a partner you can trust to enhance patient outcomes and drive healthcare excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" style="color: #001f3f;">
          <i class="bi bi-capsule"></i> Our Healthcare Products
        </h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let product of products">
            <div class="product-card">
              <div class="product-icon">
                <i [class]="'bi ' + product.icon" style="font-size: 3rem; color: #001f3f;"></i>
              </div>
              <h5 class="product-name">{{ product.name }}</h5>
              <p class="product-category">{{ product.category }}</p>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-footer">
                <p class="product-price">₹{{ product.price | number }}</p>
                <button class="btn btn-sm btn-primary" 
                        (click)="addToCart(product)"
                        [disabled]="!isLoggedIn">
                  <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
                <small *ngIf="!isLoggedIn" class="text-danger d-block mt-2">
                  <i class="bi bi-info-circle"></i> Login to add to cart
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5" style="background-color: #001f3f; color: white;">
      <div class="container text-center">
        <h2 class="mb-4">Ready to Transform Your Healthcare Facility?</h2>
        <p class="lead mb-4">
          Get in touch with our team for cutting-edge medical imaging solutions
        </p>
        <button class="btn btn-light btn-lg me-2" routerLink="/contact">
          <i class="bi bi-telephone"></i> Contact Us
        </button>
        <button class="btn btn-outline-light btn-lg" (click)="scrollToProducts()">
          <i class="bi bi-box-seam"></i> View Products
        </button>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #001f3f 0%, #003d6b 100%);
      color: white;
      min-height: 500px;
    }

    .hero-content {
      max-width: 600px;
    }

    .min-vh-50 {
      min-height: 50vh;
    }

    .mission-section {
      background-color: #ffffff;
    }

    .highlight-box {
      background-color: #f0f8ff;
      border-left: 4px solid #001f3f;
      padding: 1.5rem;
      border-radius: 8px;
    }

    .leadership-section {
      background-color: #f8f9fa;
    }

    .leadership-card {
      background: white;
      border-radius: 12px;
      padding: 3rem 2rem;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .leadership-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 31, 63, 0.2);
    }

    .leader-image {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 120px;
    }

    .badge-container {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .partnership-section {
      background-color: #ffffff;
    }

    .partnership-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 2rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .partnership-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 31, 63, 0.15);
      border-color: #001f3f;
    }

    .why-choose-us {
      background-color: #f8f9fa;
    }

    .why-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .why-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 31, 63, 0.15);
    }

    .icon-box {
      margin-bottom: 1rem;
    }

    .products-section {
      background-color: #ffffff;
    }

    .product-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 31, 63, 0.2);
      border-color: #001f3f;
    }

    .product-icon {
      margin-bottom: 1rem;
      min-height: 60px;
    }

    .product-name {
      color: #001f3f;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .product-category {
      color: #0dcaf0;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .product-description {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    .product-footer {
      border-top: 1px solid #e0e0e0;
      padding-top: 1rem;
      margin-top: auto;
    }

    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #28a745;
      margin-bottom: 1rem;
    }

    .btn-primary {
      background-color: #001f3f;
      border-color: #001f3f;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: #003d6b;
      border-color: #003d6b;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .cta-section {
      border-top: 3px solid #0dcaf0;
    }

    h2 {
      border-bottom: 3px solid #001f3f;
      padding-bottom: 1rem;
      display: inline-block;
    }

    @media (max-width: 768px) {
      .hero-section {
        min-height: 350px;
      }

      .hero-content h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.8rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Digital X-ray (DR)',
      description: 'Modern digital radiography system for high-quality imaging',
      price: 450000,
      category: 'Imaging Equipment',
      icon: 'bi-radioactive'
    },
    {
      id: 2,
      name: 'Computerised X-ray (CR)',
      description: 'Computed radiography system for efficient diagnosis',
      price: 350000,
      category: 'Imaging Equipment',
      icon: 'bi-memory'
    },
    {
      id: 3,
      name: 'X-ray Machine',
      description: 'Portable and fixed X-ray machine for clinical use',
      price: 250000,
      category: 'Imaging Equipment',
      icon: 'bi-lightning'
    },
    {
      id: 4,
      name: 'C-Arm',
      description: 'Mobile fluoroscopy C-arm for surgical imaging',
      price: 650000,
      category: 'Surgical Equipment',
      icon: 'bi-disc'
    },
    {
      id: 5,
      name: 'Pressure Injector',
      description: 'High-pressure injection system for contrast media',
      price: 85000,
      category: 'Diagnostic Equipment',
      icon: 'bi-droplet-fill'
    },
    {
      id: 6,
      name: 'Ultrasound Machine',
      description: 'Portable ultrasound imaging system for various applications',
      price: 200000,
      category: 'Imaging Equipment',
      icon: 'bi-soundwave'
    },
    {
      id: 7,
      name: 'CT Scanner',
      description: 'Multi-slice CT scanner for advanced imaging',
      price: 1500000,
      category: 'Advanced Imaging',
      icon: 'bi-cube'
    },
    {
      id: 8,
      name: 'MRI Machine',
      description: 'Magnetic resonance imaging system for detailed diagnostics',
      price: 2000000,
      category: 'Advanced Imaging',
      icon: 'bi-square-fill'
    },
    {
      id: 9,
      name: 'X-Ray Films',
      description: 'High-quality X-ray films for medical imaging',
      price: 1500,
      category: 'Consumables',
      icon: 'bi-film'
    }
  ];

  isLoggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    
    // Subscribe to login status changes
    this.authService.getLoginStatusObservable().subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    alert(`${product.name} added to cart!`);
  }

  scrollToMission(): void {
    const element = document.querySelector('.mission-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProducts(): void {
    const element = document.querySelector('.products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
