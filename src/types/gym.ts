export interface Program {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  schedule: string;
  coach: string;
  idealFor: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  role: string;
  rating: number;
  quote: string;
  highlightMetric: string;
  timeframe: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  title: string;
  coach: string;
  spotsLeft: number;
  level: 'All Levels' | 'Beginner Friendly' | 'Intermediate / Advanced';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredDay: string;
  preferredTime: string;
  experienceLevel: string;
  notes?: string;
}

export interface ConfirmedPass {
  id: string;
  bookingCode: string;
  fullName: string;
  phone: string;
  fitnessGoal: string;
  preferredDay: string;
  preferredTime: string;
  createdAt: string;
}
