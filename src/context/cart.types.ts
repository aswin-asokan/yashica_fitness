import { ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  duration?: string;
  quantity: number;
}


export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, duration: string) => void;
  updateQuantity: (id: number, duration: string, quantity: number) => void;
  incrementItem: (id: number, duration: string) => void;
  decrementItem: (id: number, duration: string) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}


export interface CartProviderProps {
  children: ReactNode;
}
