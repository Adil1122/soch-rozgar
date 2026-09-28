import { StageItem, EcosystemPillar, RevenueStream, PhasePlan } from '../types/soch';

export const STAGES_DATA: StageItem[] = [
  {
    id: 1,
    title: 'Discover Yourself',
    subtitle: 'AI + Expert Profile Analysis',
    tagline: 'We understand your interests, skills, personality and goals with AI + expert guidance.',
    color: '#0D9488', // Teal
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-400',
    textColor: 'text-teal-700',
    iconName: 'Sparkles',
    description: 'Instead of forcing candidates to fit a rigid job title, the platform conducts a comprehensive 11-dimension evaluation covering creativity, technical aptitude, communication, and learning capacity.',
    keyOutputs: [
      '11-dimensional psychometric & technical diagnostic',
      'Personalized Career Path Suitability report',
      'Gap identification before client-facing exposure',
      'Human mentor review & goal alignment'
    ],
    pdfReference: 'Page 1 & 2: What is the Real Problem? & Stage One: Assessment',
    mockupType: 'profile'
  },
  {
    id: 2,
    title: 'Learn & Improve',
    subtitle: 'Structured Learning & Real Projects',
    tagline: 'Get structured learning paths, coaching, and practice with real projects.',
    color: '#0284C7', // Cerulean Blue
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-400',
    textColor: 'text-sky-700',
    iconName: 'GraduationCap',
    description: 'Unlike Fiverr or Upwork where unskilled freelancers face rejection, SOCH equips candidates with disciplined fundamentals, industry tools (Figma, GitHub, AI assistants), and hands-on milestones.',
    keyOutputs: [
      'Step-by-step modular curriculum mapped to market demand',
      '1-on-1 coaching sessions with experienced practitioners',
      'Practice lab drills with synthetic & historical client briefs',
      'AI-accelerated workflow training'
    ],
    pdfReference: 'Page 2 & 3: Stage Two: Skill Development & Learning Path',
    mockupType: 'learning'
  },
  {
    id: 3,
    title: 'Build Portfolio',
    subtitle: '5 Real Tasks & Proof of Work',
    tagline: 'Work on real tasks, get certified and showcase your skills.',
    color: '#6366F1', // Indigo
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-400',
    textColor: 'text-indigo-700',
    iconName: 'FolderCheck',
    description: 'Candidates build 5 real-world case studies reviewed and vetted by senior industry leads. Once approved, they earn the SOCH Verified Talent badge.',
    keyOutputs: [
      '5 complete real-world projects completed to client standards',
      'Rigorous peer & senior lead code/design audits',
      'Tamper-proof verifiable credential badge',
      'Production-ready public showcase URL'
    ],
    pdfReference: 'Page 3: Path to Certification & Stage Three',
    mockupType: 'portfolio'
  },
  {
    id: 4,
    title: 'Get Matched with Projects',
    subtitle: 'Zero Bidding, Pure Smart Matching',
    tagline: 'Our AI and team connect you with the right clients and projects — no more client hunting.',
    color: '#F97316', // Orange
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-400',
    textColor: 'text-orange-700',
    iconName: 'Cpu',
    description: 'Clients post requirements (e.g. restaurant social campaign, e-commerce web app). AI breaks down requirements and matches the top 3-5 pre-vetted specialists instantly.',
    keyOutputs: [
      'Client job decomposition into granular skill requirements',
      'Automated semantic matching of top 3-5 vetted candidates',
      'Guaranteed proposal elimination — direct matching',
      'Instant contract initiation with transparent milestones'
    ],
    pdfReference: 'Page 3 & 5: Real Projects & No More Client Hunting',
    mockupType: 'projects'
  },
  {
    id: 5,
    title: 'Work & Earn',
    subtitle: 'Escrow Payouts & Reputation Growth',
    tagline: 'Deliver your work, get paid securely, and build your reputation.',
    color: '#10B981', // Emerald
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
    textColor: 'text-emerald-700',
    iconName: 'BadgeDollarSign',
    description: 'Platform manages milestones, milestone escrow protection, timely quality approvals, and direct payouts to Pakistani bank accounts & mobile wallets.',
    keyOutputs: [
      '100% upfront client escrow security',
      'Prompt local bank, Raast, Nayapay & mobile wallet transfer',
      'Verified delivery certificates upon milestone completion',
      'Transparent earnings history & tax compliance support'
    ],
    pdfReference: 'Page 5 & 6: Client Guarantee & Business Model',
    mockupType: 'earning'
  },
  {
    id: 6,
    title: 'Grow Your Skills',
    subtitle: 'Continuous Upskilling & AI Tools',
    tagline: 'Advanced courses, new tools, mentorship and career guidance to reach the next level.',
    color: '#0891B2', // Deep Cyan
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-400',
    textColor: 'text-cyan-700',
    iconName: 'TrendingUp',
    description: 'Earning talent transitions to higher tiers: master advanced architectures, agentic AI tooling, enterprise standards, and client leadership.',
    keyOutputs: [
      'Advanced specialized tracks (Agentic AI, Full-stack cloud, Motion)',
      'Quarterly performance and compensation reviews',
      'Access to exclusive high-ticket enterprise contracts',
      'Leadership & communication workshops'
    ],
    pdfReference: 'Page 6 & 9: Upskilling & Upward Mobility Ladder',
    mockupType: 'upskill'
  },
  {
    id: 7,
    title: 'Become a Mentor',
    subtitle: 'Knowledge Sharing & Secondary Income',
    tagline: 'Share your knowledge, help others and earn extra income.',
    color: '#7C3AED', // Purple
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-400',
    textColor: 'text-purple-700',
    iconName: 'Users',
    description: 'Senior earners on the platform mentor incoming apprentices, perform QA audits on real projects, and earn additional stable operational stipends.',
    keyOutputs: [
      'Paid QA and portfolio audit roles ($100 allocated per $1K project)',
      '1-on-1 office hour coaching slots',
      'Contribution to SOCH Academy curriculum updates',
      'Recognition as a verified SOCH Community Leader'
    ],
    pdfReference: 'Page 6 & 9: Mentor/QA Operations & Giving Back',
    mockupType: 'mentor'
  },
  {
    id: 8,
    title: 'Build Your Own Business',
    subtitle: 'Founding Agencies & Enterprise Teams',
    tagline: 'Use your skills, network and experience to create your future opportunities.',
    color: '#E11D48', // Crimson/Coral
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-400',
    textColor: 'text-rose-700',
    iconName: 'Rocket',
    description: 'Top talent graduates to leading agency pods, hiring other SOCH graduates, scaling client engagements, and building venture-backed or bootstrapped agencies.',
    keyOutputs: [
      'Transition from individual contributor to Agency Founder',
      'Hiring pre-vetted apprentices directly from SOCH pipeline',
      'Incubation support via SOCH Ventures & SOCH Studio',
      'Creating sustainable employment for fellow Pakistanis'
    ],
    pdfReference: 'Page 9 & 10: Ecosystem Effect & The SOCH Philosophy',
    mockupType: 'business'
  }
];

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: 'academy',
    name: 'Academy',
    action: 'Learn',
    color: '#3B82F6', // Blue
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    iconName: 'BookOpen',
    description: 'Structured, market-aligned curricula that build verified capabilities rather than hollow certificates.',
    roleInNetwork: 'Trains candidates from scratch to market readiness.'
  },
  {
    id: 'labs',
    name: 'Labs',
    action: 'Experiment',
    color: '#84CC16', // Lime Green
    bgColor: 'bg-lime-500',
    textColor: 'text-lime-700',
    borderColor: 'border-lime-400',
    iconName: 'FlaskConical',
    description: 'Sandbox environments testing cutting-edge tools, agentic AI frameworks, and emerging technology stacks.',
    roleInNetwork: 'Ensures talent is equipped with modern tools before deployment.'
  },
  {
    id: 'studio',
    name: 'Studio',
    action: 'Create',
    color: '#8B5CF6', // Violet
    bgColor: 'bg-violet-600',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-400',
    iconName: 'Camera',
    description: 'High-end media, branding, design, UI/UX, and creative production collective.',
    roleInNetwork: 'Produces world-class branding and design deliverables for clients.'
  },
  {
    id: 'ventures',
    name: 'Ventures',
    action: 'Build',
    color: '#F97316', // Warm Orange
    bgColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-400',
    iconName: 'Rocket',
    description: 'Incubates agency spinoffs and startups founded by successful SOCH graduates.',
    roleInNetwork: 'Provides capital, client pipeline, and legal structuring.'
  },
  {
    id: 'ai',
    name: 'AI',
    action: 'Automate',
    color: '#06B6D4', // Cyan
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-400',
    iconName: 'Cpu',
    description: 'Deploys AI agents and multi-agent coordination pods to boost human freelancer productivity by 10x.',
    roleInNetwork: 'Powers candidate assessment, skill matching, and AI team composition.'
  },
  {
    id: 'research',
    name: 'Research',
    action: 'Innovate',
    color: '#0284C7', // Sky Blue
    bgColor: 'bg-sky-600',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-400',
    iconName: 'Lightbulb',
    description: 'Publishes Pakistani labor market insights, freelance economic trends, and future of work forecasts.',
    roleInNetwork: 'Directs curriculum and identifies high-demand global niches.'
  },
  {
    id: 'community',
    name: 'Community',
    action: 'Connect',
    color: '#D946EF', // Magenta/Pink
    bgColor: 'bg-pink-600',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-400',
    iconName: 'Users',
    description: 'Peer support groups, co-working meetups, hackathons, and nationwide chapters across Pakistan.',
    roleInNetwork: 'Fosters collaboration so learners never feel isolated or lost.'
  },
  {
    id: 'foundation',
    name: 'Foundation',
    action: 'Create Impact',
    color: '#10B981', // Leaf Green
    bgColor: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-400',
    iconName: 'HeartHandshake',
    description: 'Provides scholarships, devices, and internet subsidies to underprivileged youth and women across rural Pakistan.',
    roleInNetwork: 'Ensures financial hurdles never prevent ambitious talent from succeeding.'
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    number: 1,
    title: 'Project Commission',
    subtitle: 'Transparent Marketplace Commission',
    description: 'The platform takes a fair, predictable commission from completed projects while providing full escrow, QA, and invoicing services.',
    icon: 'Percent',
    percentageOrModel: '25% of Project Value'
  },
  {
    number: 2,
    title: 'Talent Development',
    subtitle: 'Advanced Training & Verified Certifications',
    description: 'Paid advanced masterclasses, specialized tool workshops (AI agent engineering, enterprise cloud), and certified credential assessments.',
    icon: 'GraduationCap',
    percentageOrModel: 'Subscription / One-time Track Fee'
  },
  {
    number: 3,
    title: 'Client Subscription',
    subtitle: 'Direct Verified Talent Pool Access',
    description: 'Global companies and enterprise hiring managers pay a monthly retainer to browse, interview, and reserve pre-screened Pakistani talent directly.',
    icon: 'Building2',
    percentageOrModel: '$299 – $999 / month'
  },
  {
    number: 4,
    title: 'Managed Teams',
    subtitle: 'Dedicated Remote Tech Teams',
    description: 'Overseas startups receive dedicated 3-to-6 person pods with an integrated Pakistani PM, daily standups, code reviews, and guaranteed output.',
    icon: 'Users2',
    percentageOrModel: 'Monthly Retainer per Seat'
  },
  {
    number: 5,
    title: 'Enterprise Workforce',
    subtitle: 'Large-Scale On-Demand Staffing',
    description: 'Large firms request: "We need 10 developers, 5 designers, and 3 QA engineers." SOCH provisions the full cohesive workforce with SLA guarantees.',
    icon: 'Briefcase',
    percentageOrModel: 'Enterprise SLA Contracts'
  },
  {
    number: 6,
    title: 'AI-Powered Workforce',
    subtitle: 'Hybrid Human + AI Agent Pods',
    description: 'Leveraging agentic AI to pair 1 Senior Developer + 3 Junior Developers + AI Coding Agents, slashing costs for clients while tripling junior wages.',
    icon: 'Bot',
    percentageOrModel: 'Hybrid Performance Pricing'
  }
];

