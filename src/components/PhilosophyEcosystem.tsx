import React from 'react';
import { Sparkles, Heart, Compass, Eye, Hammer, SunMedium, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { ECOSYSTEM_PILLARS } from '../data/sochData';
import { EcosystemPillar } from '../types/soch';

interface PhilosophyEcosystemProps {
  onSelectPillar: (pillar: EcosystemPillar) => void;
}

export const PhilosophyEcosystem: React.FC<PhilosophyEcosystemProps> = ({ onSelectPillar }) => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 9 & 10 • Core Philosophy & Ecosystem
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          The SOCH Philosophy & Upward Mobility
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          <em>"Do not make a person on this platform just a worker. Someone who starts earning through the platform should eventually become someone who provides work to others. That is the ecosystem effect."</em>
        </p>
      </div>

      {/* Philosophy Cards: Seek, Observe, Create, Hope */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            letter: 'S',
            word: 'Seek',
            meaning: 'Discover your direction',
            urdu: 'تلاش',
            icon: Compass,
            color: 'from-teal-500 to-emerald-600',
            textColor: 'text-teal-600',
            bg: 'bg-teal-50 border-teal-200'
          },
          {
            letter: 'O',
            word: 'Observe',
            meaning: 'Identify problems & opportunities',
            urdu: 'مشاہدہ',
            icon: Eye,
            color: 'from-blue-500 to-sky-600',
            textColor: 'text-sky-600',
            bg: 'bg-sky-50 border-sky-200'
          },
          {
            letter: 'C',
            word: 'Create',
            meaning: 'Build something valuable',
            urdu: 'تخلیق',
            icon: Hammer,
            color: 'from-violet-500 to-purple-600',
            textColor: 'text-purple-600',
            bg: 'bg-purple-50 border-purple-200'
          },
          {
            letter: 'H',
            word: 'Hope',
            meaning: 'Believe in a better future',
            urdu: 'امید',
            icon: SunMedium,
            color: 'from-amber-500 to-orange-600',
            textColor: 'text-amber-600',
            bg: 'bg-amber-50 border-amber-200'
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={`p-5 rounded-2xl border ${item.bg} shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between">
                  <span className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} text-white font-black text-lg flex items-center justify-center shadow-xs`}>
                    {item.letter}
                  </span>
                  <span className="font-urdu text-sm font-bold text-slate-500">{item.urdu}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mt-3">{item.word}</h3>
                <p className="text-xs text-slate-600 mt-1 font-medium">{item.meaning}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* The Upward Mobility Ladder */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          The 9-Stage Upward Mobility Pathway
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          From an anxious learner to an employer who hires others.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2">
          {[
            { step: '1. Discover', desc: 'Assess potential' },
            { step: '2. Learn', desc: 'Fundamentals' },
            { step: '3. Practice', desc: 'Hands-on drills' },
            { step: '4. Portfolio', desc: '5 real tasks' },
            { step: '5. Certified', desc: 'Vetted badge' },
            { step: '6. Work & Earn', desc: 'Direct matching' },
            { step: '7. Mentor', desc: 'QA audits' },
            { step: '8. Lead Pods', desc: 'Run projects' },
            { step: '9. Own Agency', desc: 'Hire others' },
          ].map((node, nIdx) => (
            <div key={nIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors">
              <div className="text-xs font-black text-slate-900">{node.step}</div>
              <div className="text-[10px] text-slate-500 mt-1">{node.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The Core Creed Quote */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-emerald-400 font-bold max-w-3xl mx-auto leading-relaxed">
          "Talent should not remain unemployed because opportunity was unavailable."
        </div>
        <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium font-urdu">
          ہنر مند افراد بے روزگار نہ رہیں صرف اس لیے کہ موقع میسر نہیں تھا
        </p>
      </div>
    </div>
  );
};
