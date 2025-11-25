export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface BookingFormData {
  name: string;
  phone: string;
  serviceType: string;
  date: string;
  location: string;
  notes: string;
}