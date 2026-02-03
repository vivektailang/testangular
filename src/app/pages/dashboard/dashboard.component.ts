import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card dashboard-card">
            <div class="card-body text-center">
              <i class="bi bi-person-circle" style="font-size: 4rem; color: #001f3f;"></i>
              <h5 class="card-title mt-3" style="color: #001f3f;">{{ user?.name }}</h5>
              <p class="text-muted mb-0">{{ user?.userId }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card dashboard-card mb-4">
            <div class="card-header" style="background-color: #001f3f; color: white;">
              <h5 class="mb-0">Profile Information</h5>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-6">
                  <p><strong>Full Name:</strong></p>
                  <p>{{ user?.name }}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>User ID:</strong></p>
                  <p>{{ user?.userId }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Email:</strong></p>
                  <p>{{ user?.email }}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Member ID:</strong></p>
                  <p>#{{ user?.id }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card dashboard-card">
            <div class="card-header" style="background-color: #001f3f; color: white;">
              <h5 class="mb-0">Quick Actions</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <button class="btn btn-primary w-100" (click)="editProfile()">
                    <i class="bi bi-pencil"></i> Edit Profile
                  </button>
                </div>
                <div class="col-md-6 mb-3">
                  <button class="btn btn-info w-100" (click)="viewOrders()">
                    <i class="bi bi-bag-check"></i> My Orders
                  </button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-warning w-100" (click)="changePassword()">
                    <i class="bi bi-key"></i> Change Password
                  </button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-danger w-100" (click)="logout()">
                    <i class="bi bi-box-arrow-right"></i> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Welcome Section -->
      <div class="alert alert-success mt-4" role="alert">
        <h6 class="alert-heading"><i class="bi bi-check-circle"></i> Welcome to MEDiiMAGE HEALTHCARE!</h6>
        <p class="mb-0">You are successfully logged in. Explore our cutting-edge medical imaging solutions and place your order. All products are from our partnership with Konica Minolta.</p>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .dashboard-card:hover {
      box-shadow: 0 4px 12px rgba(0, 31, 63, 0.15);
    }

    .card-header {
      border-bottom: 2px solid #001f3f;
    }

    .btn-primary {
      background-color: #001f3f;
      border-color: #001f3f;
    }

    .btn-primary:hover {
      background-color: #003d6b;
      border-color: #003d6b;
    }

    p {
      margin-bottom: 0.5rem;
    }

    strong {
      color: #001f3f;
    }
  `]
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // Get current user
    this.user = this.authService.getCurrentUser();
  }

  editProfile(): void {
    alert('Edit profile feature coming soon!');
  }

  viewOrders(): void {
    alert('View orders feature coming soon!');
  }

  changePassword(): void {
    alert('Change password feature coming soon!');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
