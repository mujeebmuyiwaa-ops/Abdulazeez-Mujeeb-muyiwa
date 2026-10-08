import { Program, PricingPlan, Testimonial, ScheduleItem } from '../types/gym';
import heroImg from '../assets/images/hero_gym_training_1791464144726.jpg';
import equipImg from '../assets/images/facility_equipment_1791464158040.jpg';
import coachImg from '../assets/images/trainer_coaching_1791464170160.jpg';
import turfImg from '../assets/images/group_functional_turf_1791464182209.jpg';

export const GYM_INFO = {
  name: 'IronCore Gym',
  tagline: 'Built for Real Strength. Designed for Real People.',
  phone: '(555) 742-8920',
  phoneRaw: '+15557428920',
  email: 'hello@ironcoregym.com',
  address: '412 Market Street, Suite B',
  neighborhood: 'Downtown West (Corner of 4th & Market)',
  cityStateZip: 'Downtown West, CA 94105',
  parking: 'Free 2-hour validated member parking in rear lot (Elm Alley entrance)',
  transit: '2-minute walk from West Metro Station (Lines A & B)',
  hours: {
    weekdays: '5:00 AM – 11:00 PM',
    weekends: '7:00 AM – 8:00 PM',
    keycard: '24/7 keycard access for All-Access members',
  },
  stats: {
    rating: 4.9,
    reviewCount: 184,
    powerRacks: 8,
    dumbbellsMax: '130 lbs',
    turfLength: '60 ft',
    memberCap: 'Never overcrowded guarantee',
  },
  images: {
    hero: heroImg,
    equipment: equipImg,
    coaching: coachImg,
    turf: turfImg,
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'open-gym',
    number: '01',
    title: 'Open Strength & Free Weights',
    shortDesc: 'Pure barbell and dumbbell training without crowds or broken equipment.',
    fullDesc: '8 Olympic power racks, Eleiko competition barbells, calibrated cast plates, and urethane dumbbells from 5 to 130 lbs. We maintain our gear daily, chalk is provided, and you will never wait 20 minutes for a squat rack.',
    image: equipImg,
    tags: ['Self-Paced', 'Heavy Lifting', 'Powerlifting Friendly'],
    schedule: 'Available all open hours (24/7 keycard eligible)',
    coach: 'Floor Coaches on Duty 6 AM – 9 PM',
    idealFor: 'Anyone who wants to train without gym bureaucracy, machine line-ups, or gimmicks.',
    features: [
      '8 dedicated power racks with deadlift platforms',
      'Full urethane dumbbell array from 5 to 130 lbs',
      'Cable stations, calibrated bumper plates & micro-weights',
      'Free liquid chalk & belt loaners at reception'
    ]
  },
  {
    id: 'personal-coaching',
    number: '02',
    title: '1-on-1 Personal Coaching',
    shortDesc: 'Custom programming and attentive biomechanical technique guidance.',
    fullDesc: 'Work with a certified strength specialist who listens to your injury history, builds a sustainable progression model, and checks your lifting form in real time. No generic clipboard workouts.',
    image: coachImg,
    tags: ['Tailored Plan', 'Injury Prevention', 'Beginner to Advanced'],
    schedule: 'Flexible 60-min sessions by appointment',
    coach: 'Dedicated Certified CSCS / NASM Trainer',
    idealFor: 'Beginners seeking confidence, or lifters overcoming plateaus and nagging joint issues.',
    features: [
      'In-depth movement screening & posture assessment',
      'Custom app-tracked strength & progressive overload plan',
      'Nutritional intake & protein target framework',
      'Direct WhatsApp/SMS messaging with your coach between sessions'
    ]
  },
  {
    id: 'functional-conditioning',
    number: '03',
    title: 'Small Group Strength & Conditioning',
    shortDesc: 'High-energy 45-minute coached sessions with maximum 8 people per group.',
    fullDesc: 'Get the accountability of personal training with the camaraderie of a team. Push heavy sleds, swing kettlebells, build cardiovascular grit, and lift with proper coach oversight on our 60-foot turf.',
    image: turfImg,
    tags: ['Capped at 8', 'High Energy', 'Metabolic Fitness'],
    schedule: 'Mon–Fri: 6 AM, 7 AM, 12 PM, 5:30 PM, 6:30 PM | Sat: 9 AM',
    coach: 'Head Coach Marcus & Coach Sarah',
    idealFor: 'Men and women who want to torch body fat, build athletic endurance, and stay accountable.',
    features: [
      'Strict 8-member cap so the coach can watch every single rep',
      '60-ft indoor turf lane with weighted prowler sleds',
      'Kettlebells, battle ropes, rowers, and assault bikes',
      'Scaleable for all fitness levels from day 1'
    ]
  },
  {
    id: 'beginner-kickstart',
    number: '04',
    title: 'Beginner Lifting Kickstart (3 Weeks)',
    shortDesc: 'A zero-intimidation ramp-up program to master gym basics with total confidence.',
    fullDesc: 'Never stepped foot in a weight room? This structured 3-week program pairs you with a patient coach to master the 4 core barbell movements: squat, hinge, push, and pull. By week 3, you own the weight room.',
    image: heroImg,
    tags: ['Zero Ego', 'Beginners Only', 'Form Mastery'],
    schedule: 'Starts 1st & 3rd Monday of every month',
    coach: 'Senior Coach Sarah Jenkins',
    idealFor: 'First-time gym goers, people returning after long breaks, or desk workers wanting to start right.',
    features: [
      'Step-by-step barbell & dumbbell mechanics breakdown',
      'Safe lifting etiquette, loading, and rack setup guide',
      'Custom starter workout logbook with warmup routines',
      'Includes 1 free 1-on-1 check-in at week 3'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Standard Membership',
    monthlyPrice: 59,
    annualPriceMonthly: 49,
    description: 'Perfect for independent lifters seeking an uncrowded, pristine gym floor.',
    features: [
      'Full open gym access during staffed hours (5 AM – 11 PM)',
      'Free 1-on-1 coach introduction & equipment walkthrough',
      'Locker rooms with private showers & towel service',
      'Free 2-hour validated member parking',
      'No contract: cancel any time with 14-day notice'
    ],
    notIncluded: [
      '24/7 keycard access after hours',
      'Small group coached classes'
    ],
    ctaText: 'Start with 1 Free Session'
  },
  {
    id: 'all-access',
    name: 'All-Access + Classes',
    monthlyPrice: 99,
    annualPriceMonthly: 79,
    popular: true,
    description: 'Our most popular plan. 24/7 keycard freedom plus unlimited small group conditioning.',
    features: [
      '24/7 keycard access (train early, late, or holidays)',
      'Unlimited Small Group Strength & Conditioning sessions',
      'Monthly InBody body composition scan & progress report',
      '2 free guest day passes per month for friends',
      'Free 2-hour validated member parking',
      '14-day 100% money-back guarantee'
    ],
    ctaText: 'Claim Free Class Pass'
  },
  {
    id: 'coaching-tier',
    name: 'Coached Performance',
    monthlyPrice: 199,
    annualPriceMonthly: 169,
    description: 'Complete hands-on accountability with 4 monthly 1-on-1 personal training sessions.',
    features: [
      'Everything in All-Access + 24/7 keycard entry',
      '4 one-on-one 60-min personal coaching sessions / month',
      'Custom monthly progressive strength programming',
      'Direct coach messaging via WhatsApp / SMS',
      'Quarterly movement & posture re-evaluation',
      'Priority booking window for peak time slots'
    ],
    ctaText: 'Book Free Assessment'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Vance',
    neighborhood: 'Downtown West Resident',
    role: 'Software Engineer, Age 34',
    rating: 5,
    quote: 'I spent 4 years paying for a corporate chain gym I rarely visited because it was packed and unwelcoming. IronCore completely changed that. The equipment is always free, the coaches actually correct your form, and I am lifting heavier than I did in college.',
    highlightMetric: 'Lost 24 lbs & Deadlifted 315 lbs in 6 Months',
    timeframe: 'Member for 8 months'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    neighborhood: 'Oak Park District',
    role: 'Local Business Owner, Age 29',
    rating: 5,
    quote: 'As a woman stepping into a free weight room for the first time, I was terrified of being judged. The coaches at IronCore showed me zero condescension and endless patience. It is clean, respectful, and the best community in the city.',
    highlightMetric: 'Eliminated Desk Back Pain & Built Habit',
    timeframe: 'Member for 1 year'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    neighborhood: 'Market Street Lofts',
    role: 'Architect, Age 42',
    rating: 5,
    quote: 'Being able to walk into the gym at 6:30 PM on a Tuesday and immediately grab a clean squat rack without four teenagers hogging it is worth every penny. You can tell the owners take pride in this place.',
    highlightMetric: '+40% Bench & Squat Strength Increase',
    timeframe: 'Member for 14 months'
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: 'm1', day: 'Mon', time: '06:00 AM – 06:45 AM', title: 'Early Riser Strength & Barbell', coach: 'Coach Marcus', spotsLeft: 2, level: 'All Levels' },
  { id: 'm2', day: 'Mon', time: '07:15 AM – 08:00 AM', title: 'Metabolic Turf Conditioning', coach: 'Coach Sarah', spotsLeft: 3, level: 'All Levels' },
  { id: 'm3', day: 'Mon', time: '12:00 PM – 12:45 PM', title: 'Lunch Express Functional Circuit', coach: 'Coach Sarah', spotsLeft: 1, level: 'Beginner Friendly' },
  { id: 'm4', day: 'Mon', time: '05:30 PM – 06:15 PM', title: 'Power, Squat & Pull Workshop', coach: 'Coach Marcus', spotsLeft: 0, level: 'Intermediate / Advanced' },
  { id: 'm5', day: 'Mon', time: '06:30 PM – 07:15 PM', title: 'Functional Sled & Core Blast', coach: 'Coach Dave', spotsLeft: 4, level: 'All Levels' },

  { id: 't1', day: 'Tue', time: '06:30 AM – 07:15 AM', title: 'Upper Body Hypertrophy & Arms', coach: 'Coach Dave', spotsLeft: 3, level: 'All Levels' },
  { id: 't2', day: 'Tue', time: '12:00 PM – 12:45 PM', title: 'Mobility & Joint Resiliency', coach: 'Coach Sarah', spotsLeft: 5, level: 'Beginner Friendly' },
  { id: 't3', day: 'Tue', time: '05:30 PM – 06:15 PM', title: 'Kettlebell Grit & Conditioning', coach: 'Coach Sarah', spotsLeft: 2, level: 'All Levels' },
  { id: 't4', day: 'Tue', time: '06:30 PM – 07:15 PM', title: 'Beginner Barbell Form Foundations', coach: 'Coach Marcus', spotsLeft: 2, level: 'Beginner Friendly' },

  { id: 'w1', day: 'Wed', time: '06:00 AM – 06:45 AM', title: 'Deadlift & Posterior Chain', coach: 'Coach Marcus', spotsLeft: 1, level: 'All Levels' },
  { id: 'w2', day: 'Wed', time: '07:15 AM – 08:00 AM', title: 'Metabolic Turf Conditioning', coach: 'Coach Sarah', spotsLeft: 4, level: 'All Levels' },
  { id: 'w3', day: 'Wed', time: '05:30 PM – 06:15 PM', title: 'Full Body Barbell Overload', coach: 'Coach Dave', spotsLeft: 2, level: 'All Levels' },
  { id: 'w4', day: 'Wed', time: '06:30 PM – 07:15 PM', title: 'Prowler Sled & HIIT Sprint', coach: 'Coach Marcus', spotsLeft: 3, level: 'All Levels' },

  { id: 'th1', day: 'Thu', time: '06:30 AM – 07:15 AM', title: 'Overhead Press & Core Rig', coach: 'Coach Dave', spotsLeft: 3, level: 'All Levels' },
  { id: 'th2', day: 'Thu', time: '12:00 PM – 12:45 PM', title: 'Lunch Express Functional Circuit', coach: 'Coach Sarah', spotsLeft: 2, level: 'Beginner Friendly' },
  { id: 'th3', day: 'Thu', time: '05:30 PM – 06:15 PM', title: 'Athletic Conditioning & Agility', coach: 'Coach Marcus', spotsLeft: 3, level: 'All Levels' },

  { id: 'f1', day: 'Fri', time: '06:00 AM – 06:45 AM', title: 'Friday Heavy Compound Lifts', coach: 'Coach Marcus', spotsLeft: 2, level: 'All Levels' },
  { id: 'f2', day: 'Fri', time: '12:00 PM – 12:45 PM', title: 'Turf Finisher & Core', coach: 'Coach Dave', spotsLeft: 4, level: 'All Levels' },
  { id: 'f3', day: 'Fri', time: '05:30 PM – 06:15 PM', title: 'Weekend Warmup Conditioning', coach: 'Coach Sarah', spotsLeft: 1, level: 'All Levels' },

  { id: 'sa1', day: 'Sat', time: '08:30 AM – 09:30 AM', title: 'Community Saturday Team Turf Challenge', coach: 'Marcus & Sarah', spotsLeft: 5, level: 'All Levels' },
  { id: 'sa2', day: 'Sat', time: '10:00 AM – 11:00 AM', title: 'Open Coaching Clinic: Squat & Bench', coach: 'Coach Marcus', spotsLeft: 3, level: 'Beginner Friendly' },

  { id: 'su1', day: 'Sun', time: '09:00 AM – 10:00 AM', title: 'Sunday Recovery, Floss & Mobility', coach: 'Coach Sarah', spotsLeft: 6, level: 'Beginner Friendly' }
];

export const FAQS = [
  {
    q: 'I’ve never lifted weights before. Will I feel out of place?',
    a: 'Not at all. Over 40% of our new members have never held a barbell before coming to IronCore. Our staff introduces you to equipment during your free first session, explains how to adjust benches, demonstrates proper posture, and stays nearby to ensure you feel secure and confident.'
  },
  {
    q: 'How does the free session actually work? Is there any high-pressure sales pitch?',
    a: 'Zero sales pitch. When you claim your free session, you receive a digital pass with a barcode. You can drop in during staffed hours, meet one of our coaches, take a guided tour, and do a full workout on your own or with a coach’s input. If you like it, you can sign up online or at the desk; if not, you owe us nothing.'
  },
  {
    q: 'Are there really no long-term contracts or hidden cancellation fees?',
    a: 'None. We charge month-to-month. There are no annual maintenance surcharges, no initiation penalties, and you can cancel anytime simply by sending an email or speaking to us at the front desk with 14 days’ notice before your next billing cycle.'
  },
  {
    q: 'Where do I park when I visit?',
    a: 'We have a dedicated private rear parking lot with 35 spots accessible via Elm Alley (just behind 412 Market St). Every member and trial visitor receives free 2-hour parking validation at our front desk iPad.'
  },
  {
    q: 'How crowded does the gym get during peak hours (5:00 PM – 7:30 PM)?',
    a: 'Unlike big box gym chains that sell 5,000 memberships for a 200-person capacity gym, we strictly cap our active memberships. Even during peak weekday evenings, our floor has a strict limit and we have 8 full power racks plus redundant dumbbell sets, so you will never spend half your workout waiting.'
  },
  {
    q: 'Can I freeze my membership if I go on vacation or get injured?',
    a: 'Yes! Members can pause their membership for up to 60 days per year at zero charge. Just let us know a week in advance and we will freeze your billing dates.'
  }
];
