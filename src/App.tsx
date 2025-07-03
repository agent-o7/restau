import React, { useState } from 'react';
import type { ViewType, CartItem, MenuItem, Order } from './types';
import LandingView from './components/LandingView';
import MenuView from './components/MenuView';
import CartView from './components/CartView';
import TableSelectionView from './components/TableSelectionView';
import OrderConfirmationView from './components/OrderConfirmationView';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const addToCart = (menuItem: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === menuItem.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity: 1,
          image: menuItem.image
        }];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const confirmTable = (number: number) => {
    setTableNumber(number);
    
    const order: Order = {
      items: cart,
      tableNumber: number,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      timestamp: new Date()
    };
    
    setLastOrder(order);
    setCart([]); // Clear cart after order
    setCurrentView('confirmation');
  };

  const resetToMenu = () => {
    setCurrentView('menu');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return (
          <LandingView 
            onStart={() => setCurrentView('menu')}
          />
        );
      
      case 'menu':
        return (
          <MenuView
            cart={cart}
            onAddToCart={addToCart}
            onViewCart={() => setCurrentView('cart')}
            onBack={() => setCurrentView('landing')}
          />
        );
      
      case 'cart':
        return (
          <CartView
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onBack={() => setCurrentView('menu')}
            onProceedToTable={() => setCurrentView('table')}
          />
        );
      
      case 'table':
        return (
          <TableSelectionView
            cart={cart}
            onBack={() => setCurrentView('cart')}
            onConfirmTable={confirmTable}
          />
        );
      
      case 'confirmation':
        return lastOrder ? (
          <OrderConfirmationView
            order={lastOrder}
            onBackToMenu={resetToMenu}
          />
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;