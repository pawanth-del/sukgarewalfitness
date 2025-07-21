export interface Plan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  created_at: string;
}