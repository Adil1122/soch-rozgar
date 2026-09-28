import React, { useState } from 'react';
import { BadgeDollarSign, Percent, ShieldCheck, Users, Briefcase, Bot, Building2, GraduationCap } from 'lucide-react';
import { REVENUE_STREAMS } from '../data/sochData';

export const EconomicsCalculator: React.FC = () => {
  const [projectBudget, setProjectBudget] = useState<number>(1000);

  // Conversion rate approx 280 PKR / USD
  const pkrRate = 280;

  const talentShare = Math.round(projectBudget * 0.65);
  const platformShare = Math.round(projectBudget * 0.25);
  const qaShare = Math.round(projectBudget * 0.10);

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 6 & 7 • Business Model Architecture
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Managed Talent Marketplace Economics
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          SOCH is not an open, uncurated bidding directory. It operates as a managed outcome provider with transparent unit economics that incentivize quality, mentorship, and platform sustainability.
        </p>
      </div>

      {/* Interactive Project Budget Calculator */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Interactive Revenue Split Simulator
            </span>
            <h3 className="text-2xl font-black text-slate-900">
              Sample Project Value: ${projectBudget.toLocaleString()} USD
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              ≈ PKR {(projectBudget * pkrRate).toLocaleString()}
            </span>
          </div>

          <div className="w-full md:w-72">
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
              <span>$500</span>
              <span className="text-emerald-600 font-extrabold">${projectBudget.toLocaleString()}</span>
              <span>$10,000</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="100"
              value={projectBudget}
              onChange={(e) => setProjectBudget(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>
        </div>

        {/* 3 Pillars of Economic Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Talent Share */}
          <div className="p-6 rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                65% Allocation
              </span>
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-black text-emerald-900">
                ${talentShare.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-emerald-700">
                ≈ PKR {(talentShare * pkrRate).toLocaleString()}
              </div>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mt-3">
              Talent / Delivery Pod
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Paid directly to the creators, developers, and apprentices upon approved milestone completion. No delayed holds.
            </p>
          </div>

          {/* Platform Share */}
          <div className="p-6 rounded-2xl border-2 border-blue-400 bg-blue-50/50 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                25% Allocation
              </span>
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-black text-blue-900">
                ${platformShare.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-blue-700">
                ≈ PKR {(platformShare * pkrRate).toLocaleString()}
              </div>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mt-3">
              SOCH Platform Operations
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Powers AI candidate matching, global client marketing, international billing infrastructure, and server compute.
            </p>
          </div>

          {/* Mentor & QA Operations */}
          <div className="p-6 rounded-2xl border-2 border-purple-400 bg-purple-50/50 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                10% Allocation
              </span>
              <ShieldCheck className="w-5 h-5 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-black text-purple-900">
                ${qaShare.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-purple-700">
                ≈ PKR {(qaShare * pkrRate).toLocaleString()}
              </div>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mt-3">
              Mentor Review & QA Guarantee
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Paid to senior mentors who conduct code/design quality audits and guarantee deliverable acceptance to the client.
            </p>
          </div>
        </div>

        {/* Note from PDF */}
        <div className="mt-6 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
          <em>*These figures are structured as illustrative benchmarks from Page 6 of the SOCH blueprint. Final percentages adapt by service tier, volume, and complexity.</em>
        </div>
      </div>

      {/* The 6 Diversified Revenue Streams from Page 6 & 7 */}
      <div>
        <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
          <BadgeDollarSign className="w-5 h-5 text-emerald-600" />
          The 6 Revenue Engines of the SOCH Network
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVENUE_STREAMS.map((stream) => {
            const iconMap: Record<string, any> = {
              Percent,
              GraduationCap,
              Building2,
              Users2: Users,
              Briefcase,
              Bot,
            };
            const Icon = iconMap[stream.icon] || BadgeDollarSign;

            return (
              <div
                key={stream.number}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                      {stream.number}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {stream.percentageOrModel}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    {stream.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    {stream.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
