import React, { useState } from 'react';
import { 
  Building2, 
  PlusCircle, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Layers, 
  Cpu, 
  ArrowRight, 
  ExternalLink,
  Bot,
  Sparkles,
  MessageSquare,
  Video,
  Lock
} from 'lucide-react';
import { ClientProject, UserProfile } from '../types/platform';

interface ClientPortalProps {
  clientProfile?: UserProfile;
  projects: ClientProject[];
  onCreateProject: (project: Omit<ClientProject, 'id' | 'postedDate' | 'matchedTalentCount' | 'assignedTeam'>) => void;
  onNavigateToChat?: (channelId?: string) => void;
  onLaunchVideoCall?: (sessionId?: string) => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({
  clientProfile,
  projects,
  onCreateProject,
  onNavigateToChat,
  onLaunchVideoCall
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'post-project' | 'guarantee'>('projects');
  
  // New Project Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Full-Stack Web & Mobile App');
  const [budgetUsd, setBudgetUsd] = useState(3500);
  const [teamType, setTeamType] = useState<ClientProject['teamType']>('Managed Team Pod (Dev + Design + QA + AI Agent)');
  const [deadline, setDeadline] = useState('2026-11-30');
  const [requirements, setRequirements] = useState('');
  const [isCreatedSuccess, setIsCreatedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateProject({
      title,
      clientName: clientProfile?.name || 'Apex Retail Partners',
      budgetUsd,
      budgetPkr: budgetUsd * 280,
      teamType,
      status: 'AI Matching',
      category,
      deadline,
      sochAccountManager: 'Usman Farooq (SOCH Delivery Lead)'
    });
    setIsCreatedSuccess(true);
    setTimeout(() => {
      setIsCreatedSuccess(false);
      setActiveTab('projects');
      setTitle('');
      setRequirements('');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Client Header */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-emerald-800/60">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/60">
                Client Outcome Portal
              </span>
              <span className="text-xs text-slate-300">
                SOCH Verified Enterprise Tier
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              {clientProfile?.name || 'Apex Retail Partners'}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl">
              "You don't hire lone freelancers. We deliver verified outcomes." Managed teams backed by senior code audits and escrow milestone security.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigateToChat ? onNavigateToChat('ch-client-1') : null}
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs border border-white/20 transition-all flex items-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat with SOCH Delivery Lead</span>
            </button>

            <button
              onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-101') : null}
              className="px-3.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center space-x-1.5"
            >
              <Video className="w-4 h-4 text-slate-950" />
              <span>Join Sprint Video Review</span>
            </button>

            <button
              onClick={() => setActiveTab('post-project')}
              className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs border border-slate-700 shadow-md transition-all flex items-center space-x-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Project</span>
            </button>
          </div>
        </div>

        {/* Mediation rule reminder banner */}
        <div className="mt-4 p-3 rounded-2xl bg-emerald-950/60 border border-emerald-700/60 text-xs text-emerald-100 flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Zero Freelancer Friction:</strong> You deal exclusively with your dedicated SOCH Project Director. SOCH staffs, audits, and guarantees all work delivered by vetted talent pods.
          </span>
        </div>

        {/* Tab switchers */}
        <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center space-x-2 text-xs">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'projects' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Active Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('post-project')}
            className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'post-project' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            + Create Requirement Brief
          </button>
          <button
            onClick={() => setActiveTab('guarantee')}
            className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'guarantee' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            100% Outcome Guarantee SLA
          </button>
        </div>
      </div>

      {/* ================= 1. ACTIVE PROJECTS ================= */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-400 uppercase">Active Engagements</span>
              <div className="text-2xl font-black text-slate-900 mt-1">{projects.length} Projects</div>
              <span className="text-[11px] text-emerald-600 font-semibold">100% on schedule</span>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-400 uppercase">Escrow Protected Funds</span>
              <div className="text-2xl font-black text-emerald-700 mt-1">
                ${projects.reduce((acc, p) => acc + p.budgetUsd, 0).toLocaleString()} USD
              </div>
              <span className="text-[11px] text-slate-500">Released only upon verified sign-off</span>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-400 uppercase">Assigned Talent & QA Leads</span>
              <div className="text-2xl font-black text-slate-900 mt-1">11 Specialists</div>
              <span className="text-[11px] text-blue-600 font-semibold">Human Lead + AI Coding Agents</span>
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-400 transition-all p-6 shadow-xs space-y-4"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400">ID: {project.id}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mt-1">{project.title}</h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Delivery Model: <strong className="text-slate-700">{project.teamType}</strong>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                      project.status === 'In Execution'
                        ? 'bg-blue-100 text-blue-800'
                        : project.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {project.status}
                    </span>

                    <div className="text-right">
                      <div className="text-lg font-black text-emerald-700">
                        ${project.budgetUsd.toLocaleString()} USD
                      </div>
                      <div className="text-[11px] text-slate-400 font-semibold">Deadline: {project.deadline}</div>
                    </div>
                  </div>
                </div>

                {/* Team Pod Breakdown */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Assigned Multi-Disciplinary Delivery Pod:</span>
                  </h4>

                  {project.assignedTeam.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {project.assignedTeam.map((member, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                          <img
                            src={member.avatar}
                            alt={member.talentName}
                            className="w-10 h-10 rounded-xl object-cover border border-emerald-400 shadow-2xs"
                          />
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">{member.talentName}</div>
                            <div className="text-[11px] text-slate-500 font-medium">{member.role}</div>
                            <span className="text-[10px] text-emerald-700 font-bold">✓ {member.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
                      <span>🤖 SOCH AI is currently auto-matching the top 3-5 candidates from our verified talent pool...</span>
                      <span className="font-extrabold">Instant Match Pending</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= 2. POST NEW PROJECT BRIEF ================= */}
      {activeTab === 'post-project' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="pb-6 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Zero Proposal Spam • Pure Smart Assembly
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-2">
              Post Your Project Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              You will not receive 50 generic copy-pasted proposals. Our system decomposes your brief into required skill vectors and automatically matches verified Pakistani talent and senior QA mentors.
            </p>
          </div>

          {isCreatedSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center my-6 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-black text-emerald-900">Project Brief Deployed Successfully!</h3>
              <p className="text-xs text-emerald-700">
                SOCH AI has parsed the requirements and is routing matched specialists into your workspace pod.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Next.js SaaS Customer Portal with Automated Billing"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Domain / Vertical
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option>Full-Stack Web & Mobile App</option>
                    <option>UI/UX Product Design & Figma System</option>
                    <option>AI Agent Integration & Automation</option>
                    <option>E-Commerce Marketplace Scale</option>
                    <option>Technical SEO & Performance Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Team Assembly Format
                  </label>
                  <select
                    value={teamType}
                    onChange={(e) => setTeamType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Managed Team Pod (Dev + Design + QA + AI Agent)">
                      Managed Team Pod (Dev + Design + QA + AI Agent)
                    </option>
                    <option value="Solo Pro">Solo Verified Specialist</option>
                    <option value="Enterprise Cohort">Enterprise Cohort (10+ specialists)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Total Contract Budget (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      required
                      min={300}
                      step={100}
                      value={budgetUsd}
                      onChange={(e) => setBudgetUsd(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    ≈ PKR {(budgetUsd * 280).toLocaleString()} (Includes Escrow & QA audit guarantee)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Completion Date
                  </label>
                  <input
                    type="date"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Deliverable Specifications & User Stories
                </label>
                <textarea
                  rows={4}
                  required
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Detail the key screens, database needs, APIs, and timeline constraints. Our AI team orchestrator will convert this directly into sprint deliverables..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit & Run AI Pod Matchmaker</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* ================= 3. 100% OUTCOME GUARANTEE SLA ================= */}
      {activeTab === 'guarantee' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Stage 5 of SOCH Blueprint: Client Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              "You Don't Hire Freelancers. We Deliver Outcomes."
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              The client should never have to worry about who is good, whether portfolios are genuine, or if deadlines will be met.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h4 className="text-base font-extrabold text-slate-900">Pre-Vetted Proof-of-Work</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Talent must complete 5 audited commercial capstones and pass an AI video interview before being eligible to join client pods.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="text-base font-extrabold text-slate-900">Senior Mentor QA Layer</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Every project has an assigned principal mentor allocated from project funds who reviews code PRs, design accessibility, and milestone deliverables.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200">
              <DollarSign className="w-6 h-6 text-purple-600 mb-2" />
              <h4 className="text-base font-extrabold text-slate-900">100% Escrow Protection</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Your payment is held safely until milestones are verified and signed off. If deliverables fail specs, work is revised without extra charge.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
