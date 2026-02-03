export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
}
