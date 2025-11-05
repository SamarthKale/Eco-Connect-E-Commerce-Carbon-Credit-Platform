import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { Leaf, ArrowLeft, Shield, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface OTPPageProps {
  onVerify: () => void;
  onBack: () => void;
  type: 'login' | 'checkout';
  email?: string;
  phone?: string;
}

export function OTPPage({ onVerify, onBack, type, email, phone }: OTPPageProps) {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  // Simulate countdown
  useState(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      // For demo, accept any 6-digit code
      toast.success('OTP verified successfully!');
      onVerify();
    }, 1500);
  };

  const handleResendOTP = () => {
    setOtp('');
    setTimeLeft(120);
    toast.success('OTP has been resent!');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="hover:bg-green-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {type === 'login' ? 'Verify Your Login' : 'Secure Your Order'}
          </h2>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to
          </p>
          <p className="font-semibold text-green-600 mt-1">
            {email || phone || 'your registered contact'}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3 text-center">
              Enter OTP Code
            </label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>
              {timeLeft > 0 ? (
                <>Code expires in <span className="font-semibold text-green-600">{formatTime(timeLeft)}</span></>
              ) : (
                <span className="text-red-600 font-semibold">Code expired</span>
              )}
            </span>
          </div>

          <Button
            className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            onClick={handleVerify}
            disabled={otp.length !== 6 || isVerifying}
          >
            {isVerifying ? 'Verifying...' : 'Verify & Continue'}
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Didn't receive the code?
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResendOTP}
              disabled={timeLeft > 0}
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              Resend OTP
            </Button>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900 font-medium mb-1">
                Security Tip
              </p>
              <p className="text-xs text-blue-700">
                Never share your OTP with anyone. EcoConnect will never ask for your OTP via call or email.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
