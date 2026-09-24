export interface PillarItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  highlight?: string;
  isPopular?: boolean;
}

export interface ServicePillar {
  id: 'private-cloud' | 'public-cloud' | 'managed-services';
  title: string;
  subtitle: string;
  colorScheme: {
    accent: string;
    border: string;
    bgGlow: string;
    badgeBg: string;
    badgeText: string;
  };
  summary: string;
  icon: string;
  items: PillarItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  logoText?: string;
  metric?: string;
  metricLabel?: string;
  category: 'DRaaS' | 'Cloud Migration' | 'Managed Services';
}

export interface Partner {
  name: string;
  tier: string;
  description: string;
  badge?: string;
}

export interface CloudCalculatorState {
  currentEnvironment: 'on-prem' | 'hybrid' | 'multicloud';
  workloadVms: number;
  totalStorageTb: number;
  criticalityLevel: 'standard' | 'high' | 'mission-critical';
  targetRpo: 'instant' | '15min' | '4hours' | '24hours';
  targetRto: '1hour' | '4hours' | '24hours';
  complianceNeeds: string[];
  gccRegion: 'UAE' | 'KSA' | 'Oman' | 'Bahrain' | 'Kuwait';
}
