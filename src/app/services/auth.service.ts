import { Injectable } from '@angular/core';
import { UserDAO } from './user.dao';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private loginStatusChanged = new Subject<boolean>();

  constructor(private userDAO: UserDAO) { }

  /**
   * Observable that emits when login status changes
   */
  getLoginStatusObservable(): Observable<boolean> {
    return this.loginStatusChanged.asObservable();
  }

  /**
   * Authenticate user with username and password
   * @param userId - User ID
   * @param password - User password
   * @returns Observable of AuthResponse
   */
  login(userId: string, password: string): Observable<AuthResponse> {
    return new Observable(observer => {
      this.userDAO.getAllUsers().subscribe(
        users => {
          const user = users.find(u => u.userId === userId && u.password === password);
          if (user) {
            this.currentUser = user;
            this.loginStatusChanged.next(true);
            observer.next({
              success: true,
              message: 'Login successful',
              user: user
            });
          } else {
            observer.next({
              success: false,
              message: 'Invalid user ID or password'
            });
          }
          observer.complete();
        },
        error => {
          observer.next({
            success: false,
            message: 'Login failed: ' + error.message
          });
          observer.complete();
        }
      );
    });
  }

  /**
   * Register a new user
   * @param userId - New user ID
   * @param password - New password
   * @param name - User name
   * @param email - User email
   * @returns Observable of AuthResponse
   */
  register(userId: string, password: string, name: string, email: string): Observable<AuthResponse> {
    const newUser: User = {
      id: Date.now(),
      userId: userId,
      password: password,
      name: name,
      email: email
    };

    return this.userDAO.addUser(newUser);
  }

  /**
   * Check if user is logged in
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  /**
   * Get current logged in user
   * @returns User or null
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Logout user
   */
  logout(): void {
    this.currentUser = null;
    this.loginStatusChanged.next(false);
  }
}
