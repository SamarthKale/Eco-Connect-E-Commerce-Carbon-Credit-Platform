import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import { RegisterPage } from './components/RegisterPage';
import { OTPPage } from './components/OTPPage';
import { HomePage } from './components/HomePage';
import { CustomerDashboard } from './components/CustomerDashboard';
import { CompanyDashboard } from './components/CompanyDashboard';
import { NGODashboard } from './components/NGODashboard';
import { CustomerLandingPage } from './components/CustomerLandingPage';
import { CompanyLandingPage } from './components/CompanyLandingPage';
import { NGOLandingPage } from './components/NGOLandingPage';
import { EcoShop } from './components/EcoShop';
import { ProductDetailPage } from './components/ProductDetailPage';
import { PaymentPage } from './components/PaymentPage';
import { OrderStatusPage } from './components/OrderStatusPage';
import { ProfilePage } from './components/ProfilePage';

type Page = 'landing' | 'about' | 'register' | 'otp-login' | 'otp-checkout' | 'home' | 'customer' | 'company' | 'ngo' | 'customer-landing' | 'company-landing' | 'ngo-landing' | 'shop' | 'product-detail' | 'payment' | 'order-status' | 'profile';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface PaymentData {
  type: 'credits' | 'product';
  items: CartItem[];
  total: number;
  ngoName?: string;
  creditsAmount?: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [userType, setUserType] = useState<'company' | 'ngo' | 'customer'>('customer');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [pendingRegistrationType, setPendingRegistrationType] = useState<'company' | 'ngo' | 'customer' | null>(null);
  const [userEmail, setUserEmail] = useState<string>('user@example.com');

  const navigateTo = (page: Page | string) => {
    // Protected pages require authentication
    const protectedPages: (Page | string)[] = ['home', 'customer', 'company', 'ngo', 'customer-landing', 'company-landing', 'ngo-landing', 'shop', 'product-detail', 'payment', 'order-status', 'profile'];
    
    if (protectedPages.includes(page) && !isAuthenticated) {
      setCurrentPage('register');
      return;
    }
    
    setCurrentPage(page as Page);
  };

  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    navigateTo('product-detail');
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(i => 
      i.id === id ? { ...i, quantity } : i
    ));
  };

  const initiatePayment = (data: PaymentData) => {
    setPaymentData(data);
    // Require OTP before payment
    setCurrentPage('otp-checkout');
  };

  const handleRegister = (type: 'company' | 'ngo' | 'customer') => {
    setPendingRegistrationType(type);
    setCurrentPage('otp-login');
  };

  const handleOTPVerified = (type: 'login' | 'checkout') => {
    if (type === 'login' && pendingRegistrationType) {
      setUserType(pendingRegistrationType);
      setIsAuthenticated(true);
      setPendingRegistrationType(null);
      
      // Route to appropriate role-specific landing page (not dashboard)
      if (pendingRegistrationType === 'company') {
        setCurrentPage('company-landing');
      } else if (pendingRegistrationType === 'ngo') {
        setCurrentPage('ngo-landing');
      } else {
        setCurrentPage('customer-landing');
      }
    } else if (type === 'checkout') {
      setCurrentPage('payment');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'register':
        return <RegisterPage onRegister={handleRegister} />;
      case 'otp-login':
        return (
          <OTPPage
            type="login"
            email={userEmail}
            onVerify={() => handleOTPVerified('login')}
            onBack={() => setCurrentPage('register')}
          />
        );
      case 'otp-checkout':
        return (
          <OTPPage
            type="checkout"
            email={userEmail}
            onVerify={() => handleOTPVerified('checkout')}
            onBack={() => setCurrentPage('shop')}
          />
        );
      case 'customer-landing':
        return (
          <CustomerLandingPage 
            onNavigate={navigateTo}
            userType={userType}
            isAuthenticated={isAuthenticated}
          />
        );
      case 'company-landing':
        return (
          <CompanyLandingPage 
            onNavigate={navigateTo}
            userType={userType}
            isAuthenticated={isAuthenticated}
          />
        );
      case 'ngo-landing':
        return (
          <NGOLandingPage 
            onNavigate={navigateTo}
            userType={userType}
            isAuthenticated={isAuthenticated}
          />
        );
      case 'home':
        // Redirect to appropriate landing page based on user type
        if (userType === 'company') {
          return (
            <CompanyLandingPage 
              onNavigate={navigateTo}
              userType={userType}
              isAuthenticated={isAuthenticated}
            />
          );
        } else if (userType === 'ngo') {
          return (
            <NGOLandingPage 
              onNavigate={navigateTo}
              userType={userType}
              isAuthenticated={isAuthenticated}
            />
          );
        } else {
          return (
            <CustomerLandingPage 
              onNavigate={navigateTo}
              userType={userType}
              isAuthenticated={isAuthenticated}
            />
          );
        }
      case 'customer':
        return (
          <CustomerDashboard 
            onNavigate={navigateTo}
          />
        );
      case 'company':
        return (
          <CompanyDashboard 
            onNavigate={navigateTo}
            onInitiatePayment={initiatePayment}
          />
        );
      case 'ngo':
        return (
          <NGODashboard 
            onNavigate={navigateTo}
          />
        );
      case 'shop':
        return (
          <EcoShop 
            onNavigate={navigateTo}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            onInitiatePayment={initiatePayment}
            onViewProduct={handleViewProduct}
          />
        );
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage
            product={getProductById(selectedProductId)}
            onNavigate={navigateTo}
            addToCart={addToCart}
          />
        ) : (
          <EcoShop 
            onNavigate={navigateTo}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            onInitiatePayment={initiatePayment}
            onViewProduct={handleViewProduct}
          />
        );
      case 'payment':
        return (
          <PaymentPage 
            onNavigate={navigateTo}
            paymentData={paymentData}
            clearCart={() => setCart([])}
          />
        );
      case 'order-status':
        return (
          <OrderStatusPage
            onNavigate={navigateTo}
          />
        );
      case 'profile':
        return (
          <ProfilePage 
            onNavigate={navigateTo}
            userType={userType}
          />
        );
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  // Helper function to get product by ID
  const getProductById = (id: string) => {
    const products = [
      {
        id: 'p1',
        name: 'Bamboo Toothbrush Set',
        price: 299,
        originalPrice: 499,
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '0.5kg',
      },
      {
        id: 'p2',
        name: 'Stainless Steel Water Bottle',
        price: 599,
        originalPrice: 899,
        category: 'Drinkware',
        image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '2.0kg',
      },
      {
        id: 'p3',
        name: 'Organic Cotton Tote Bag',
        price: 399,
        originalPrice: 599,
        category: 'Bags',
        image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzYwODc1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '1.5kg',
      },
      {
        id: 'p4',
        name: 'Reusable Bamboo Cutlery Set',
        price: 349,
        originalPrice: 499,
        category: 'Kitchen',
        image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '0.8kg',
      },
      {
        id: 'p5',
        name: 'Eco-Friendly Yoga Mat',
        price: 1299,
        originalPrice: 1899,
        category: 'Fitness',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0fGVufDB8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '3.0kg',
      },
      {
        id: 'p6',
        name: 'Biodegradable Phone Case',
        price: 799,
        originalPrice: 1199,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MHx8fHwxNzYwODU5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        co2Saved: '1.0kg',
      },
    ];
    
    return products.find(p => p.id === id) || products[0];
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      {renderPage()}
    </div>
  );
}
