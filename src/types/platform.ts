import { StageItem, EcosystemPillar, CareerPathOption, RevenueStream, PhasePlan } from './soch';

export type UserRole = 'guest' | 'talent' | 'client' | 'admin' | 'mentor';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'talent' | 'client' | 'admin' | 'mentor';
  avatar: string;
  title?: string;
  city?: string;
  province?: string;
  phone?: string;
  joinedDate: string;
  status: 'verified' | 'in_review' | 'pending_assessment' | 'active';
  // Talent specific
  talentDetails?: TalentProfileDetails;
  // Client specific
  clientDetails?: ClientProfileDetails;
}

export interface TalentProfileDetails {
  passionStory: string;
  skills: string[];
  track: string;
  level: 'Novice' | 'Apprentice' | 'Market-Ready' | 'Certified Pro' | 'Mentor Lead';
  assessmentScore: number;
  videoInterviewStatus: 'not_submitted' | 'processing' | 'reviewed' | 'passed';
  videoInterviewUrl?: string;
  aiVideoFeedback?: {
    confidence: number;
    clarity: number;
    technicalDepth: number;
    englishProficiency: number;
    feedbackSummary: string;
    strengths: string[];
    mistakesToAvoid: string[];
  };
  testScores: SkillTestResult[];
  roadmapMilestones: RoadmapMilestone[];
  earningsPkr: number;
  completedTasksCount: number;
  mentorAssigned?: {
    id: string;
    name: string;
    category: string;
    avatar: string;
  };
}

export interface SkillTestResult {
  id: string;
  testName: string;
  category: string;
  score: number;
  passed: boolean;
  date: string;
  mistakes: string[];
  recommendations: string[];
}

export interface RoadmapMilestone {
  id: string;
  phaseNumber: number;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'locked';
  progressPercent: number;
  deliverables: string[];
  grade?: string;
}

export interface ClientProfileDetails {
  companyName: string;
  industry: string;
  companySize: string;
  website?: string;
  escrowBalanceUsd: number;
  activeProjectsCount: number;
  totalHires: number;
  hiringPreference: 'Individual Specialist' | 'Managed Multi-Disciplinary Pod' | 'Enterprise Staffing';
}

export interface MentorProfile {
  id: string;
  name: string;
  category: 'Software Engineering' | 'UI/UX & Product Design' | 'AI & Machine Learning' | 'Digital Marketing & Growth' | 'DevOps & Cloud' | 'Content & Creative';
  title: string;
  experienceYears: number;
  company: string;
  rating: number;
  reviewsCount: number;
  studentsMentored: number;
  avatar: string;
  bio: string;
  skills: string[];
  hourlyRatePkr: number;
  availability: 'Available Today' | 'Limited Slots' | 'Booked This Week';
  badges: string[];
  linkedInUrl?: string;
}

export interface AssignedTask {
  id: string;
  title: string;
  projectName: string;
  // Handled by SOCH: Talent knows it is a SOCH Managed Milestone, client identity is mediated
  sochDeliveryPod: string;
  deadline: string;
  status: 'Assigned' | 'In Progress' | 'Under Mentor QA' | 'Approved & Paid';
  rewardPkr: number;
  priority: 'High' | 'Medium' | 'Critical';
  progress: number;
  milestoneDescription: string;
  assignedRole: string;
  qaLead: string;
  deliverableLinks: string[];
}

export interface ClientProject {
  id: string;
  title: string;
  clientName: string;
  budgetUsd: number;
  budgetPkr: number;
  teamType: 'Solo Pro' | 'Managed Team Pod (Dev + Design + QA + AI Agent)' | 'Enterprise Cohort';
  status: 'Drafting' | 'AI Matching' | 'In Execution' | 'Completed';
  category: string;
  postedDate: string;
  deadline: string;
  matchedTalentCount: number;
  sochAccountManager: string;
  assignedTeam: {
    role: string;
    talentName: string;
    avatar: string;
    status: string;
  }[];
}

// Communication & Video Call Types
export interface ChatMessage {
  id: string;
  channelId: string;
  senderId: string;
  senderName: string;
  senderRole: 'soch_admin' | 'talent' | 'client' | 'mentor';
  senderAvatar: string;
  text: string;
  timestamp: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  attachments?: { name: string; url: string; size: string }[];
}

export interface ChatChannel {
  id: string;
  type: 'client_to_soch' | 'talent_to_soch' | 'talent_to_mentor';
  title: string;
  participantRole: 'client' | 'talent' | 'mentor';
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  contextTag: string; // e.g. "Project #801 Milestone" or "Weekly Code QA Review"
  projectDetails?: {
    name: string;
    budget: string;
    status: string;
    sochLead: string;
  };
}

export interface VideoCallSession {
  id: string;
  title: string;
  callType: 'soch_with_client' | 'soch_with_talent' | 'mentor_qa_session';
  hostName: string;
  hostRole: string;
  remoteParticipantName: string;
  remoteParticipantRole: string;
  remoteParticipantAvatar: string;
  remoteParticipantStatus: 'Connected' | 'Ringing' | 'Muted';
  sessionTopic: string;
  durationSeconds: number;
  meetingAgenda?: string[];
  screenShareType?: 'figma' | 'code' | 'kanban';
}
