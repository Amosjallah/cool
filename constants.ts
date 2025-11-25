import { ServiceItem, FeatureItem } from './types';

export const COMPANY_NAME = "Cool Job Services";
export const TAGLINE = "Professional Cleaning • Reliable Team • Quality You Can Trust";
export const PHONE_NUMBER = "+233 59 332 2428";
export const EMAIL = "contact@cooljobservices.com"; // Placeholder based on prompt instructions
export const LOCATION = "Accra, Ghana";

export const SERVICES: ServiceItem[] = [
  {
    id: 'home',
    title: 'Home Cleaning',
    description: 'General cleaning, kitchen, bathrooms, bedrooms, living spaces, and after-party cleanup.',
    icon: '🏠'
  },
  {
    id: 'office',
    title: 'Office & Commercial',
    description: 'Daily or weekly maintenance, office sanitizing, and workspace organization.',
    icon: '🏢'
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning for homes, offices, warehouses, and newly built properties.',
    icon: '✨'
  },
  {
    id: 'move',
    title: 'Move-In / Move-Out',
    description: 'Perfect for tenants, landlords, and real estate agents requiring spotless turnover.',
    icon: '📦'
  },
  {
    id: 'school',
    title: 'School & Campus',
    description: 'Cleaning for classrooms, hostels, washrooms, lecture halls, and admin blocks.',
    icon: '🎓'
  },
  {
    id: 'industrial',
    title: 'Industrial & Warehouse',
    description: 'Dust removal, floor scrubbing, and heavy-duty equipment-area cleaning.',
    icon: '🏭'
  }
];

export const FEATURES: FeatureItem[] = [
  { id: '1', title: 'Professional Staff', description: 'Well-trained, uniformed, and vetted cleaning professionals.' },
  { id: '2', title: 'Transparent Pricing', description: 'Affordable rates with no hidden fees.' },
  { id: '3', title: 'Fast Response', description: 'Reliable service when you need it most.' },
  { id: '4', title: 'Quality Control', description: 'Supervised teams ensuring a spotless finish.' },
  { id: '5', title: 'Eco-Friendly', description: 'Safe cleaning materials for your health and environment.' },
  { id: '6', title: 'Flexible Schedule', description: 'We work around your timeline.' },
];

export const SYSTEM_INSTRUCTION = `You are the friendly, professional AI assistant for Cool Job Services, a cleaning company in Accra, Ghana.
Your name is "CoolBot".
Your goal is to assist potential customers by explaining our services and encouraging them to book a cleaning via the website form.

Key Information to know:
- We serve homes, offices, schools, churches, warehouses across Ghana.
- Services: Home Cleaning, Office/Commercial, Deep Cleaning, Move-in/Move-out, School/Campus, Industrial/Warehouse.
- Tone: Professional, polite, enthusiastic, and helpful.
- If asked about prices, politely explain that prices depend on the size of the space and specific needs, and encourage them to fill out the booking form or call ${PHONE_NUMBER} for a free quote.
- Do not make up specific prices.
- Emphasize our reliability, training, and eco-friendly materials.
`;
