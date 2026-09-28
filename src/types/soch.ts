export interface StageItem {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  bgLight: string;
  borderColor: string;
  textColor: string;
  iconName: string;
  description: string;
  keyOutputs: string[];
  pdfReference: string;
  mockupType: 'profile' | 'learning' | 'portfolio' | 'projects' | 'earning' | 'upskill' | 'mentor' | 'business';
}

export interface EcosystemPillar {
  id: string;
  name: string;
  action: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  iconName: string;
  description: string;
  roleInNetwork: string;
}

export interface CareerPathOption {
  title: string;
  matchScore: number;
  rationale: string;
  primarySkills: string[];
  entrySalary: string;
  globalDemand: string;
}

export interface RevenueStream {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  percentageOrModel: string;
}

export interface PhasePlan {
  phase: number;
  title: string;
  subtitle: string;
  badge: string;
  domains: {
    category: string;
    skills: string[];
  }[];
}
