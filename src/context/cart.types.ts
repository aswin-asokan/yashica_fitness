import { ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  duration?: string;
  level?: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

export interface CartProviderProps {
  children: ReactNode;
}
