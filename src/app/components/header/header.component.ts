import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #000000;">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" routerLink="/home" style="cursor: pointer;">
          <img src="assets/img/header_logo.jpeg" alt="MEDiiMAGE Logo" style="height: 40px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/home" routerLinkActive="active" 
                 [routerLinkActiveOptions]="{ exact: true }">
                <i class="bi bi-house-fill"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">
                <i class="bi bi-info-circle"></i> About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">
                <i class="bi bi-envelope"></i> Contact
              </a>
            </li>

            <!-- Cart Icon (Show when logged in) -->
            <li class="nav-item" *ngIf="isLoggedIn">
              <a class="nav-link btn btn-info btn-sm ms-2 position-relative" routerLink="/cart">
                <i class="bi bi-cart-fill"></i> Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      *ngIf="cartItemCount > 0">
                  {{ cartItemCount }}
                </span>
              </a>
            </li>

            <!-- Login Button (Show when not logged in) -->
            <li class="nav-item" *ngIf="!isLoggedIn">
              <a class="nav-link btn btn-light btn-sm ms-2" routerLink="/login">
                <i class="bi bi-box-arrow-in-right"></i> Login
              </a>
            </li>

            <!-- User Menu (Show when logged in) -->
            <li class="nav-item dropdown" *ngIf="isLoggedIn">
              <a class="nav-link dropdown-toggle btn btn-success btn-sm ms-2" href="#" 
                 id="userDropdown" role="button" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle"></i> {{ currentUserName }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <a class="dropdown-item" routerLink="/dashboard">
                    <i class="bi bi-speedometer2"></i> Dashboard
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item text-danger" (click)="logout()">
                    <i class="bi bi-box-arrow-right"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-brand {
      font-size: 1.5rem;
    }
    .nav-link {
      margin: 0 10px;
      transition: all 0.3s ease;
    }
    .nav-link:hover {
      color: #fff !important;
      transform: translateY(-2px);
    }
    .nav-link.active {
      color: #ffc107 !important;
      font-weight: bold;
    }
    .btn-light {
      color: white !important;
      background-color: #0dcaf0 !important;
      border: none;
    }
    .btn-light:hover {
      background-color: #0ba5d6 !important;
    }
    .btn-info {
      color: white !important;
      background-color: #0dcaf0 !important;
      border: none;
    }
    .btn-info:hover {
      background-color: #0ba5d6 !important;
    }
    .btn-success {
      color: white !important;
      background-color: #28a745 !important;
      border: none;
    }
    .btn-success:hover {
      background-color: #218838 !important;
    }
    .dropdown-item {
      transition: all 0.2s ease;
    }
    .dropdown-item:hover {
      background-color: #f8f9fa;
      transform: translateX(5px);
    }
    .dropdown-item.text-danger:hover {
      background-color: #f8d7da !important;
    }
    .badge {
      font-size: 0.7rem;
      top: -5px !important;
      right: -8px !important;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  currentUserName: string = '';
  cartItemCount: number = 0;
  private subscription: Subscription | null = null;
  private cartSubscription: Subscription | null = null;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateAuthStatus();
    
    // Subscribe to login status changes
    this.subscription = this.authService.getLoginStatusObservable().subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
          const user = this.authService.getCurrentUser();
          this.currentUserName = user?.name || 'User';
        } else {
          this.currentUserName = '';
          this.cartItemCount = 0;
        }
      }
    );

    // Subscribe to cart changes
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((count, item) => count + item.quantity, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  updateAuthStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.authService.getCurrentUser();
      this.currentUserName = user?.name || 'User';
    }
  }

  logout(): void {
    this.authService.logout();
    this.cartService.clearCart();
    this.updateAuthStatus();
    this.router.navigate(['/login']);
  }
}
