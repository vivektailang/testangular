import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h2><i class="bi bi-box-arrow-in-right"></i> Login to MyShop</h2>
          <p class="text-muted">Enter your credentials to access your account</p>
        </div>

        <form (ngSubmit)="onLogin()">
          <!-- Login Form -->
          <div *ngIf="!showRegister" class="login-form">
            <div class="mb-3">
              <label for="userId" class="form-label">User ID</label>
              <input type="text" class="form-control form-control-lg" id="userId" 
                     [(ngModel)]="loginForm.userId" name="userId" 
                     placeholder="Enter your user ID" required>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control form-control-lg" id="password" 
                     [(ngModel)]="loginForm.password" name="password" 
                     placeholder="Enter your password" required>
            </div>

            <button type="submit" class="btn btn-primary btn-lg w-100 mb-3">
              <i class="bi bi-box-arrow-in-right"></i> Login
            </button>

            <div class="text-center">
              <p class="mb-0">Don't have an account? 
                <a href="#" (click)="toggleRegister($event)" class="text-primary fw-bold">
                  Register here
                </a>
              </p>
            </div>
          </div>

          <!-- Register Form -->
          <div *ngIf="showRegister" class="register-form">
            <div class="mb-3">
              <label for="regUserId" class="form-label">User ID</label>
              <input type="text" class="form-control form-control-lg" id="regUserId" 
                     [(ngModel)]="registerForm.userId" name="regUserId" 
                     placeholder="Choose a user ID" required>
            </div>

            <div class="mb-3">
              <label for="regName" class="form-label">Full Name</label>
              <input type="text" class="form-control form-control-lg" id="regName" 
                     [(ngModel)]="registerForm.name" name="regName" 
                     placeholder="Enter your full name" required>
            </div>

            <div class="mb-3">
              <label for="regEmail" class="form-label">Email Address</label>
              <input type="email" class="form-control form-control-lg" id="regEmail" 
                     [(ngModel)]="registerForm.email" name="regEmail" 
                     placeholder="Enter your email" required>
            </div>

            <div class="mb-3">
              <label for="regPassword" class="form-label">Password</label>
              <input type="password" class="form-control form-control-lg" id="regPassword" 
                     [(ngModel)]="registerForm.password" name="regPassword" 
                     placeholder="Create a password" required>
            </div>

            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control form-control-lg" id="confirmPassword" 
                     [(ngModel)]="registerForm.confirmPassword" name="confirmPassword" 
                     placeholder="Confirm your password" required>
            </div>

            <button type="button" (click)="onRegister()" class="btn btn-success btn-lg w-100 mb-3">
              <i class="bi bi-person-plus"></i> Register
            </button>

            <div class="text-center">
              <p class="mb-0">Already have an account? 
                <a href="#" (click)="toggleRegister($event)" class="text-primary fw-bold">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show mt-3">
          <i class="bi bi-check-circle"></i> {{ successMessage }}
          <button type="button" class="btn-close" (click)="successMessage = ''"></button>
        </div>

        <!-- Error Message -->
        <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mt-3">
          <i class="bi bi-exclamation-triangle"></i> {{ errorMessage }}
          <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
        </div>

        <!-- Demo Users -->
        <div *ngIf="!showRegister" class="demo-section mt-4">
          <hr>
          <p class="text-muted text-center mb-3"><small>Demo Credentials</small></p>
          <div class="row">
            <div class="col-6">
              <small class="text-muted d-block">User ID: user1</small>
              <small class="text-muted">Password: password1</small>
            </div>
            <div class="col-6">
              <small class="text-muted d-block">User ID: user2</small>
              <small class="text-muted">Password: password2</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 200px);
      background: linear-gradient(135deg, #001f3f 0%, #003d6b 100%);
      padding: 20px;
    }

    .login-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      padding: 2.5rem;
      width: 100%;
      max-width: 450px;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-header h2 {
      color: #001f3f;
      margin-bottom: 0.5rem;
    }

    .form-control {
      border-radius: 8px;
      border: 2px solid #e0e0e0;
      transition: all 0.3s ease;
    }

    .form-control:focus {
      border-color: #001f3f;
      box-shadow: 0 0 0 0.2rem rgba(0, 31, 63, 0.25);
    }

    .btn-primary, .btn-success {
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
      background-color: #001f3f;
      border-color: #001f3f;
    }

    .btn-primary:hover, .btn-success:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 31, 63, 0.3);
    }

    .demo-section {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 576px) {
      .login-card {
        padding: 1.5rem;
      }

      .login-header h2 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class LoginComponent {
  showRegister = false;

  loginForm = {
    userId: '',
    password: ''
  };

  registerForm = {
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(): void {
    if (!this.loginForm.userId || !this.loginForm.password) {
      this.errorMessage = 'Please enter both user ID and password';
      return;
    }

    this.authService.login(this.loginForm.userId, this.loginForm.password).subscribe(
      response => {
        if (response.success) {
          this.successMessage = 'Login successful!';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
      },
      error => {
        this.errorMessage = 'Login failed. Please try again.';
        this.successMessage = '';
      }
    );
  }

  onRegister(): void {
    if (!this.registerForm.userId || !this.registerForm.password || 
        !this.registerForm.name || !this.registerForm.email) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.authService.register(
      this.registerForm.userId,
      this.registerForm.password,
      this.registerForm.name,
      this.registerForm.email
    ).subscribe(
      response => {
        if (response.success) {
          this.successMessage = 'Registration successful! Please login with your credentials.';
          this.errorMessage = '';
          this.registerForm = { userId: '', password: '', confirmPassword: '', name: '', email: '' };
          setTimeout(() => {
            this.showRegister = false;
          }, 2000);
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
      },
      error => {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    );
  }

  toggleRegister(event: Event): void {
    event.preventDefault();
    this.showRegister = !this.showRegister;
    this.errorMessage = '';
    this.successMessage = '';
  }
}
