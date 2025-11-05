import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { CheckCircle, CreditCard, Smartphone, Wallet, ArrowLeft, Award, Leaf } from 'lucide-react';
import type { PaymentData } from '../App';
import { toast } from 'sonner@2.0.3';

interface PaymentPageProps {
  onNavigate: (page: string) => void;
  paymentData: PaymentData | null;
  clearCart: () => void;
}

export function PaymentPage({ onNavigate, paymentData, clearCart }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <p className="text-muted-foreground mb-4">No payment data available</p>
          <Button onClick={() => onNavigate('landing')}>Go to Home</Button>
        </Card>
      </div>
    );
  }

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      toast.success('Payment successful!');
      
      // Redirect after showing success
      setTimeout(() => {
        if (paymentData.type === 'product') {
          onNavigate('order-status');
        } else {
          onNavigate('profile');
        }
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    const co2Offset = paymentData.type === 'credits' 
      ? (paymentData.creditsAmount || 0) 
      : paymentData.items.length * 1.5;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Transaction Successful! 🎉</h1>
          <p className="text-muted-foreground mb-8">
            {paymentData.type === 'credits' 
              ? `You've successfully purchased ${paymentData.creditsAmount} carbon credits from ${paymentData.ngoName}.`
              : `Your order has been confirmed. Thank you for shopping sustainably!`
            }
          </p>
          
          <Card className="p-6 bg-green-50 border-green-200 mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Leaf className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-xl">You've offset {co2Offset} tons of CO₂!</h3>
                <p className="text-sm text-muted-foreground">
                  Equivalent to planting {Math.round(co2Offset * 10)} trees
                </p>
              </div>
            </div>
          </Card>

          {paymentData.type === 'credits' && (
            <Card className="p-6 border-blue-200 bg-blue-50 mb-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Carbon Offset Certificate Available</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your certificate is ready for download. Use it for ESG reporting and sustainability disclosures.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Certificate
                  </Button>
                </div>
              </div>
            </Card>
          )}

          <div className="flex gap-3 justify-center">
            <Button onClick={() => onNavigate('landing')} variant="outline">
              Back to Home
            </Button>
            {paymentData.type === 'product' ? (
              <Button onClick={() => onNavigate('order-status')} className="bg-green-600 hover:bg-green-700 text-white">
                Track Order
              </Button>
            ) : (
              <Button onClick={() => onNavigate('profile')} className="bg-green-600 hover:bg-green-700 text-white">
                View Profile
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate(paymentData.type === 'credits' ? 'company' : 'shop')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Complete Your Payment</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <Card className="p-6 mb-6">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {paymentData.type === 'credits' ? (
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{paymentData.creditsAmount} Carbon Credits</p>
                      <p className="text-sm text-muted-foreground">from {paymentData.ngoName}</p>
                    </div>
                    <span className="font-semibold">₹{paymentData.total}</span>
                  </div>
                ) : (
                  paymentData.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))
                )}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{paymentData.total}</span>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Environmental Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    {paymentData.type === 'credits' 
                      ? `This purchase will offset ${paymentData.creditsAmount} tons of CO₂ emissions.`
                      : 'Your purchase supports sustainable practices and reduces environmental impact.'
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Payment Form */}
          <div>
            <Card className="p-6">
              <h2 className="font-semibold text-lg mb-6">Payment Method</h2>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex-1 cursor-pointer flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    <span>UPI</span>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <span>Credit / Debit Card</span>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Label htmlFor="wallet" className="flex-1 cursor-pointer flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-orange-600" />
                    <span>Digital Wallet</span>
                  </Label>
                </div>
              </RadioGroup>

              {/* Payment Fields */}
              <div className="space-y-4">
                {paymentMethod === 'upi' && (
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input 
                      id="upiId" 
                      placeholder="yourname@upi"
                      className="font-mono"
                    />
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456"
                        className="font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY"
                          className="font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123"
                          type="password"
                          maxLength={3}
                          className="font-mono"
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === 'wallet' && (
                  <div className="space-y-2">
                    <Label htmlFor="walletPhone">Phone Number</Label>
                    <Input 
                      id="walletPhone" 
                      placeholder="10-digit mobile number"
                      type="tel"
                      className="font-mono"
                    />
                  </div>
                )}
              </div>

              <Button 
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  `Pay ₹${paymentData.total}`
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Your payment is secure and encrypted
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
