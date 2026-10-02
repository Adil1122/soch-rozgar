import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  FolderCheck, 
  Cpu, 
  BadgeDollarSign, 
  TrendingUp, 
  Users, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  Target, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  FlaskConical, 
  Camera, 
  Lightbulb, 
  HeartHandshake,
  Search,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { STAGES_DATA, ECOSYSTEM_PILLARS } from '../data/sochData';
import { StageItem, EcosystemPillar } from '../types/soch';

import margallaPanorama from '../assets/images/margalla_panorama_1790585298399.jpg';
import pakistaniLearner from '../assets/images/pakistani_learner_1790585316710.jpg';
import pakistaniClient from '../assets/images/pakistani_client_1790585335681.jpg';
import youthCollaborating from '../assets/images/youth_collaborating_1790585352045.jpg';

interface NetworkPosterProps {
  onSelectStage: (stage: StageItem) => void;
  onSelectPillar: (pillar: EcosystemPillar) => void;
  onOpenSimulator: () => void;
}

export const NetworkPoster: React.FC<NetworkPosterProps> = ({
  onSelectStage,
  onSelectPillar,
  onOpenSimulator,
}) => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <div className="relative w-full mx-auto bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border border-slate-200/80 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden my-2 sm:my-4">
      {/* Background Panorama Banner with Margalla Hills */}
      <div className="absolute top-0 left-0 right-0 h-96 sm:h-[480px] overflow-hidden opacity-35 pointer-events-none select-none">
        <img
          src={margallaPanorama}
          alt="Margalla Hills Islamabad"
          className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-white/80 to-white"></div>
      </div>

      <div className="relative z-10 p-3 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* ================= TOP HEADER ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-slate-200/80 pb-6">
          {/* Left: SOCH Rozgar Brand Logo */}
          <div className="flex items-center space-x-3.5">
            <div className="flex items-center tracking-tight">
              <span className="text-4xl sm:text-5xl font-black text-slate-800">S</span>
              <div className="relative inline-flex items-center justify-center mx-1">
                <span className="text-4xl sm:text-5xl font-black text-slate-800">O</span>
                {/* Embedded Sprout Leaf Icon inside O */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-xs">
                    <span className="text-white text-xs sm:text-sm">🌱</span>
                  </div>
                </div>
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-800">CH</span>
              <span className="ml-2.5 text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-600">Rozgar</span>
            </div>
            <div className="border-l-2 border-emerald-600 pl-3.5">
              <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-emerald-800">
                SOCH Rozgar
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Pakistan's Autonomous Talent-to-Income Network
              </p>
            </div>
          </div>

          {/* Center Title & Subtitle */}
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pakistan's Talent-to-Income Network
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800">
              <span className="hover:underline cursor-pointer">Discover your talent</span>
              <span className="text-emerald-400">•</span>
              <span className="hover:underline cursor-pointer">Build your skills</span>
              <span className="text-emerald-400">•</span>
              <span className="hover:underline cursor-pointer">Get real work</span>
              <span className="text-emerald-400">•</span>
              <span className="hover:underline cursor-pointer">Earn and grow</span>
            </div>
          </div>

          {/* Right: Signature Cursive Badge */}
          <div className="text-center lg:text-right">
            <div className="font-handwriting text-2xl sm:text-3xl text-emerald-700 font-bold leading-tight -rotate-2 transform">
              <div>Real People</div>
              <div className="text-teal-600">Real Skills</div>
              <div className="text-slate-800">Real Opportunities</div>
            </div>
          </div>
        </div>

        {/* ================= 3-COLUMN MAIN SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= LEFT COLUMN: YOU HAVE TALENT ================= */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all">
            <div>
              {/* Photo of young Pakistani learner with backpack */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 shadow-inner border border-slate-100 group">
                <img
                  src={pakistaniLearner}
                  alt="Young Pakistani aspiring talent"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    🇵🇰 Young Potential in Pakistan
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                You Have Talent
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4">
                But you may not have...
              </p>

              {/* The 5 Missing Links Pills */}
              <div className="space-y-2.5">
                {[
                  { text: 'Right direction', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200' },
                  { text: 'Quality training', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-50 border-blue-200' },
                  { text: 'Real projects', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-200' },
                  { text: 'Client access', icon: ShieldCheck, color: 'text-indigo-500', bg: 'bg-indigo-50 border-indigo-200' },
                  { text: 'Support & guidance', icon: Wrench, color: 'text-teal-500', bg: 'bg-teal-50 border-teal-200' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl border ${item.bg} transition-all hover:scale-[1.02] cursor-default`}
                    >
                      <div className={`p-1.5 rounded-lg bg-white shadow-2xs ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left Column Bottom Handwritten Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <div className="font-handwriting text-xl sm:text-2xl text-emerald-700 font-bold leading-tight">
                "You're not alone.<br />We're here to help."
              </div>
              <button
                onClick={onOpenSimulator}
                className="mt-3 w-full inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test 11D Assessment</span>
              </button>
            </div>
          </div>

          {/* ================= CENTER COLUMN: 8-STAGE ENGINE ================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative bg-gradient-to-br from-emerald-50/40 via-white/90 to-sky-50/40 rounded-3xl p-4 sm:p-6 border border-emerald-100/80 shadow-md">
            
            {/* Top Helper */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                The 8-Stage Virtuous Engine
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Click any stage to view the full operational blueprint</p>
            </div>

            {/* Circular / Grid 8 Stages Layout */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 relative">
              
              {/* STAGE 1: Discover Yourself */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[0])}
                onMouseEnter={() => setHoveredStage(1)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-teal-400/80 hover:border-teal-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        1
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-teal-600 transition-colors">
                        Discover Yourself
                      </h4>
                    </div>
                    <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    We understand your interests, skills, personality and goals with AI + expert guidance.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-2.5 border border-teal-200">
                  <div className="flex items-center justify-between text-[10px] text-teal-900 font-bold mb-1">
                    <span>AI Profile Evaluation</span>
                    <span className="text-emerald-700">11 Dimensions</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-1.5 w-4 bg-teal-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* STAGE 2: Learn & Improve */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[1])}
                onMouseEnter={() => setHoveredStage(2)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-sky-400/80 hover:border-sky-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        2
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                        Learn & Improve
                      </h4>
                    </div>
                    <GraduationCap className="w-4 h-4 text-sky-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Get structured learning paths, coaching, and practice with real projects.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-2.5 border border-sky-200">
                  <div className="flex items-center justify-between text-[10px] text-sky-900 font-bold mb-1">
                    <span>Structured Path: Figma & AI</span>
                    <span className="text-sky-700">Live Coach</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                    <span>1-on-1 Mentorship & Hands-on Lab</span>
                  </div>
                </div>
              </div>

              {/* STAGE 3: Build Portfolio */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[2])}
                onMouseEnter={() => setHoveredStage(3)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-indigo-400/80 hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        3
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        Build Portfolio
                      </h4>
                    </div>
                    <FolderCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Work on real tasks, get certified and showcase your skills.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-2.5 border border-indigo-200 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-indigo-900">5 Real Tasks Completed</div>
                    <div className="text-[9px] text-indigo-600 font-semibold">Verified Proof-of-Work</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white font-extrabold text-[9px] flex items-center gap-1 shadow-2xs">
                    <span>✓</span> Certified
                  </span>
                </div>
              </div>

              {/* STAGE 4: Get Matched with Projects */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[3])}
                onMouseEnter={() => setHoveredStage(4)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-orange-400/80 hover:border-orange-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        4
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                        Get Matched
                      </h4>
                    </div>
                    <Cpu className="w-4 h-4 text-orange-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Our AI and team connect you with the right clients and projects — no more client hunting.
                  </p>
                </div>
                {/* Visual snippet: "Recommended for you" cards from graphic */}
                <div className="mt-3 bg-orange-50/90 rounded-xl p-2 border border-orange-200 space-y-1">
                  <div className="text-[9px] font-bold text-orange-900 flex justify-between">
                    <span>Recommended For You</span>
                    <span className="text-orange-600 font-extrabold">Instant Match</span>
                  </div>
                  <div className="flex items-center justify-between bg-white px-2 py-1 rounded text-[9px] font-bold text-slate-800 shadow-2xs">
                    <span>🌐 Website Dev</span>
                    <span className="text-emerald-600">$800 · 5d</span>
                  </div>
                  <div className="flex items-center justify-between bg-white px-2 py-1 rounded text-[9px] font-bold text-slate-800 shadow-2xs">
                    <span>🎨 Social Media Design</span>
                    <span className="text-emerald-600">$250 · 3d</span>
                  </div>
                </div>
              </div>

              {/* CENTER CORE: SOCH PLATFORM CIRCLE */}
              <div className="sm:col-span-2 my-2 py-4 px-6 bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-400/40 relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center text-2xl font-black shrink-0">
                    🌱
                  </div>
                  <div>
                    <div className="text-xl font-black tracking-wider flex items-center gap-1.5">
                      SOCH <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/30 text-emerald-100 font-semibold uppercase tracking-wider">Engine</span>
                    </div>
                    <div className="text-xs text-emerald-100/90 font-medium">
                      Economic Backbone of Pakistan's Youth
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-white">
                  <span className="px-2.5 py-1 bg-white/15 rounded-lg">Learn</span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 bg-white/15 rounded-lg">Build</span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 bg-white/15 rounded-lg">Work</span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 bg-white/15 rounded-lg">Earn</span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 bg-white/15 rounded-lg">Grow</span>
                </div>
              </div>

              {/* STAGE 5: Work & Earn */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[4])}
                onMouseEnter={() => setHoveredStage(5)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-emerald-400/80 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        5
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                        Work & Earn
                      </h4>
                    </div>
                    <BadgeDollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Deliver your work, get paid securely, and build your reputation.
                  </p>
                </div>
                {/* Visual snippet: "Payment Received!" from graphic */}
                <div className="mt-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-2.5 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
                    <div>
                      <div className="text-[10px] font-black text-emerald-900">Payment Received!</div>
                      <div className="text-[9px] text-emerald-700 font-semibold">Direct Raast / Bank Payout</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-emerald-800 bg-white px-2 py-0.5 rounded shadow-2xs">$800</span>
                </div>
              </div>

              {/* STAGE 6: Grow Your Skills */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[5])}
                onMouseEnter={() => setHoveredStage(6)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-cyan-400/80 hover:border-cyan-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-cyan-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        6
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                        Grow Your Skills
                      </h4>
                    </div>
                    <TrendingUp className="w-4 h-4 text-cyan-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Advanced courses, new tools, mentorship and career guidance to reach the next level.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl p-2.5 border border-cyan-200">
                  <div className="flex items-center justify-between text-[10px] text-cyan-900 font-bold mb-1">
                    <span>Advanced Upskilling</span>
                    <span className="text-cyan-700 font-extrabold">Next Tier</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-slate-600">
                    <span>Agentic AI & Lead Engineering</span>
                    <span className="font-bold text-emerald-600">+45% Rate</span>
                  </div>
                </div>
              </div>

              {/* STAGE 7: Become a Mentor */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[6])}
                onMouseEnter={() => setHoveredStage(7)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-purple-400/80 hover:border-purple-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        7
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                        Become a Mentor
                      </h4>
                    </div>
                    <Users className="w-4 h-4 text-purple-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Share your knowledge, help others and earn extra income.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-2.5 border border-purple-200 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-purple-900">Lead QA Audits & Coaching</div>
                    <div className="text-[9px] text-purple-700 font-semibold">Earn Extra Revenue</div>
                  </div>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-purple-600 text-white shadow-2xs">
                    +$100 / Proj
                  </span>
                </div>
              </div>

              {/* STAGE 8: Build Your Own Business */}
              <div
                onClick={() => onSelectStage(STAGES_DATA[7])}
                onMouseEnter={() => setHoveredStage(8)}
                onMouseLeave={() => setHoveredStage(null)}
                className="group relative bg-white rounded-2xl p-4 border-2 border-rose-400/80 hover:border-rose-600 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        8
                      </span>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-rose-600 transition-colors">
                        Build Your Business
                      </h4>
                    </div>
                    <Rocket className="w-4 h-4 text-rose-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Use your skills, network and experience to create your future opportunities.
                  </p>
                </div>
                {/* Visual snippet matching graphic */}
                <div className="mt-3 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-2.5 border border-rose-200 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-rose-900">Agency Pod Founder</div>
                    <div className="text-[9px] text-rose-700 font-semibold">Hire Fellow Pakistanis</div>
                  </div>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-rose-600 text-white shadow-2xs">
                    Ecosystem Effect
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: CLIENTS GET REAL SOLUTIONS ================= */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all">
            <div>
              {/* Photo of sharp Pakistani tech client / entrepreneur */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 shadow-inner border border-slate-100 group">
                <img
                  src={pakistaniClient}
                  alt="Enterprise tech client"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    💼 Global & Domestic Employers
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                Clients Get Real Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4">
                Not just freelancers — but verified talent and teams.
              </p>

              {/* The 6 Client Guarantees */}
              <div className="space-y-2.5">
                {[
                  { text: 'Pre-vetted skilled talent', icon: CheckCircle2 },
                  { text: 'Project-based or dedicated teams', icon: Users },
                  { text: 'Quality assurance & monitoring', icon: ShieldCheck },
                  { text: 'Transparent communication', icon: Zap },
                  { text: 'On-time delivery', icon: Target },
                  { text: 'Secure payments', icon: BadgeDollarSign },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-all hover:scale-[1.02] cursor-default"
                    >
                      <div className="p-1 rounded-full bg-emerald-600 text-white">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column Bottom Handwritten Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <div className="font-handwriting text-xl sm:text-2xl text-emerald-700 font-bold leading-tight">
                "Your goals.<br />Our commitment."
              </div>
              <div className="mt-3 text-[11px] text-slate-400 font-medium">
                100% Outcome Guarantee • SLA Backed
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: THE SOCH ECOSYSTEM ================= */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white p-6 sm:p-8 overflow-hidden shadow-xl border border-emerald-800/60">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-emerald-800/60 pb-6 mb-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                A Complete Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                The SOCH Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl">
                More than a platform. It's a complete economic empowerment ecosystem for Pakistan's youth.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src={youthCollaborating}
                alt="Youth collaborating outdoors in Islamabad"
                className="w-20 h-14 object-cover rounded-xl border border-emerald-700/60 shadow-md hidden sm:block"
              />
              <div className="text-right">
                <div className="font-handwriting text-xl sm:text-2xl text-emerald-300 font-bold">
                  "A Skilled Pakistan, A Brighter Future"
                </div>
                <div className="text-[11px] text-emerald-200/80 font-medium">
                  Empowering Talent Across Every Province
                </div>
              </div>
            </div>
          </div>

          {/* 8 Crisp Colored Ecosystem Pillar Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {ECOSYSTEM_PILLARS.map((pillar) => {
              const iconMap: Record<string, any> = {
                BookOpen,
                FlaskConical,
                Camera,
                Rocket,
                Cpu,
                Lightbulb,
                Users,
                HeartHandshake,
              };
              const Icon = iconMap[pillar.iconName] || BookOpen;

              return (
                <div
                  key={pillar.id}
                  onClick={() => onSelectPillar(pillar)}
                  className="group rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-emerald-700/50 bg-emerald-900/60 hover:bg-emerald-850/80"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-2 shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">{pillar.name}</div>
                  <div 
                    className="text-[11px] font-bold uppercase tracking-wider mt-0.5"
                    style={{ color: pillar.color }}
                  >
                    {pillar.action}
                  </div>
                </div>
              );
            })}
          </div>

          {/* From Potential to Prosperity Continuous Pipeline */}
          <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-col items-center">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
              From Potential to Prosperity
            </div>
            
            <div className="w-full flex items-center justify-between overflow-x-auto no-scrollbar py-2 text-xs sm:text-sm font-bold text-white gap-2 sm:gap-4">
              {[
                { title: 'Discover', icon: '🔍' },
                { title: 'Learn', icon: '📚' },
                { title: 'Build', icon: '⚙️' },
                { title: 'Work', icon: '💼' },
                { title: 'Earn', icon: '💵' },
                { title: 'Grow', icon: '📈' },
                { title: 'Create Opportunities for Others', icon: '🤝' },
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center space-x-1.5 shrink-0 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-white hover:border-emerald-400 transition-colors">
                    <span>{step.icon}</span>
                    <span>{step.title}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-emerald-400 font-extrabold shrink-0 text-sm">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
