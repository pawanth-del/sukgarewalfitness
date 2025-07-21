import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, Check } from 'lucide-react';
import { plans } from '../data/plans';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const planId = searchParams.get('plan');
  const selectedPlan = plans.find(plan => plan.id === planId);

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (!user) {
      toast.error('Please sign in to continue with payment');
      navigate('/auth');
      return;
    }

    if (!selectedPlan) {
      toast.error('Please select a plan first');
      navigate('/plans');
      return;
    }
  }, [user, selectedPlan, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formatted.length <= 19) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formatted.length <= 5) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '');
      if (formatted.length <= 4) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Processing payment for:', {
        plan: selectedPlan,
        user: user?.email,
        amount: selectedPlan?.price,
      });

      setPaymentSuccess(true);
      toast.success('Payment successful! Welcome to FitZone!');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!selectedPlan) return null;

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-[#1a2a24] pt-16 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-[#21332a] rounded-2xl text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-300 mb-6">
            Welcome to FitZone! Your {selectedPlan.name} membership is now active.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#d98e38] text-black py-3 rounded-lg font-semibold hover:bg-[#b87528] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a2a24] pt-16 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/plans')}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Plans
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-[#21332a] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="border border-[#2b3a33] rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{selectedPlan.name} Plan</h3>
                {selectedPlan.popular && (
                  <span className="bg-[#d98e38] text-black px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                )}
              </div>

              <ul className="space-y-2 mb-4">
                {selectedPlan.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {selectedPlan.features.length > 3 && (
                  <li className="text-gray-400 text-sm">
                    +{selectedPlan.features.length - 3} more features
                  </li>
                )}
              </ul>

              <div className="border-t border-[#2b3a33] pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">Monthly Fee</span>
                  <span className="text-2xl font-bold text-[#d98e38]">
                    ${selectedPlan.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#2b3a33] rounded-lg p-4">
              <div className="flex items-center text-green-400 mb-2">
                <Lock className="h-4 w-4 mr-2" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your payment information is encrypted and secure. 
                Cancel anytime with 30 days notice.
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-[#21332a] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-3 bg-[#2b3a33] border border-[#2b3a33] rounded-lg text-white cursor-not-allowed opacity-50"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2b3a33] border border-[#2b3a33] rounded-lg text-white focus:border-[#d98e38] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 bg-[#2b3a33] border border-[#2b3a33] rounded-lg text-white focus:border-[#d98e38] focus:outline-none transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2b3a33] border border-[#2b3a33] rounded-lg text-white focus:border-[#d98e38] focus:outline-none transition-colors"
                    placeholder="MM/YY"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2b3a33] border border-[#2b3a33] rounded-lg text-white focus:border-[#d98e38] focus:outline-none transition-colors"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d98e38] text-black py-4 rounded-lg font-semibold hover:bg-[#b87528] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                {loading ? 'Processing...' : `Pay $${selectedPlan.price}/month`}
              </button>

              <p className="text-gray-300 text-sm text-center">
                By completing this purchase, you agree to our Terms of Service 
                and understand that your membership will automatically renew monthly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
