import React, { useState } from 'react';
import { 
  Sparkles, 
  Video, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Target, 
  TrendingUp, 
  Layers, 
  Clock, 
  DollarSign, 
  Award, 
  BookOpen, 
  Play, 
  Pause,
  RotateCcw,
  Upload,
  UserCheck,
  ChevronRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { UserProfile, AssignedTask, SkillTestResult, RoadmapMilestone } from '../types/platform';

interface TalentDashboardProps {
  profile: UserProfile;
  assignedTasks: AssignedTask[];
  onUpdateTaskProgress: (taskId: string, newProgress: number, newStatus?: AssignedTask['status']) => void;
  onNavigateToMentors: () => void;
  onNavigateToChat?: (channelId?: string) => void;
  onLaunchVideoCall?: (sessionId?: string) => void;
}

export const TalentDashboard: React.FC<TalentDashboardProps> = ({
  profile,
  assignedTasks,
  onUpdateTaskProgress,
  onNavigateToMentors,
  onNavigateToChat,
  onLaunchVideoCall
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'interview' | 'tests' | 'roadmap' | 'tasks'>('overview');
  const [isRecording, setIsRecording] = useState(false);
  const [videoSubmitted, setVideoSubmitted] = useState(profile.talentDetails?.videoInterviewStatus === 'passed');
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'frontend' | 'ui' | 'soft'>('all');

  const talent = profile.talentDetails;

  return (
    <div className="space-y-6">
      {/* Top Welcome & Verification Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-emerald-800/60">
        <div className="absolute -right-8 -top-8 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center space-x-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{profile.name}</h1>
                <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-extrabold uppercase tracking-wide flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {talent?.level || 'Market-Ready Talent'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  📍 {profile.city}, {profile.province}
                </span>
              </div>
              <p className="text-emerald-100/90 text-sm mt-1 max-w-2xl">
                Track: <strong className="text-white">{talent?.track}</strong> • Verified ID: <span className="font-mono text-emerald-300">{profile.id}</span>
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1">
            <div className="bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[100px]">
              <div className="text-xs text-emerald-200 uppercase font-bold">Earnings</div>
              <div className="text-lg font-black text-emerald-300">
                PKR {talent?.earningsPkr.toLocaleString()}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
              <div className="text-xs text-emerald-200 uppercase font-bold">Tasks Done</div>
              <div className="text-lg font-black text-white">
                {talent?.completedTasksCount}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
              <div className="text-xs text-emerald-200 uppercase font-bold">AI Diagnostic</div>
              <div className="text-lg font-black text-emerald-400">
                {talent?.assessmentScore}%
              </div>
            </div>
          </div>
        </div>

        {/* Talent Sub Navigation */}
        <div className="mt-6 pt-5 border-t border-emerald-800/60 flex items-center space-x-2 overflow-x-auto no-scrollbar text-xs">
          {[
            { id: 'overview', label: 'Dashboard & Passion' },
            { id: 'interview', label: 'AI Video Interview & Feedback' },
            { id: 'tests', label: 'Skill Tests & Mistakes Log' },
            { id: 'roadmap', label: 'My Growth Roadmap' },
            { id: 'tasks', label: `Assigned Tasks (${assignedTasks.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeSubTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md scale-102'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= 1. OVERVIEW & PASSION ================= */}
      {activeSubTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Passion Narrative & AI Profile */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Your Declared Passion & Goal</h3>
                    <p className="text-xs text-slate-500">Captured during Stage 1: Discover Yourself</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  AI Aligned
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-sm text-slate-700 leading-relaxed italic">
                "{talent?.passionStory}"
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Recognized Competency Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {talent?.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold text-xs"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Assigned Tasks Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Current Assigned Work</h3>
                  <p className="text-xs text-slate-500">Live projects with verified milestone escrow</p>
                </div>
                <button
                  onClick={() => setActiveSubTab('tasks')}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>View All Tasks</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {assignedTasks.slice(0, 2).map((task) => (
                  <div key={task.id} className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 transition-all bg-slate-50/60">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                          {task.projectName}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">{task.title}</h4>
                      </div>
                      <span className="text-xs font-black text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        PKR {task.rewardPkr.toLocaleString()}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                        <span>Milestone Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full transition-all"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Assigned Mentor Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                <UserCheck className="w-4 h-4" />
                <span>Assigned SOCH Mentor</span>
              </div>

              {talent?.mentorAssigned ? (
                <div className="text-center p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                  <img
                    src={talent.mentorAssigned.avatar}
                    alt={talent.mentorAssigned.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-emerald-400 shadow-md"
                  />
                  <h4 className="text-base font-extrabold text-slate-900 mt-2">
                    {talent.mentorAssigned.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {talent.mentorAssigned.category} Lead
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Conducts weekly 1-on-1 code reviews, audits capstones, and unlocks client project matching.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigateToChat ? onNavigateToChat('ch-mentor-1') : onNavigateToMentors()}
                      className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat Mentor</span>
                    </button>
                    <button
                      onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-102') : null}
                      className="py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <Video className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Video Review</span>
                    </button>
                  </div>
                  <button
                    onClick={onNavigateToMentors}
                    className="mt-2 w-full py-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-emerald-100/60 font-semibold text-xs transition-colors"
                  >
                    View All Mentors Directory →
                  </button>
                </div>
              ) : (
                <div className="text-center p-4">
                  <p className="text-xs text-slate-500">No mentor assigned yet.</p>
                </div>
              )}
            </div>

            {/* Stage Progress summary */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 shadow-md border border-slate-700">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>SOCH Talent Status</span>
              </div>
              <h4 className="text-lg font-black">Level 3: Verified Commercial</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                You are currently in Phase 3 of the SOCH lifecycle: delivering team-based work with direct Raast payouts.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-700 flex justify-between text-xs text-emerald-300">
                <span>Next Rank: Senior Mentor Lead</span>
                <span className="font-bold">+$100/audit</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. AI VIDEO INTERVIEW & FEEDBACK ================= */}
      {activeSubTab === 'interview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Stage 1: AI Video Diagnostic
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  Asynchronous Video Interview & AI Analysis
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                  Candidates record a 3-minute video answering questions about their passion, problem-solving methodology, and English clarity. AI analyzes tone, technical depth, and highlights actionable mistakes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-103') : null}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md flex items-center gap-1.5 transition-all"
                >
                  <Video className="w-4 h-4 text-white" />
                  <span>Launch Live Video Interview Room</span>
                </button>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Status: AI Audited & Verified
                </span>
              </div>
            </div>

            {/* Video Player & Live Recording Simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between aspect-video relative shadow-inner">
                {/* Simulated Webcam View */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={profile.avatar}
                    alt="Candidate Recording"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>

                {/* Top overlay badge */}
                <div className="relative z-10 p-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                    <span className="font-bold uppercase tracking-wide">Candidate Interview Recording</span>
                  </div>
                  <span className="bg-black/60 px-2.5 py-1 rounded-md font-mono">03:14 / 05:00</span>
                </div>

                {/* Bottom Overlay Controls */}
                <div className="relative z-10 p-4 flex items-center justify-between text-white">
                  <div className="text-xs">
                    <div className="font-bold">{profile.name}</div>
                    <div className="text-slate-300 text-[10px]">Topic: State Management & Client Communication</div>
                  </div>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold flex items-center space-x-1.5 shadow-md transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Re-record Practice</span>
                  </button>
                </div>
              </div>

              {/* AI Real-Time Feedback Scores */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    AI Evaluation Metrics (0-100)
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Delivery Confidence & Composure</span>
                        <span className="text-emerald-700">{talent?.aiVideoFeedback?.confidence}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${talent?.aiVideoFeedback?.confidence}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Clarity & Structure of Thought</span>
                        <span className="text-emerald-700">{talent?.aiVideoFeedback?.clarity}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${talent?.aiVideoFeedback?.clarity}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Technical Depth & Nuance</span>
                        <span className="text-emerald-700">{talent?.aiVideoFeedback?.technicalDepth}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${talent?.aiVideoFeedback?.technicalDepth}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Professional English Communication</span>
                        <span className="text-emerald-700">{talent?.aiVideoFeedback?.englishProficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${talent?.aiVideoFeedback?.englishProficiency}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                  <div className="font-extrabold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>AI Evaluator Summary:</span>
                  </div>
                  <p className="leading-relaxed">
                    "{talent?.aiVideoFeedback?.feedbackSummary}"
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths & Mistakes to Avoid Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                <h4 className="text-sm font-extrabold text-emerald-900 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Demonstrated Strengths
                </h4>
                <ul className="space-y-2">
                  {talent?.aiVideoFeedback?.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40">
                <h4 className="text-sm font-extrabold text-amber-900 mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Identified Mistakes & Coaching Corrections
                </h4>
                <ul className="space-y-2">
                  {talent?.aiVideoFeedback?.mistakesToAvoid.map((mis, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <span className="text-amber-600 font-bold">⚠️</span>
                      <span>{mis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 3. SKILL TESTS & MISTAKES LOG ================= */}
      {activeSubTab === 'tests' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Stage 2: Skill Assessments
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  Skill Tests, Mistakes & Recommendations Log
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Unlike traditional platforms where you get rejected without knowing why, SOCH provides transparent logs of every mistake and recommended corrective drill.
                </p>
              </div>

              <button className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center space-x-1.5 self-start">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Take New Skill Diagnostic</span>
              </button>
            </div>

            {/* Test Cards List */}
            <div className="space-y-4 mt-6">
              {talent?.testScores.map((test) => (
                <div key={test.id} className="p-5 rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all bg-white shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {test.category}
                        </span>
                        <span className="text-[11px] text-slate-400">Date: {test.date}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 mt-1">{test.testName}</h3>
                    </div>

                    <div className="flex items-center space-x-3 self-start sm:self-auto">
                      <div className="text-right">
                        <div className="text-2xl font-black text-emerald-600">{test.score}%</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Score</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                        PASSED ✓
                      </span>
                    </div>
                  </div>

                  {/* Mistakes and Recommendations Detailed Log */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-100 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-slate-700">
                      <span className="font-extrabold text-rose-800 block mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        Identified Mistake in Test:
                      </span>
                      {test.mistakes.map((m, mIdx) => (
                        <p key={mIdx} className="text-slate-600">{m}</p>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-slate-700">
                      <span className="font-extrabold text-emerald-800 block mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Prescribed Learning Action:
                      </span>
                      {test.recommendations.map((r, rIdx) => (
                        <p key={rIdx} className="text-slate-600">{r}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= 4. MY GROWTH ROADMAP ================= */}
      {activeSubTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="pb-6 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                End-to-End Progression
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Your Personalized SOCH Rozgar Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
                Talent → Assessment → Development → Certification → Matching → Project → Income → Growth.
                Track each milestone toward economic independence.
              </p>
            </div>

            {/* Visual Roadmap Stepper */}
            <div className="mt-8 space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-200 before:z-0">
              {talent?.roadmapMilestones.map((milestone) => (
                <div key={milestone.id} className="relative z-10 flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white shrink-0 shadow-md ${
                    milestone.status === 'completed'
                      ? 'bg-emerald-600'
                      : milestone.status === 'in_progress'
                      ? 'bg-amber-500 ring-4 ring-amber-100 animate-pulse'
                      : 'bg-slate-300 text-slate-600'
                  }`}>
                    {milestone.status === 'completed' ? '✓' : milestone.phaseNumber}
                  </div>

                  <div className={`flex-1 p-5 rounded-2xl border-2 transition-all ${
                    milestone.status === 'in_progress'
                      ? 'border-amber-400 bg-amber-50/30 shadow-md'
                      : milestone.status === 'completed'
                      ? 'border-emerald-200 bg-white shadow-xs'
                      : 'border-slate-200 bg-slate-50/70 opacity-60'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Phase {milestone.phaseNumber}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900">{milestone.title}</h4>
                      </div>

                      <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide self-start sm:self-auto ${
                        milestone.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : milestone.status === 'in_progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {milestone.status === 'completed' ? 'Completed' : milestone.status === 'in_progress' ? 'In Progress' : 'Locked'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {milestone.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {milestone.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                            • {del}
                          </span>
                        ))}
                      </div>
                      {milestone.grade && (
                        <span className="font-extrabold text-emerald-700">{milestone.grade}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= 5. ASSIGNED TASKS & WORK PROGRESS ================= */}
      {activeSubTab === 'tasks' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Stage 5: Work & Earn
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  Assigned Commercial Tasks & Work Progress
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Deliver high-impact work assigned via AI project routing. Submit deliverables, update completion slider, and trigger mentor review.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-bold bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                <span className="text-slate-500">Total Escrow Value:</span>
                <span className="text-emerald-700 font-extrabold text-sm">
                  PKR {assignedTasks.reduce((acc, t) => acc + t.rewardPkr, 0).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Tasks list */}
            <div className="space-y-6 mt-6">
              {assignedTasks.map((task) => (
                <div key={task.id} className="p-6 rounded-3xl border-2 border-slate-200 bg-white shadow-sm hover:border-emerald-400 transition-all space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {task.projectName}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">Pod: {task.sochDeliveryPod}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mt-1">{task.title}</h3>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => onNavigateToChat ? onNavigateToChat('ch-talent-1') : null}
                        className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold text-xs border border-slate-200 transition-colors flex items-center space-x-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Discuss with SOCH QA</span>
                      </button>

                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                        task.status === 'Approved & Paid'
                          ? 'bg-emerald-100 text-emerald-800'
                          : task.status === 'Under Mentor QA'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {task.status}
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-black text-emerald-700">
                          PKR {task.rewardPkr.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-slate-400 font-semibold">{task.deadline}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {task.milestoneDescription}
                  </p>

                  {/* Interactive Work Progress Slider */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Update Your Milestone Progress:</span>
                      <span className="text-emerald-700 font-black text-sm">{task.progress}% Complete</span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={task.progress}
                      onChange={(e) => {
                        const newProg = Number(e.target.value);
                        const newStatus = newProg === 100 ? 'Under Mentor QA' : 'In Progress';
                        onUpdateTaskProgress(task.id, newProg, newStatus);
                      }}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>Assigned Role: <strong className="text-slate-700">{task.assignedRole}</strong></span>
                      <span>QA Supervisor: <strong className="text-emerald-700">{task.qaLead}</strong></span>
                    </div>
                  </div>

                  {/* Actions & Deliverables Links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">Deliverables:</span>
                      {task.deliverableLinks.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] flex items-center gap-1 transition-colors"
                        >
                          <span>{link.replace('https://', '').substring(0, 24)}...</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      ))}
                    </div>

                    <button
                      onClick={() => onUpdateTaskProgress(task.id, 100, 'Under Mentor QA')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors flex items-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Submit for Mentor QA Sign-Off</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
