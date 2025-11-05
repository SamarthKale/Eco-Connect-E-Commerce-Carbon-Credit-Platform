import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ArrowLeft, Package, Truck, CheckCircle, MapPin, Calendar, Clock, Download, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import orderStatusImage from 'figma:asset/aa93cfe6cb3210df7302acdf1eab3b9c04df9ceb.png';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: 'received' | 'preparing' | 'shipped' | 'delivered';
  items: OrderItem[];
  total: number;
  shippingAddress: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}

interface OrderStatusPageProps {
  onNavigate: (page: string) => void;
  orderId?: string;
}

const mockOrder: Order = {
  id: 'ECO-2025-10001',
  date: '2025-10-28',
  status: 'shipped',
  items: [
    {
      id: 'p1',
      name: 'Bamboo Toothbrush Set',
      price: 299,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'p2',
      name: 'Organic Cotton Tote Bag',
      price: 399,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzYwODc1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
  total: 997,
  shippingAddress: '123, Green Valley Apartments, Sector 15, Mumbai - 400001',
  estimatedDelivery: '2025-11-02',
  trackingNumber: 'ECO1234567890',
};

export function OrderStatusPage({ onNavigate, orderId }: OrderStatusPageProps) {
  const [order] = useState<Order>(mockOrder);

  const statusSteps = [
    {
      key: 'received',
      label: 'Order Received',
      icon: CheckCircle,
      completed: true,
      date: '28 Oct, 10:30 AM',
    },
    {
      key: 'preparing',
      label: 'Preparing Your Order',
      icon: Package,
      completed: true,
      date: '28 Oct, 2:45 PM',
    },
    {
      key: 'shipped',
      label: 'Shipped',
      icon: Truck,
      completed: order.status === 'shipped' || order.status === 'delivered',
      date: order.status === 'shipped' || order.status === 'delivered' ? '29 Oct, 9:15 AM' : '',
    },
    {
      key: 'delivered',
      label: 'Order Delivered',
      icon: CheckCircle,
      completed: order.status === 'delivered',
      date: order.status === 'delivered' ? '31 Oct, 11:00 AM' : '',
    },
  ];

  const getStatusIndex = () => {
    return statusSteps.findIndex(step => step.key === order.status);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('profile')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Header */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Order #{order.id}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Est. delivery by {new Date(order.estimatedDelivery).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                  })}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Invoice
              </Button>
              {order.trackingNumber && (
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Track
                </Button>
              )}
            </div>
          </div>

          {order.trackingNumber && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-900">
                <span className="font-medium">Tracking Number:</span> {order.trackingNumber}
              </p>
            </div>
          )}
        </Card>

        {/* Order Status Timeline */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">Order Status</h2>
          
          <div className="relative">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.completed;
              const isLast = index === statusSteps.length - 1;

              return (
                <div key={step.key} className="relative flex gap-4 pb-8 last:pb-0">
                  {/* Vertical Line */}
                  {!isLast && (
                    <div
                      className={`absolute left-[15px] top-[32px] w-0.5 h-full ${
                        isCompleted ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted
                        ? 'bg-green-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className={`font-semibold mb-1 ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.label}
                    </h3>
                    {step.date && (
                      <p className="text-sm text-muted-foreground">{step.date}</p>
                    )}
                    {!step.date && !isCompleted && (
                      <p className="text-sm text-muted-foreground">Pending</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Order Items */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                  <div className="font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center font-semibold text-lg">
                <span>Total</span>
                <span className="text-green-600">₹{order.total}</span>
              </div>
            </div>
          </Card>

          {/* Delivery Address */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {order.shippingAddress}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Estimated Delivery</h3>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">
                    {new Date(order.estimatedDelivery).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {order.status === 'delivered' && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3">Rate Your Experience</h3>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="transition-transform hover:scale-110"
                        >
                          <Star className="w-7 h-7 text-gray-300 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you have any questions about your order, feel free to reach out to our support team.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
            <Button variant="outline" size="sm">
              Return/Exchange
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
