import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Zap } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your fitness journey'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Join a supportive community of fitness enthusiasts'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock access'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Modern Equipment',
      description: 'State-of-the-art machines and equipment'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2a24] text-white">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1a2a24]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="text-[#d98e38] block">Body & Mind</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join FitZone and unlock your potential with our world-class facilities, 
            expert trainers, and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plans"
              className="inline-flex items-center px-8 py-4 bg-[#d98e38] text-black font-semibold rounded-lg hover:bg-[#b87528] transition-all duration-300 hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1a2a24] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#21332a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose FitZone?
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1a2a24] rounded-lg hover:bg-[#263a30] transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-[#d98e38] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d98e38] to-[#b87528]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of members who have transformed their lives at FitZone
          </p>
          <Link
            to="/plans"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1a2a24] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
          >
            View Membership Plans
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
