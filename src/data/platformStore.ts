import { MentorProfile, AssignedTask, ClientProject, UserProfile, ChatChannel, ChatMessage, VideoCallSession } from '../types/platform';

export const INITIAL_MENTORS: MentorProfile[] = [
  {
    id: 'm1',
    name: 'Engr. Haris Khan',
    category: 'Software Engineering',
    title: 'Principal Distributed Systems Architect',
    experienceYears: 11,
    company: 'Ex-Careem, SOCH Academy Fellow',
    rating: 4.96,
    reviewsCount: 142,
    studentsMentored: 310,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Dedicated to helping Pakistani developers master scalable backend architectures, cloud computing, and real-world microservices.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'System Design', 'AI Agentic Loops'],
    hourlyRatePkr: 4500,
    availability: 'Available Today',
    badges: ['Top Mentor 2025', 'Code Review Specialist', 'Career Accelerator'],
  },
  {
    id: 'm2',
    name: 'Aiman Fatima',
    category: 'UI/UX & Product Design',
    title: 'Lead Product Designer & Design System Architect',
    experienceYears: 8,
    company: 'Global Fintech UX Lead',
    rating: 4.98,
    reviewsCount: 188,
    studentsMentored: 450,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about nurturing creative intuition into high-ticket international design careers. Mentors portfolio structure and design systems.',
    skills: ['Figma Pro', 'Design Systems', 'UX Research', 'Mobile UX', 'Micro-interactions'],
    hourlyRatePkr: 4000,
    availability: 'Available Today',
    badges: ['Figma Community Leader', 'Portfolio Judge', '5-Star Coach'],
  },
  {
    id: 'm3',
    name: 'Dr. Tariq Jamil',
    category: 'AI & Machine Learning',
    title: 'Applied Generative AI Specialist & Researcher',
    experienceYears: 9,
    company: 'SOCH Labs Director',
    rating: 4.94,
    reviewsCount: 96,
    studentsMentored: 215,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Guiding learners on integrating LLM APIs, building automated multi-agent systems, and deploying AI solutions for global clients.',
    skills: ['Python', 'LangChain', 'OpenAI/Gemini APIs', 'Agentic Workflows', 'Vector DBs'],
    hourlyRatePkr: 5500,
    availability: 'Limited Slots',
    badges: ['AI Lab Director', 'Research Fellow', 'Hackathon Mentor'],
  },
  {
    id: 'm4',
    name: 'Mahnoor Tariq',
    category: 'Digital Marketing & Growth',
    title: 'Global Performance Marketing Lead',
    experienceYears: 7,
    company: 'US SaaS Growth Pod',
    rating: 4.91,
    reviewsCount: 112,
    studentsMentored: 280,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Transforming storytelling skills into commercial performance marketing. Specializes in SEO, conversion rate optimization, and meta ads.',
    skills: ['Technical SEO', 'B2B Growth Funnels', 'Google Ads', 'Content Strategy', 'HubSpot'],
    hourlyRatePkr: 3500,
    availability: 'Available Today',
    badges: ['Growth Hacker', 'Client Acquisition Pro'],
  },
  {
    id: 'm5',
    name: 'Saad Ur Rehman',
    category: 'DevOps & Cloud',
    title: 'Cloud Infrastructure & SRE Consultant',
    experienceYears: 10,
    company: 'SOCH Cloud Operations',
    rating: 4.97,
    reviewsCount: 130,
    studentsMentored: 190,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Mentoring young engineers on CI/CD pipelines, Kubernetes, Terraform, and preparing for high-paying remote DevOps positions.',
    skills: ['AWS', 'Kubernetes', 'CI/CD Pipelines', 'Terraform', 'Linux Security'],
    hourlyRatePkr: 4800,
    availability: 'Booked This Week',
    badges: ['AWS Certified Champion', 'DevOps Lead'],
  },
  {
    id: 'm6',
    name: 'Zahra Bilgrami',
    category: 'Content & Creative',
    title: 'Creative Director & Brand Strategist',
    experienceYears: 8,
    company: 'International Creative Studio',
    rating: 4.93,
    reviewsCount: 154,
    studentsMentored: 340,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Empowering Pakistani writers and visual artists to position their work for premium international agencies and media outlets.',
    skills: ['Copywriting', 'Brand Narrative', 'Video Storyboarding', 'B2B Whitepapers'],
    hourlyRatePkr: 3200,
    availability: 'Available Today',
    badges: ['Creative Visionary', 'Storytelling Coach'],
  }
];

