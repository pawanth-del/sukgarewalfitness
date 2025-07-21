import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { plans } from '../data/plans';

const Plans: React.FC = () => {
  const selectedPlan = plans.find((plan) => plan.id === 'premium'); // You can change to 'basic' or 'elite'

  if (!selectedPlan) return null;

  return (
    <div className="min-h-screen bg-[#1a2a24] pt-20 px-4 text-white">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Membership <span className="text-[#d98e38]">Plan</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join our most popular plan and take your fitness journey to the next level with top-tier benefits and expert support.
        </p>
      </section>

      {/* Single Centered Plan Card */}
      <section className="flex justify-center items-center">
        <div
          className={`relative w-full max-w-md bg-[#21332a] rounded-2xl p-8 transition-all duration-300 ring-2 ring-[#d98e38]`}
        >
          {selectedPlan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#d98e38] text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{selectedPlan.name}</h3>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-[#d98e38]">${selectedPlan.price}</span>
              <span className="text-gray-400 ml-2">/{selectedPlan.duration}</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to={`/payment?plan=${selectedPlan.id}`}
            className="block w-full py-3 px-6 text-center font-semibold rounded-lg bg-[#d98e38] text-black hover:bg-[#b87528] transition-all duration-300 hover:scale-105"
          >
            Choose {selectedPlan.name}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Plans;
