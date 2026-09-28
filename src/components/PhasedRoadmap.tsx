import React from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Flag } from 'lucide-react';
import { PHASED_ROADMAP } from '../data/sochData';

export const PhasedRoadmap: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 7 & 8 • Strategic Rollout
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          3-Phase Strategic Rollout Roadmap
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          <em>"In the beginning, do not bring every person with every possible skill onto the platform. Start with one focused vertical."</em> Learn how SOCH expands from digital exports to a nationwide network.
        </p>
      </div>

      {/* 3 Phases Cards */}
      <div className="space-y-6">
        {PHASED_ROADMAP.map((phase) => (
          <div
            key={phase.phase}
            className={`rounded-3xl border-2 p-6 sm:p-8 transition-all ${
              phase.phase === 1
                ? 'border-emerald-500 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 shadow-lg'
                : phase.phase === 2
                ? 'border-sky-300 bg-white shadow-md'
                : 'border-slate-300 bg-slate-50/80 shadow-xs'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-xs ${
                  phase.phase === 1 ? 'bg-emerald-600' : phase.phase === 2 ? 'bg-sky-600' : 'bg-slate-700'
                }`}>
                  {phase.phase}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Phase {phase.phase} — {phase.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500">
                    {phase.subtitle}
                  </div>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                phase.phase === 1 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : phase.phase === 2
                  ? 'bg-sky-100 text-sky-800'
                  : 'bg-slate-200 text-slate-700'
              }`}>
                {phase.badge}
              </span>
            </div>

            {/* Domains & Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {phase.domains.map((dom, dIdx) => (
                <div key={dIdx} className="bg-white/80 rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                  <h4 className="text-sm font-extrabold text-slate-900 pb-2 mb-3 border-b border-slate-100">
                    {dom.category}
                  </h4>
                  <ul className="space-y-2">
                    {dom.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {phase.phase === 3 && (
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-emerald-400">At that point:</strong> It is no longer simply a freelancing platform. It transforms into:
                </div>
                <div className="text-base sm:text-lg font-black text-white px-4 py-1.5 rounded-lg bg-emerald-700">
                  Pakistan's Talent-to-Income Network 🇵🇰
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
