import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product, Cart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  /**
   * Get cart items as observable
   */
  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  /**
   * Add product to cart
   */
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }

    this.cartSubject.next([...this.cart]);
  }

  /**
   * Remove product from cart
   */
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.cart]);
  }

  /**
   * Update quantity of a product
   */
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cart.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartSubject.next([...this.cart]);
      }
    }
  }

  /**
   * Clear cart
   */
  clearCart(): void {
    this.cart = [];
    this.cartSubject.next([...this.cart]);
  }

  /**
   * Get cart total
   */
  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  /**
   * Get cart item count
   */
  getCartItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  /**
   * Get current cart
   */
  getCurrentCart(): Cart {
    return {
      items: this.cart,
      totalPrice: this.getCartTotal()
    };
  }
}