export const PHASED_ROADMAP: PhasePlan[] = [
  {
    phase: 1,
    title: 'Digital Skills',
    subtitle: 'Immediate Global Export Market',
    badge: 'Current Core Focus',
    domains: [
      {
        category: 'Software Development',
        skills: ['Web (React, Node, Python)', 'Mobile (Flutter, React Native)', 'Backend & Cloud APIs', 'Applied AI & LLM Engineering']
      },
      {
        category: 'Design & Creative',
        skills: ['UI/UX Product Design', 'Graphic & Brand Identity', 'Video Editing & Motion Graphics']
      },
      {
        category: 'Digital Marketing & Content',
        skills: ['Technical SEO & Growth', 'Social Media Management', 'Copywriting & Content Strategy']
      }
    ]
  },
  {
    phase: 2,
    title: 'Professional Knowledge Services',
    subtitle: 'White-Collar Remote Operations',
    badge: 'Scale Phase',
    domains: [
      {
        category: 'Finance & Compliance',
        skills: ['Bookkeeping & QuickBooks/Xero', 'Financial Modeling', 'Tax Preparation']
      },
      {
        category: 'Remote Operations',
        skills: ['Executive Virtual Assistance', 'B2B Lead Generation & Sales', '24/7 Omnichannel Customer Support']
      },
      {
        category: 'Education & Communications',
        skills: ['Technical & Academic Writing', 'Online STEM & Language Tutoring', 'Curriculum Design']
      }
    ]
  },
  {
    phase: 3,
    title: 'Local & Physical Skills',
    subtitle: 'Nationwide Domestic & On-Site Network',
    badge: 'Universal Network',
    domains: [
      {
        category: 'Technical Trades',
        skills: ['Solar & Certified Electricians', 'Master Plumbers & HVAC', 'Automotive Mechanics & EV Techs']
      },
      {
        category: 'Artisans & Media',
        skills: ['Tailors & Apparel Crafters', 'Commercial Event Photographers', 'Videographers']
      },
      {
        category: 'Essential Home Services',
        skills: ['Academic Home Tutors', 'Smart Home / Hardware Repair Techs', 'Appliance Specialists']
      }
    ]
  }
];

export const BROKEN_LINKS = [
  {
    problem: 'Talent exists',
    gap: 'Direction is missing',
    sochAnswer: 'AI + Human Mentors assess personality, creativity & capacity to map exact career path'
  },
  {
    problem: 'Skills exist',
    gap: 'Market access is missing',
    sochAnswer: 'Global client matchmaking replaces cold pitching; direct project routing'
  },
  {
    problem: 'Passion exists',
    gap: 'Professional training is missing',
    sochAnswer: 'Disciplined curriculum with real tools (Figma, GitHub, AI) and mentor code/design reviews'
  },
  {
    problem: 'Potential exists',
    gap: 'Real projects are missing',
    sochAnswer: '5 verified capstone client tasks built into the learning path before certification'
  },
  {
    problem: 'Freelancers exist',
    gap: 'Client acquisition is difficult',
    sochAnswer: 'Zero bidding wars; platform markets and secures contracts on talent behalf'
  },
  {
    problem: 'Clients exist',
    gap: 'Finding reliable talent is difficult',
    sochAnswer: 'Platform outcome guarantee: pre-vetted teams, managed QA, milestone escrow'
  }
];
