import React, { useState } from 'react';
import { STAGES_DATA } from '../data/sochData';
import { StageItem } from '../types/soch';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, BookOpen } from 'lucide-react';

interface LifecycleExplorerProps {
  onSelectStage: (stage: StageItem) => void;
}

export const LifecycleExplorer: React.FC<LifecycleExplorerProps> = ({ onSelectStage }) => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const currentStage = STAGES_DATA.find((s) => s.id === selectedId) || STAGES_DATA[0];

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Interactive Walkthrough
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          The 8-Stage Talent-to-Income Lifecycle
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          Walk step-by-step through how a Pakistani youth enters the platform with raw interest and transforms into a high-earning certified professional, mentor, and employer.
        </p>
      </div>

      {/* Stage Select Carousel / Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {STAGES_DATA.map((stage) => {
          const isSelected = stage.id === selectedId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedId(stage.id)}
              className={`p-3 rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-emerald-600 bg-white shadow-md scale-105'
                  : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div 
                className="w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center mb-1.5 shadow-2xs"
                style={{ backgroundColor: stage.color }}
              >
                {stage.id}
              </div>
              <div className="text-xs font-extrabold text-slate-900 truncate">
                {stage.title}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                {stage.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card for Currently Selected Stage */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Banner with Stage Color */}
        <div 
          className="p-6 sm:p-8 text-white relative overflow-hidden"
          style={{ backgroundColor: currentStage.color }}
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider">
                Stage {currentStage.id} of 8
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2">
                {currentStage.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium mt-1 max-w-2xl">
                "{currentStage.tagline}"
              </p>
            </div>

            <button
              onClick={() => onSelectStage(currentStage)}
              className="self-start md:self-auto px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition-all flex items-center space-x-2"
            >
              <span>Inspect Stage Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stage Content & Key Outputs */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Operational Mechanism
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {currentStage.description}
            </p>

            <div className="mt-6 flex items-center space-x-2 text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>PDF Source:</strong> {currentStage.pdfReference}</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Key Outputs & Quality Checkpoints
            </h4>
            <ul className="space-y-3">
              {currentStage.keyOutputs.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step Navigation Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            disabled={selectedId === 1}
            onClick={() => setSelectedId((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 text-xs font-bold text-slate-700 disabled:opacity-30 hover:text-slate-900 transition-colors"
          >
            ← Previous Stage
          </button>

          <span className="text-xs font-bold text-slate-500">
            Stage {selectedId} / 8
          </span>

          <button
            disabled={selectedId === 8}
            onClick={() => setSelectedId((prev) => Math.min(8, prev + 1))}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold disabled:opacity-30 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
          >
            <span>Next Stage</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
