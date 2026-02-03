import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDAO {
  private usersJsonUrl = 'assets/data/users.json';

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersJsonUrl);
  }

  // Get user by ID
  getUserById(userId: string): Observable<User | undefined> {
    return new Observable(observer => {
      this.getAllUsers().subscribe(
        users => {
          const user = users.find(u => u.userId === userId);
          observer.next(user);
          observer.complete();
        },
        error => observer.error(error)
      );
    });
  }

  // Save new user
  addUser(user: User): Observable<AuthResponse> {
    // In a real application, this would send data to backend
    // For now, we'll simulate it
    return new Observable(observer => {
      this.getAllUsers().subscribe(
        users => {
          const userExists = users.some(u => u.userId === user.userId);
          if (userExists) {
            observer.next({
              success: false,
              message: 'User ID already exists'
            });
          } else {
            observer.next({
              success: true,
              message: 'User registered successfully',
              user: user
            });
          }
          observer.complete();
        },
        error => observer.error(error)
      );
    });
  }
}
