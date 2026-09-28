import React from 'react';
import { AlertCircle, CheckCircle, ArrowRight, XCircle, Zap, ShieldCheck } from 'lucide-react';
import { BROKEN_LINKS } from '../data/sochData';

export const ProblemVsSolution: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 1 & 5 of SOCH Rozgar Blueprint
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          What Is The Real Problem?
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          The problem in Pakistan is <strong>not simply that people lack skills</strong>. The talent and passion already exist in abundance. The challenge is structural.
        </p>
      </div>

      {/* The 6 Real Structural Broken Links */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          The 6 Broken Links in Pakistan's Talent Ecosystem
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BROKEN_LINKS.map((link, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <span className="font-extrabold text-slate-800 text-sm">{link.problem}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold">
                  ❌ {link.gap}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-800 font-medium flex items-start gap-2 pt-1">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>SOCH Fix:</strong> {link.sochAnswer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Freelancer Trap vs SOCH Model Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* The Upwork / Fiverr Trap */}
        <div className="bg-rose-50/60 rounded-2xl border-2 border-rose-200 p-6 shadow-sm">
          <div className="flex items-center space-x-2 text-rose-700 font-extrabold text-base mb-3">
            <XCircle className="w-5 h-5 text-rose-600" />
            <span>The Traditional Freelancing Trap (Fiverr / Upwork)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-4 italic">
            "Show your skills and find a client."
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-rose-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-700">1. Young person creates gig</span>
              <span className="text-slate-400">Zero portfolio proof</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-700">2. Submits 50 proposals</span>
              <span className="text-rose-600 font-bold">Competing with 50+ bids</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-700">3. Race to the bottom</span>
              <span className="text-slate-500">Unpaid samples & $5 gigs</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-rose-700">4. Frustration & drop out</span>
              <span className="text-rose-600 font-extrabold">90% quit in 60 days</span>
            </div>
          </div>
        </div>

        {/* The SOCH Rozgar Managed Pipeline */}
        <div className="bg-emerald-50/70 rounded-2xl border-2 border-emerald-300 p-6 shadow-md">
          <div className="flex items-center space-x-2 text-emerald-800 font-extrabold text-base mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>The SOCH Managed Network Model</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 mb-4 font-semibold">
            "We understand you, identify your potential, make you market-ready, and connect you with real work."
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-800">1. 11D Psychometric + Skill Discovery</span>
              <span className="text-emerald-700 font-semibold">AI + Human Mentors</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-800">2. Structured Curriculum & 5 Real Tasks</span>
              <span className="text-emerald-700 font-semibold">Verified Portfolio</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-800">3. Direct AI Project Routing</span>
              <span className="text-emerald-700 font-extrabold">No More Client Hunting!</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-emerald-800">4. Team Delivery & Career Growth</span>
              <span className="text-emerald-600 font-extrabold">Predictable Income</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Core Difference Highlight */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
            The Fundamental Paradigm Shift
          </div>
          <h4 className="text-lg sm:text-xl font-bold">
            The Talent's Primary Responsibility Changes Forever:
          </h4>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">
            "Improve your skills and do excellent work. The platform will handle marketing, vetting, client trust, escrow, and opportunity generation."
          </p>
        </div>
        <div className="shrink-0 text-center bg-white/10 px-6 py-4 rounded-xl border border-white/20">
          <div className="text-2xl font-black text-emerald-400">0</div>
          <div className="text-xs text-white uppercase font-bold tracking-wide">Proposals Needed</div>
        </div>
      </div>
    </div>
  );
};
