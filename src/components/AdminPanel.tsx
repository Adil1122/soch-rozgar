import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Briefcase, 
  DollarSign, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Award, 
  TrendingUp, 
  ArrowUpRight,
  Filter,
  Eye,
  Check,
  X,
  MessageSquare,
  Video,
  Lock
} from 'lucide-react';
import { UserProfile, ClientProject, AssignedTask } from '../types/platform';

interface AdminPanelProps {
  talentList: UserProfile[];
  projectsList: ClientProject[];
  tasksList: AssignedTask[];
  onApproveTalent?: (talentId: string) => void;
  onReleaseEscrow?: (taskId: string) => void;
  onNavigateToChat?: (channelId?: string) => void;
  onLaunchVideoCall?: (sessionId?: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  talentList,
  projectsList,
  tasksList,
  onApproveTalent,
  onReleaseEscrow,
  onNavigateToChat,
  onLaunchVideoCall
}) => {
  const [activeTab, setActiveTab] = useState<'talent' | 'clients' | 'escrow' | 'matching' | 'mediation'>('talent');
  const [searchQuery, setSearchQuery] = useState('');

  const pendingVerificationCount = talentList.filter(t => t.status === 'in_review' || t.status === 'pending_assessment').length;

  return (
    <div className="space-y-6">
      {/* Top Admin Header */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-purple-800/50">
        <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-900/60 px-3 py-1 rounded-full border border-purple-700/60">
                HQ Governance & Operations
              </span>
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                System Live
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              SOCH Rozgar Master Admin Console
            </h1>
            <p className="text-xs sm:text-sm text-purple-100/90 mt-1 max-w-2xl">
              Control talent vetting pipelines, audit video interviews, approve client contracts, and release milestone payouts across Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToChat ? onNavigateToChat() : null}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 text-purple-200" />
              <span>Chat Mediation Hub</span>
            </button>

            <button
              onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-101') : null}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center space-x-1.5"
            >
              <Video className="w-4 h-4 text-emerald-200" />
              <span>Join Live Video Room</span>
            </button>

            <div className="bg-white/10 px-3.5 py-1.5 rounded-xl text-center border border-white/15">
              <div className="text-[10px] text-purple-200 uppercase font-bold">Network Volume</div>
              <div className="text-sm font-black text-emerald-300">PKR 4.2M</div>
            </div>
          </div>
        </div>

        {/* Mediation architecture notice */}
        <div className="mt-4 p-3 rounded-2xl bg-purple-950/80 border border-purple-800/80 text-xs text-purple-100 flex items-center gap-2">
          <Lock className="w-4 h-4 text-purple-300 shrink-0" />
          <span>
            <strong>SOCH Mediation Mandate:</strong> Clients and Talent do not have direct contact channels. As Admin, SOCH bridges specifications, guarantees deliverables to clients, and ensures verified talent is paid on time.
          </span>
        </div>

        {/* Admin Tabs */}
        <div className="mt-5 pt-4 border-t border-purple-800/60 flex items-center space-x-2 text-xs overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('talent')}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeTab === 'talent' ? 'bg-purple-500 text-white shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Talent Pipeline ({talentList.length})
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeTab === 'clients' ? 'bg-purple-500 text-white shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Client Projects ({projectsList.length})
          </button>
          <button
            onClick={() => setActiveTab('mediation')}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeTab === 'mediation' ? 'bg-purple-500 text-white shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Communications & Video Mediation
          </button>
          <button
            onClick={() => setActiveTab('escrow')}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeTab === 'escrow' ? 'bg-purple-500 text-white shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Escrow & Raast Approvals
          </button>
          <button
            onClick={() => setActiveTab('matching')}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeTab === 'matching' ? 'bg-purple-500 text-white shadow-xs' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            AI Pod Matchmaker
          </button>
        </div>
      </div>

      {/* ================= TAB 1: TALENT PIPELINE ================= */}
      {activeTab === 'talent' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-black text-slate-900">Talent Candidates & Verification Pipeline</h3>
              <p className="text-xs text-slate-500">Audit raw applicant passion statements, video interview confidence scores, and assign mentors.</p>
            </div>

            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidate name or skill..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-extrabold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Talent Name & Track</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Declared Passion Statement</th>
                  <th className="py-3 px-4">AI Video Score</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {talentList.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 flex items-center space-x-3">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-9 h-9 rounded-xl object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-extrabold text-slate-900">{candidate.name}</div>
                        <div className="text-[11px] text-slate-500">{candidate.talentDetails?.track || 'General Skill Diagnostic'}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {candidate.city || 'Lahore'}
                    </td>
                    <td className="py-3 px-4 text-slate-600 max-w-xs truncate">
                      "{candidate.talentDetails?.passionStory || 'Ready to work hard and learn professional design.'}"
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        {candidate.talentDetails?.assessmentScore || 88}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                        {candidate.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] transition-colors">
                        Inspect Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 2: CLIENT ENGAGEMENTS ================= */}
      {activeTab === 'clients' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900">Commercial Client Projects</h3>
              <p className="text-xs text-slate-500">Track delivery pod staffing, deadline SLA health, and escrow balances.</p>
            </div>
          </div>

          <div className="space-y-3">
            {projectsList.map((p) => (
              <div key={p.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-500">Client: <strong>{p.clientName}</strong></span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-1">{p.title}</h4>
                  <div className="text-xs text-slate-600 mt-0.5">Assigned: {p.assignedTeam.length} members ({p.teamType})</div>
                </div>

                <div className="flex items-center space-x-4 self-start md:self-auto">
                  <div className="text-right">
                    <div className="text-sm font-black text-emerald-700">${p.budgetUsd.toLocaleString()} USD</div>
                    <div className="text-[10px] text-slate-400">PKR {p.budgetPkr.toLocaleString()}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: COMMUNICATIONS & VIDEO MEDIATION ================= */}
      {activeTab === 'mediation' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                  Omnichannel Mediation Gate
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  SOCH Central Communications & Live Video Hub
                </h3>
                <p className="text-xs text-slate-500">
                  SOCH strictly separates Clients and Talent. Monitor active client requirements on one side, and talent pod tasks on the other.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigateToChat ? onNavigateToChat() : null}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-md transition-all flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Interactive Chat Hub</span>
                </button>
              </div>
            </div>

            {/* Split Stream: Clients vs Talent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Stream 1: Client Relations */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>Client Communications (SOCH ⇄ Clients)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    2 Active Channels
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Clients negotiate project scope, milestones, and release escrow strictly through SOCH Project Directors.
                </p>

                <div className="space-y-2 mt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Apex Retail Partners</div>
                      <div className="text-[11px] text-slate-500">Milestone 2 QA Sign-off • $3,500 USD</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigateToChat ? onNavigateToChat('ch-client-1') : null}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        title="Open Chat"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-101') : null}
                        className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                        title="Start Video Meeting"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">CloudScale Health</div>
                      <div className="text-[11px] text-slate-500">Telemedicine Pod Scoping • $5,000 USD</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigateToChat ? onNavigateToChat('ch-client-2') : null}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        title="Open Chat"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-101') : null}
                        className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                        title="Start Video Meeting"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream 2: Talent Pods & Mentorship */}
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Talent Pod Operations (SOCH ⇄ Talent & Mentors)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-bold">
                    3 Active Pods
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Talent receives task briefs from SOCH leads and reviews code with certified mentors without client noise.
                </p>

                <div className="space-y-2 mt-2">
                  <div className="p-3 bg-white rounded-xl border border-purple-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Bilal Ahmed (Lead UI Pod)</div>
                      <div className="text-[11px] text-slate-500">Task #401 Checkout Module PR • Mentor QA</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigateToChat ? onNavigateToChat('ch-talent-1') : null}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        title="Open Chat"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-102') : null}
                        className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold"
                        title="Start Video Review"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-purple-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Engr. Haris Khan ⇄ Bilal Ahmed</div>
                      <div className="text-[11px] text-slate-500">Senior Architecture Code Audit & Mentoring</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigateToChat ? onNavigateToChat('ch-mentor-1') : null}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        title="Open Chat"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-102') : null}
                        className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold"
                        title="Start Video Review"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: ESCROW & RAAST PAYOUTS ================= */}
      {activeTab === 'escrow' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="pb-4 border-b border-slate-100">
            <h3 className="text-lg font-black text-slate-900">Escrow Milestone Audits & Local Payouts</h3>
            <p className="text-xs text-slate-500">Releases funds to Pakistani freelancers directly through State Bank of Pakistan's Raast / local commercial banks.</p>
          </div>

          <div className="space-y-3">
            {tasksList.map((task) => (
              <div key={task.id} className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-black text-slate-900">{task.title}</h4>
                  <p className="text-xs text-slate-500">
                    Project: {task.projectName} • Supervised by: <strong className="text-purple-700">{task.qaLead}</strong>
                  </p>
                </div>

                <div className="flex items-center space-x-3 self-start sm:self-auto">
                  <div className="text-right">
                    <div className="text-sm font-black text-slate-900">PKR {task.rewardPkr.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{task.status}</div>
                  </div>

                  <button className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Authorize Raast Payout</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 4: AI POD MATCHMAKER RULES ================= */}
      {activeTab === 'matching' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900">AI Pod Matchmaker Configuration</h3>
          <p className="text-xs text-slate-500">Rules controlling the automated assembly of Junior Talent + Senior Mentor Lead + AI Coding Agent pods.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">Minimum Capstone Requirement</span>
              <p className="text-xs text-slate-600">Talent must have 5 approved real projects before joining client-facing pods.</p>
              <div className="text-xs font-extrabold text-emerald-700">Enforced 100%</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">Mentor QA Revenue Allocation</span>
              <p className="text-xs text-slate-600">Exact 10% of every project budget is automatically locked for the assigned Senior Mentor code audit.</p>
              <div className="text-xs font-extrabold text-emerald-700">Active (Page 6 Blueprint)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