export const INITIAL_TALENT_PROFILE: UserProfile = {
  id: 'tal-101',
  name: 'Bilal Ahmed',
  email: 'bilal.ahmed@talent.soch.pk',
  role: 'talent',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  title: 'Aspiring Full-Stack & UI/UX Developer',
  city: 'Lahore',
  province: 'Punjab',
  phone: '+92 300 4819201',
  joinedDate: 'August 14, 2025',
  status: 'verified',
  talentDetails: {
    passionStory: 'I have always loved computers and drawing interactive interfaces since my school days. I want to build world-class digital products through SOCH Rozgar, learn from certified mentors, and become capable of creating employment for others.',
    skills: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma Wireframing', 'REST APIs', 'Node.js Basics'],
    track: 'Full-Stack Web & UI Engineering',
    level: 'Market-Ready',
    assessmentScore: 89,
    videoInterviewStatus: 'passed',
    videoInterviewUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aiVideoFeedback: {
      confidence: 88,
      clarity: 92,
      technicalDepth: 85,
      englishProficiency: 87,
      feedbackSummary: 'Excellent analytical mindset and clear articulate presentation. Confidently answered component lifecycle and state management questions with visual diagrams.',
      strengths: [
        'Clear explanations of responsive mobile-first UI paradigms',
        'Demonstrated strong problem-solving logic during live CSS grid debugging',
        'Positive attitude towards senior code reviews and continuous feedback'
      ],
      mistakesToAvoid: [
        'Could be more specific with SQL database query optimization nuances',
        'Avoid speaking too fast during remote presentation intros'
      ]
    },
    testScores: [
      {
        id: 't-1',
        testName: 'Modern React & TypeScript Diagnostics',
        category: 'Frontend Engineering',
        score: 92,
        passed: true,
        date: '2025-09-12',
        mistakes: ['Missed 1 edge case in React.useMemo dependency array caching'],
        recommendations: ['Review custom hooks optimization patterns']
      },
      {
        id: 't-2',
        testName: 'Figma to Clean Tailwind Component Assessment',
        category: 'UI/UX Implementation',
        score: 88,
        passed: true,
        date: '2025-09-18',
        mistakes: ['Contrast ratio slightly low on secondary grey badges'],
        recommendations: ['Ensure WCAG AA compliance on all micro-copy']
      },
      {
        id: 't-3',
        testName: 'Client Empathy & Remote Communication',
        category: 'Professional Soft Skills',
        score: 95,
        passed: true,
        date: '2025-09-24',
        mistakes: ['None. Outstanding async communication scenario handling.'],
        recommendations: ['Keep practicing video project demo walkthroughs']
      }
    ],
    roadmapMilestones: [
      {
        id: 'rm-1',
        phaseNumber: 1,
        title: 'Diagnostic & Passion Alignment',
        description: 'Completed 11-dimension cognitive assessment and AI video interview.',
        status: 'completed',
        progressPercent: 100,
        deliverables: ['11D Profile Report', 'AI Video Interview Vetting'],
        grade: 'Score: 92/100'
      },
      {
        id: 'rm-2',
        phaseNumber: 2,
        title: 'Core Technical Mastery & Tooling',
        description: 'Intensive drills in TypeScript, modern styling systems, and GitHub PR workflows.',
        status: 'completed',
        progressPercent: 100,
        deliverables: ['12 Practice Repositories', 'Senior Code Audit Approved'],
        grade: 'Verified Grade A'
      },
      {
        id: 'rm-3',
        phaseNumber: 3,
        title: '5 Real Client Capstones & Certification',
        description: 'Complete 5 audited tasks mirroring real commercial requirements.',
        status: 'in_progress',
        progressPercent: 80,
        deliverables: ['E-Commerce Cart System', 'SaaS Dashboard UI', 'Interactive Map Locator', 'Authentication Gateway', 'Pending Final Capstone'],
        grade: '4/5 Completed'
      },
      {
        id: 'rm-4',
        phaseNumber: 4,
        title: 'SOCH Managed Pod Matching & Direct Work',
        description: 'Automatic matching into managed multi-disciplinary pods. Client communication is strictly handled by SOCH Admin / PM.',
        status: 'in_progress',
        progressPercent: 65,
        deliverables: ['Active in SOCH Pod Delta #4', '2 Tasks In Flight'],
        grade: 'Active Earner'
      },
      {
        id: 'rm-5',
        phaseNumber: 5,
        title: 'SOCH Mentor & Business Ownership Transition',
        description: 'Graduate to paid mentor role and prepare to launch an independent digital agency.',
        status: 'locked',
        progressPercent: 0,
        deliverables: ['Mentor Certification', 'Agency Incorporation Guidance'],
      }
    ],
    earningsPkr: 142500,
    completedTasksCount: 7,
    mentorAssigned: {
      id: 'm1',
      name: 'Engr. Haris Khan',
      category: 'Software Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  }
};

export const INITIAL_ASSIGNED_TASKS: AssignedTask[] = [
  {
    id: 'task-401',
    title: 'Responsive Checkout Page & Stripe Integration',
    projectName: 'Global E-Commerce Expansion (Milestone 2)',
    sochDeliveryPod: 'SOCH Pod Alpha #12',
    deadline: 'In 3 Days (Oct 5, 2026)',
    status: 'In Progress',
    rewardPkr: 38000,
    priority: 'High',
    progress: 75,
    milestoneDescription: 'Implement 3-step checkout flow with responsive mobile layout, currency conversion, and error state validation as per SOCH Architecture Specs.',
    assignedRole: 'Frontend Lead',
    qaLead: 'Engr. Haris Khan (SOCH Mentor)',
    deliverableLinks: ['https://github.com/soch-pod-delta/checkout-module', 'https://figma.com/design/checkout-specs']
  },
  {
    id: 'task-402',
    title: 'Customer Analytics Dashboard Data Visualizations',
    projectName: 'SaaS Metrics Cloud (Sprint 3)',
    sochDeliveryPod: 'SOCH Pod Beta #07',
    deadline: 'In 7 Days (Oct 9, 2026)',
    status: 'Under Mentor QA',
    rewardPkr: 45000,
    priority: 'Medium',
    progress: 90,
    milestoneDescription: 'Build high-performance SVG line charts and user retention cohorts with dark/light mode toggle.',
    assignedRole: 'UI Engineer',
    qaLead: 'Aiman Fatima (SOCH Mentor)',
    deliverableLinks: ['https://github.com/soch-pod-delta/analytics-charts']
  },
  {
    id: 'task-403',
    title: 'Landing Page Hero Section & Dynamic Framer Animations',
    projectName: 'EcoSolar Portal (Sprint 1)',
    sochDeliveryPod: 'SOCH Pod Gamma #03',
    deadline: 'Completed Yesterday',
    status: 'Approved & Paid',
    rewardPkr: 29500,
    priority: 'Medium',
    progress: 100,
    milestoneDescription: 'Craft clean accessible hero layout showcasing solar calculator with live PKR savings estimation.',
    assignedRole: 'UI/UX Developer',
    qaLead: 'Engr. Haris Khan',
    deliverableLinks: ['https://ecosolar.soch-preview.pk']
  }
];

export const INITIAL_CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'proj-801',
    title: 'Cross-Platform Medical Booking & Telehealth App',
    clientName: 'HealthBridge Solutions LLC',
    budgetUsd: 4800,
    budgetPkr: 1344000,
    teamType: 'Managed Team Pod (Dev + Design + QA + AI Agent)',
    status: 'In Execution',
    category: 'Healthcare & Mobile Tech',
    postedDate: '2026-09-18',
    deadline: '2026-11-15',
    matchedTalentCount: 4,
    sochAccountManager: 'SOCH PM Lead: Usman Farooq',
    assignedTeam: [
      { role: 'Project Lead', talentName: 'Zainab Siddiqui', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80', status: 'Active' },
      { role: 'Frontend Engineer', talentName: 'Bilal Ahmed', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', status: 'Active' },
      { role: 'Backend Specialist', talentName: 'Hamza Rizvi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', status: 'Active' },
      { role: 'Automated AI QA Agent', talentName: 'SOCH Agentic Bot v2.4', avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80', status: 'Running 24/7' }
    ]
  },
  {
    id: 'proj-802',
    title: 'AI Document Intelligence & Invoicing SaaS',
    clientName: 'FinLedger Global',
    budgetUsd: 3200,
    budgetPkr: 896000,
    teamType: 'Managed Team Pod (Dev + Design + QA + AI Agent)',
    status: 'AI Matching',
    category: 'Fintech & Cloud Automation',
    postedDate: '2026-09-28',
    deadline: '2026-10-30',
    matchedTalentCount: 5,
    sochAccountManager: 'SOCH PM Lead: Asad Sheikh',
    assignedTeam: []
  },
  {
    id: 'proj-803',
    title: 'E-Commerce Marketplace Re-Architecture',
    clientName: 'Apex Retail Partners',
    budgetUsd: 6500,
    budgetPkr: 1820000,
    teamType: 'Enterprise Cohort',
    status: 'In Execution',
    category: 'E-Commerce Scale',
    postedDate: '2026-09-10',
    deadline: '2026-11-01',
    matchedTalentCount: 6,
    sochAccountManager: 'SOCH PM Lead: Usman Farooq',
    assignedTeam: [
      { role: 'Principal Architect', talentName: 'Engr. Haris Khan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', status: 'Lead' },
      { role: 'Full-Stack Developer', talentName: 'Bilal Ahmed', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', status: 'Active' },
      { role: 'QA Engineer', talentName: 'Fatima Noor', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80', status: 'Auditing' }
    ]
  }
];

// Initial Chat Channels (SOCH mediating between Talent & Client)
export const INITIAL_CHAT_CHANNELS: ChatChannel[] = [
  {
    id: 'ch-client-1',
    type: 'client_to_soch',
    title: 'SOCH HQ ⇄ Apex Retail Partners (Client)',
    participantRole: 'client',
    participantName: 'Sarah Jenkins (Apex Retail)',
    participantAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'SOCH: We have verified Milestone 2 deliverables with zero defects. Escrow invoice is ready.',
    lastMessageTime: '10:42 AM',
    unreadCount: 1,
    contextTag: 'Project #803: E-Commerce Architecture',
    projectDetails: {
      name: 'Omnichannel Fashion Marketplace',
      budget: '$3,500 USD (Escrow Protected)',
      status: 'Sprint 2 QA Review',
      sochLead: 'Usman Farooq (Lead PM)'
    }
  },
  {
    id: 'ch-client-2',
    type: 'client_to_soch',
    title: 'SOCH HQ ⇄ CloudScale Health (Client)',
    participantRole: 'client',
    participantName: 'Dr. Tariq Mansoor (CloudScale)',
    participantAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'CloudScale: Perfect! Please assemble the 3-person AI pod for our telemetry dashboard.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    contextTag: 'Project #807: Telemedicine Portal',
    projectDetails: {
      name: 'Telemedicine Patient Dashboard',
      budget: '$5,000 USD (Managed Pod)',
      status: 'Team Pod Assembly',
      sochLead: 'Aiman Fatima (Technical Director)'
    }
  },
  {
    id: 'ch-talent-1',
    type: 'talent_to_soch',
    title: 'SOCH Delivery Pod Lead ⇄ Bilal Ahmed (Talent)',
    participantRole: 'talent',
    participantName: 'Bilal Ahmed',
    participantAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Bilal: Submitted PR for the checkout animation module. Awaiting QA audit.',
    lastMessageTime: '11:15 AM',
    unreadCount: 2,
    contextTag: 'Task #401 Checkout Module',
    projectDetails: {
      name: 'Task #401: Tailwind Checkout Components',
      budget: 'PKR 45,000 Milestone Payout',
      status: 'Under Mentor QA',
      sochLead: 'Usman Farooq (Pod Manager)'
    }
  },
  {
    id: 'ch-talent-2',
    type: 'talent_to_soch',
    title: 'SOCH Evaluation Board ⇄ Bilal Ahmed (Talent)',
    participantRole: 'talent',
    participantName: 'Bilal Ahmed',
    participantAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'SOCH: Your video interview scores have been upgraded to 92% (Market-Ready).',
    lastMessageTime: '2 days ago',
    unreadCount: 0,
    contextTag: 'Diagnostic & Level Certification',
    projectDetails: {
      name: 'Level Upgrade Assessment',
      budget: 'Certified Pro Badge',
      status: 'Completed & Certified',
      sochLead: 'Dr. Zeeshan (Talent Lead)'
    }
  },
  {
    id: 'ch-mentor-1',
    type: 'talent_to_mentor',
    title: 'Engr. Haris Khan (SOCH Mentor) ⇄ Bilal Ahmed',
    participantRole: 'mentor',
    participantName: 'Engr. Haris Khan (Principal Architect)',
    participantAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Haris: Great job on the TypeScript interface types. Call scheduled for 4 PM today.',
    lastMessageTime: '09:30 AM',
    unreadCount: 0,
    contextTag: 'Weekly Senior Code Audit',
    projectDetails: {
      name: 'Senior Architecture Mentorship',
      budget: '100% Subsidized by SOCH',
      status: 'Active 1-on-1 Mentorship',
      sochLead: 'Engr. Haris Khan'
    }
  },
  {
    id: 'ch-mentor-2',
    type: 'talent_to_mentor',
    title: 'Ayesha Malik (SOCH UI Mentor) ⇄ Bilal Ahmed',
    participantRole: 'mentor',
    participantName: 'Ayesha Malik (Design Lead)',
    participantAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Ayesha: The spacing tokens look much cleaner now. Ready for client delivery preview.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    contextTag: 'UI/UX Design Tokens Review',
    projectDetails: {
      name: 'Micro-interaction & Design Polish',
      budget: '100% Subsidized by SOCH',
      status: 'Approved',
      sochLead: 'Ayesha Malik'
    }
  }
];

export const INITIAL_CHAT_MESSAGES: Record<string, ChatMessage[]> = {
  'ch-client-1': [
    {
      id: 'm-c1',
      channelId: 'ch-client-1',
      senderId: 'client-1',
      senderName: 'Sarah Jenkins (Client)',
      senderRole: 'client',
      senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      text: 'Hello SOCH Team! Can you provide an update on Sprint 2 checkout milestone and QA test results?',
      timestamp: '10:20 AM'
    },
    {
      id: 'm-c2',
      channelId: 'ch-client-1',
      senderId: 'soch-admin',
      senderName: 'Usman Farooq (SOCH Delivery Lead)',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      text: 'Good morning Sarah! As per the SOCH managed guarantee, our internal lead architect has audited the code repository, verified unit tests, and performance benchmarks. Everything meets your SLA requirements.',
      timestamp: '10:35 AM'
    },
    {
      id: 'm-c3',
      channelId: 'ch-client-1',
      senderId: 'soch-admin',
      senderName: 'Usman Farooq (SOCH Delivery Lead)',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      text: 'SOCH: We have verified Milestone 2 deliverables with zero defects. Escrow invoice is ready.',
      timestamp: '10:42 AM'
    }
  ],
  'ch-client-2': [
    {
      id: 'm-c2-1',
      channelId: 'ch-client-2',
      senderId: 'client-2',
      senderName: 'Dr. Tariq Mansoor (CloudScale)',
      senderRole: 'client',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'We require a 3-person specialized team for our patient telemetry web dashboard. Can SOCH staff this pod under the managed guarantee model?',
      timestamp: 'Yesterday 3:15 PM'
    },
    {
      id: 'm-c2-2',
      channelId: 'ch-client-2',
      senderId: 'soch-admin',
      senderName: 'Aiman Fatima (SOCH Technical Director)',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'Absolutely Dr. Tariq! We have already matched 1 Lead React Engineer, 1 UI/UX Specialist, and 1 Autonomous QA Agent from our certified talent pool. SOCH oversees all sprint deliverables and provides 100% money-back escrow assurance.',
      timestamp: 'Yesterday 4:00 PM'
    },
    {
      id: 'm-c2-3',
      channelId: 'ch-client-2',
      senderId: 'client-2',
      senderName: 'Dr. Tariq Mansoor (CloudScale)',
      senderRole: 'client',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'CloudScale: Perfect! Please assemble the 3-person AI pod for our telemetry dashboard.',
      timestamp: 'Yesterday 4:30 PM'
    }
  ],
  'ch-talent-1': [
    {
      id: 'm-t1',
      channelId: 'ch-talent-1',
      senderId: 'soch-admin',
      senderName: 'SOCH Delivery Pod Lead',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      text: 'Bilal, your assigned task #401 (Checkout module) is in Sprint 2. Please adhere to the Figma design tokens and submit your GitHub PR by Thursday.',
      timestamp: '11:00 AM'
    },
    {
      id: 'm-t2',
      channelId: 'ch-talent-1',
      senderId: 'tal-101',
      senderName: 'Bilal Ahmed (Talent)',
      senderRole: 'talent',
      senderAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
      text: 'Bilal: Submitted PR for the checkout animation module. Awaiting QA audit.',
      timestamp: '11:15 AM'
    }
  ],
  'ch-talent-2': [
    {
      id: 'm-t2-1',
      channelId: 'ch-talent-2',
      senderId: 'soch-admin',
      senderName: 'Dr. Zeeshan (SOCH Talent Evaluator)',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: 'Hello Bilal! Our evaluation board reviewed your recorded video interview. Your explanation of CSS Grid and asynchronous state handling was exceptional.',
      timestamp: '2 days ago'
    },
    {
      id: 'm-t2-2',
      channelId: 'ch-talent-2',
      senderId: 'soch-admin',
      senderName: 'Dr. Zeeshan (SOCH Talent Evaluator)',
      senderRole: 'soch_admin',
      senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: 'SOCH: Your video interview scores have been upgraded to 92% (Market-Ready).',
      timestamp: '2 days ago'
    }
  ],
  'ch-mentor-1': [
    {
      id: 'm-m1',
      channelId: 'ch-mentor-1',
      senderId: 'm1',
      senderName: 'Engr. Haris Khan (Mentor)',
      senderRole: 'mentor',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      text: 'Haris: Great job on the TypeScript interface types. Call scheduled for 4 PM today.',
      timestamp: '09:30 AM'
    },
    {
      id: 'm-m2',
      channelId: 'ch-mentor-1',
      senderId: 'tal-101',
      senderName: 'Bilal Ahmed (Talent)',
      senderRole: 'talent',
      senderAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
      text: 'Thank you Sir Haris! I have refactored the caching hook with useMemo as you recommended in our last review session.',
      timestamp: '09:45 AM'
    }
  ],
  'ch-mentor-2': [
    {
      id: 'm-m2-1',
      channelId: 'ch-mentor-2',
      senderId: 'm2',
      senderName: 'Ayesha Malik (Mentor)',
      senderRole: 'mentor',
      senderAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      text: 'Ayesha: The spacing tokens look much cleaner now. Ready for client delivery preview.',
      timestamp: 'Yesterday 5:20 PM'
    }
  ]
};

export const SAMPLE_VIDEO_CALL_SESSIONS: VideoCallSession[] = [
  {
    id: 'call-101',
    title: 'SOCH HQ ⇄ Client Executive Milestone Review',
    callType: 'soch_with_client',
    hostName: 'Usman Farooq (SOCH Delivery Lead)',
    hostRole: 'SOCH Technical Project Director',
    remoteParticipantName: 'Sarah Jenkins',
    remoteParticipantRole: 'Client Founder (Apex Retail)',
    remoteParticipantAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    remoteParticipantStatus: 'Connected',
    sessionTopic: 'Sprint 2 Milestone Sign-off & Escrow Authorization',
    durationSeconds: 342,
    meetingAgenda: [
      'Review automated QA test suite on responsive checkout',
      'Verify zero-defect SLA compliance under SOCH guarantee',
      'Authorize Milestone 2 escrow release ($1,200 USD)'
    ],
    screenShareType: 'figma'
  },
  {
    id: 'call-102',
    title: 'SOCH Mentor ⇄ Talent Code Audit & 1-on-1 Review',
    callType: 'mentor_qa_session',
    hostName: 'Engr. Haris Khan (SOCH Mentor)',
    hostRole: 'Principal Systems Architect',
    remoteParticipantName: 'Bilal Ahmed',
    remoteParticipantRole: 'Market-Ready Talent',
    remoteParticipantAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    remoteParticipantStatus: 'Connected',
    sessionTopic: 'React Component Optimization & Capstone Code Review',
    durationSeconds: 480,
    meetingAgenda: [
      'Live code audit of Pull Request #401',
      'Benchmark rendering performance with React Profiler',
      'Review senior engineering interview techniques'
    ],
    screenShareType: 'code'
  },
  {
    id: 'call-103',
    title: 'SOCH Live Video Interview & Technical Assessment',
    callType: 'soch_with_talent',
    hostName: 'Dr. Zeeshan (SOCH Evaluation Board)',
    hostRole: 'Head of Talent Verification',
    remoteParticipantName: 'Bilal Ahmed',
    remoteParticipantRole: 'Talent Candidate (Full-Stack Track)',
    remoteParticipantAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    remoteParticipantStatus: 'Connected',
    sessionTopic: 'Stage 2 Live Video Interview & Diagnostic Verification',
    durationSeconds: 215,
    meetingAgenda: [
      'Explain declared passion statement and long-term goal',
      'Live technical assessment: React 19 concurrent features',
      'English fluency & professional remote collaboration readiness'
    ],
    screenShareType: 'kanban'
  }
];
