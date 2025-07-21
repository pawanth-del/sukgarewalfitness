import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: 'https://facebook.com/fitzone',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/fitzone',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: 'https://twitter.com/fitzone',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-5 w-5" />,
      url: 'https://youtube.com/fitzone',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Membership Plans', href: '/plans' },
    { name: 'Sign In', href: '/auth' }
  ];

  const services = [
    'Personal Training',
    'Group Classes',
    'Nutrition Counseling',
    'Fitness Assessment',
    'Recovery Therapy',
    'Sauna & Spa'
  ];

  return (
    <footer className="bg-[#1a2a24] border-t border-[#2b3a33]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-[#d98e38]" />
              <span className="text-2xl font-bold text-white">SukhGarewalFitness</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your body and mind with our world-class facilities, 
              expert trainers, and supportive community. Your fitness journey starts here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#d98e38] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d98e38] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Fitness Street<br />
                  Gym City, GC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#d98e38] flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#d98e38] flex-shrink-0" />
                <span className="text-gray-300">info@fitzone.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#d98e38] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 5:00 AM - 11:00 PM</div>
                  <div>Sat-Sun: 6:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2b3a33] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} FitZone. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#d98e38] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d98e38] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d98e38] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
