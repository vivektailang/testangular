import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-8">
          <h2 style="color: #001f3f;" class="mb-4">
            <i class="bi bi-cart-fill"></i> Shopping Cart
          </h2>

          <div *ngIf="cartItems.length === 0" class="alert alert-info">
            <i class="bi bi-info-circle"></i> Your cart is empty. 
            <a routerLink="/home" class="alert-link">Continue shopping</a>
          </div>

          <div *ngIf="cartItems.length > 0">
            <div class="card mb-3" *ngFor="let item of cartItems">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <h5 class="card-title" style="color: #001f3f;">{{ item.product.name }}</h5>
                    <p class="text-muted mb-0">{{ item.product.description }}</p>
                    <p class="text-muted small mt-1">Category: {{ item.product.category }}</p>
                  </div>
                  <div class="col-md-2 text-center">
                    <p class="fw-bold" style="color: #001f3f;">₹{{ item.product.price }}</p>
                  </div>
                  <div class="col-md-2">
                    <div class="input-group input-group-sm">
                      <button class="btn btn-outline-secondary" type="button" 
                              (click)="decreaseQuantity(item.product.id)">−</button>
                      <input type="text" class="form-control text-center" 
                             [value]="item.quantity" readonly>
                      <button class="btn btn-outline-secondary" type="button"
                              (click)="increaseQuantity(item.product.id)">+</button>
                    </div>
                  </div>
                  <div class="col-md-2 text-end">
                    <p class="fw-bold" style="color: #28a745;">₹{{ item.product.price * item.quantity }}</p>
                    <button class="btn btn-sm btn-danger" (click)="removeFromCart(item.product.id)">
                      <i class="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card cart-summary">
            <div class="card-header" style="background-color: #001f3f; color: white;">
              <h5 class="mb-0">Order Summary</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>₹{{ cartTotal }}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <strong>₹0 (Free)</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <strong>₹{{ (cartTotal * 0.18) | number:'1.2-2' }}</strong>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-3">
                <h6 class="mb-0">Total:</h6>
                <h5 class="mb-0" style="color: #28a745;">₹{{ (cartTotal * 1.18) | number:'1.2-2' }}</h5>
              </div>

              <button class="btn btn-primary w-100 mb-2" 
                      [disabled]="cartItems.length === 0"
                      (click)="checkout()">
                <i class="bi bi-credit-card"></i> Proceed to Checkout
              </button>

              <button class="btn btn-outline-secondary w-100" routerLink="/home">
                <i class="bi bi-arrow-left"></i> Continue Shopping
              </button>

              <button class="btn btn-outline-danger w-100 mt-2" 
                      [disabled]="cartItems.length === 0"
                      (click)="clearCart()">
                <i class="bi bi-trash"></i> Clear Cart
              </button>
            </div>
          </div>

          <div class="alert alert-success mt-3">
            <small><i class="bi bi-check-circle"></i> All products are certified medical equipment</small>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }

    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 31, 63, 0.15);
    }

    .cart-summary {
      border: 2px solid #001f3f;
      border-radius: 8px;
      position: sticky;
      top: 100px;
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

    .input-group-sm {
      max-width: 100px;
    }

    h2 {
      border-bottom: 2px solid #001f3f;
      padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .cart-summary {
        position: relative;
        top: 0;
        margin-top: 2rem;
      }

      .col-md-6, .col-md-2, .col-md-4 {
        margin-bottom: 1rem;
      }
    }
  `]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    }
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }

  checkout(): void {
    alert('Checkout functionality coming soon! Thank you for your order.');
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }
}
