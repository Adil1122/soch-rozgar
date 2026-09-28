import React, { useState } from 'react';
import { Users, Bot, ShieldCheck, CheckCircle2, Cpu, Sparkles, Building, Layers } from 'lucide-react';

interface TeamMember {
  role: string;
  type: 'junior' | 'senior' | 'ai' | 'pm';
  name: string;
  badge: string;
  avatar: string;
  responsibility: string;
  monthlyShare: string;
}

export const TeamAssemblyBuilder: React.FC = () => {
  const [activeProject, setActiveProject] = useState<'ecommerce' | 'saas' | 'marketing'>('ecommerce');

  const ecommerceTeam: TeamMember[] = [
    {
      role: 'Project Manager & Lead',
      type: 'pm',
      name: 'Usman Farooq',
      badge: 'Certified Scrum & QA Lead',
      avatar: '👨‍💼',
      responsibility: 'Single point of client contact, milestone signoffs, daily standups & SLA compliance',
      monthlyShare: '$1,200',
    },
    {
      role: 'Senior Full-Stack Engineer',
      type: 'senior',
      name: 'Ayesha Malik',
      badge: '5+ Yrs Cloud Architect',
      avatar: '👩‍💻',
      responsibility: 'Database schema, payment gateway integration, architectural oversight & code reviews',
      monthlyShare: '$2,400',
    },
    {
      role: 'Junior Frontend Apprentice',
      type: 'junior',
      name: 'Hamza Rizvi',
      badge: 'SOCH Academy Graduate',
      avatar: '🧑‍🎓',
      responsibility: 'Builds UI components in Tailwind & React under senior supervision — gains verified commercial hours',
      monthlyShare: '$850',
    },
    {
      role: 'Autonomous AI Coding Agent',
      type: 'ai',
      name: 'SOCH Agentic AI v2',
      badge: 'Automated CI/CD & Unit Tests',
      avatar: '🤖',
      responsibility: 'Generates unit tests, types, boilerplate API routes, and audits accessibility in real-time',
      monthlyShare: 'Integrated',
    },
    {
      role: 'UI/UX & Brand Designer',
      type: 'senior',
      name: 'Zainab Siddiqui',
      badge: 'Figma Systems Lead',
      avatar: '🎨',
      responsibility: 'High-fidelity Figma wireframes, design tokens, responsive checkout flows',
      monthlyShare: '$1,100',
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 4 & 7 • Stage 4: Team-Based Work
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Multi-Disciplinary & Human + AI Pod Architecture
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          Every project does not need to be handled by a lone freelancer. By assembling balanced pods, even junior Pakistani learners gain safe commercial experience under senior oversight while the client gets enterprise-grade guarantees.
        </p>
      </div>

      {/* Real Project Example from PDF */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Live Team Pod Simulation (From Blueprint Page 4)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Project: Complete E-commerce Platform with AI Logistics
            </h3>
          </div>
          <div className="flex items-center space-x-2 text-xs font-bold bg-slate-100 p-2 rounded-xl border border-slate-200">
            <span className="text-slate-600">Client Contract:</span>
            <span className="text-emerald-700 font-extrabold">$5,500 / Milestone</span>
          </div>
        </div>

        {/* Human + AI Team Pod Members */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ecommerceTeam.map((member, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                member.type === 'junior'
                  ? 'border-emerald-300 bg-emerald-50/40'
                  : member.type === 'ai'
                  ? 'border-cyan-300 bg-cyan-50/40'
                  : member.type === 'senior'
                  ? 'border-blue-300 bg-blue-50/40'
                  : 'border-purple-300 bg-purple-50/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl p-1 bg-white rounded-xl shadow-2xs">{member.avatar}</span>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{member.name}</h4>
                    <span className="text-xs font-bold text-slate-600 block">{member.role}</span>
                  </div>
                </div>
              </div>

              <div className="mt-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                  {member.badge}
                </span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {member.responsibility}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Allocated Budget:</span>
                <span className="font-extrabold text-slate-800">{member.monthlyShare}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Magic Equation from Page 4 */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-200">
              The SOCH Force Multiplier Formula (Page 4)
            </span>
            <div className="text-lg sm:text-xl font-extrabold mt-1">
              Junior Talent + Senior Lead + AI Agent + Project Manager
            </div>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
              Inexperienced individuals gain verified commercial portfolio credits without putting client satisfaction at risk. The client pays 40% less than Western agency rates while receiving 100% SLA-backed outcomes.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-xl border border-white/20">
            <ShieldCheck className="w-6 h-6 text-emerald-300" />
            <div className="text-left text-xs font-bold">
              <div>Outcome Guarantee</div>
              <div className="text-emerald-200 font-normal">Platform Assured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
