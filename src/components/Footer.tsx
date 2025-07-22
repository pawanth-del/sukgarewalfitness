import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: 'https://facebook.com/fitzone',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/fitzone',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: 'https://twitter.com/fitzone',
      color: 'hover:text-sky-400',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-5 w-5" />,
      url: 'https://youtube.com/fitzone',
      color: 'hover:text-red-500',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Membership Plans', href: '/plans' },
  ];

  const services = [
    'Personal Trainer Consultation',
    'Nutrition Guidance & Meal Plans',
    'Custom Fat Loss Programs',
    'Personalised Workout Plans',
    'Online Coaching & Support',
    'WhatsApp Daily Check-ins',
  ];

  return (
    <footer className="bg-[#1a2a24] border-t border-[#2b3a33] pt-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-[#d98e38]" />
              <span className="text-2xl font-bold text-white">SukhSinghFitnessClub</span>
            </div>
            <p className="text-sm leading-relaxed">
              Transform your body and mind with our expert coaching, customised plans, and a
              motivating fitness ecosystem.
            </p>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-[#d98e38] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d98e38] flex-shrink-0 mt-0.5" />
                <span>
                  55 Gard Rd,
                  <br />
                  Mount Cottrell, VIC 3024,<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#d98e38]" />
                <span>+61 447 361 547</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#d98e38]" />
                <span>info@fitzone.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#d98e38] mt-0.5" />
                <div>
                  Mon–Fri <br />
                  <span className="text-[#99ff99]">Available 24/7 for Clients</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#2b3a33] pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <div>© {currentYear} SukhSinghFitnessClub. All rights reserved.</div>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#d98e38] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#d98e38] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#d98e38] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
