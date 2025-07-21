import { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 'premium',
    name: 'Premium',
    price: 399,
    duration: 'Life Time',
    popular: true,
    features: [
      'All Basic features',
      'Group fitness classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Sauna access',
      'Guest passes (2/month)'
    ]
  }
];
