export interface StudioService {
  id: string;
  title: string;
  category: 'massoterapia' | 'fisioterapia' | 'pilates' | 'terapias-combinadas';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  indications: string[];
  durationMinutes: number;
  featured?: boolean;
  highlightTag?: string;
  iconName: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role?: string;
  avatarInitials: string;
  avatarBgColor: string;
  rating: number;
  timeAgo: string;
  comment: string;
  highlightPhrase?: string;
  verifiedLocalGuide?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'agendamento' | 'procedimentos' | 'parcerias';
}

export interface BookingPreference {
  serviceId: string;
  fullName: string;
  phone: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite' | 'flexivel';
  mainGoal: string;
  hasWellhub: boolean;
  notes: string;
}
