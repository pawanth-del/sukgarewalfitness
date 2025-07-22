import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Check, Copy, Lock, ArrowLeft, Banknote } from 'lucide-react';
import { plans } from '../data/plans';
import toast from 'react-hot-toast';

const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const planId = searchParams.get('plan');
  const selectedPlan = plans.find((plan) => plan.id === planId);

  useEffect(() => {
    if (!selectedPlan) {
      toast.error('Please select a plan first');
      navigate('/plans');
    }
  }, [selectedPlan, navigate]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  if (!selectedPlan) return null;

  return (
    <div className="min-h-screen bg-[#1a2a24] pt-16 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/plans')}
          className="flex items-center text-gray-300 hover:text-white mb-10 transition"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Plans
        </button>

        <div className="bg-[#21332a] rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Transfer Membership Fee
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Please transfer the payment via your mobile banking app using the
            following bank details.
          </p>

          <div className="space-y-6">
            <DetailRow label="Account Holder" value="Sukhpreet Singh" onCopy={handleCopy} />
            <DetailRow label="BSB" value="063097" onCopy={handleCopy} />
            <DetailRow label="Account Number" value="79977733" onCopy={handleCopy} />
            <DetailRow
              label="Amount"
              value={`$${selectedPlan.price} (${selectedPlan.name})`}
              onCopy={handleCopy}
            />
          </div>

          <div className="mt-8 p-4 bg-[#2b3a33] rounded-lg flex items-center text-green-400">
            <Lock className="h-5 w-5 mr-2" />
            Secure manual bank transaction
          </div>

          <div className="mt-8 text-center">
            <Banknote className="mx-auto h-10 w-10 text-[#d98e38] mb-4" />
            <p className="text-gray-300 mb-2">
              After completing the transfer, please allow a few minutes for
              confirmation.
            </p>
            <p className="text-sm text-gray-500">
              You can close this page or return to the homepage.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-[#d98e38] text-black py-3 rounded-lg font-semibold hover:bg-[#b87528] transition-all duration-300 hover:scale-105"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable detail display with copy-to-clipboard
interface DetailProps {
  label: string;
  value: string;
  onCopy: (v: string) => void;
}

const DetailRow: React.FC<DetailProps> = ({ label, value, onCopy }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#2b3a33] p-4 rounded-lg text-white hover:ring-1 hover:ring-[#d98e38] transition-all">
    <div>
      <p className="text-sm text-gray-400 uppercase mb-1">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
    <button
      onClick={() => onCopy(value)}
      className="mt-2 sm:mt-0 flex items-center text-[#d98e38] hover:text-white transition"
    >
      <Copy className="h-4 w-4 mr-1" />
      <span className="text-sm">Copy</span>
    </button>
  </div>
);

export default Payment;
