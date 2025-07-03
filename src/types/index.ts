export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  items: CartItem[];
  tableNumber: number;
  total: number;
  timestamp: Date;
}

export type ViewType = 'landing' | 'menu' | 'cart' | 'table' | 'confirmation';