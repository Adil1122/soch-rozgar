import React from 'react';
import { X, CheckCircle2, ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { StageItem, EcosystemPillar } from '../types/soch';

interface StageDetailModalProps {
  stage: StageItem | null;
  pillar: EcosystemPillar | null;
  onClose: () => void;
  onSelectNextStage?: (id: number) => void;
}

export const StageDetailModal: React.FC<StageDetailModalProps> = ({
  stage,
  pillar,
  onClose,
  onSelectNextStage,
}) => {
  if (!stage && !pillar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Stage / Pillar Theme Color */}
        <div 
          className="p-6 text-white relative overflow-hidden"
          style={{ backgroundColor: stage ? stage.color : pillar?.color }}
        >
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {stage && (
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 uppercase tracking-wide">
                <span>Stage {stage.id} of 8</span>
                <span>•</span>
                <span>{stage.subtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{stage.title}</h2>
              <p className="mt-2 text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                "{stage.tagline}"
              </p>
            </div>
          )}

          {pillar && (
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 uppercase tracking-wide">
                <span>SOCH Ecosystem Pillar</span>
                <span>•</span>
                <span>Action: {pillar.action}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">SOCH {pillar.name}</h2>
              <p className="mt-2 text-white/90 text-sm sm:text-base font-medium">
                {pillar.description}
              </p>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {stage && (
            <>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Mechanism</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {stage.description}
                </p>
              </div>

              {/* Key Deliverables / Milestones */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Key Outputs & Quality Checkpoints
                </h3>
                <ul className="space-y-2.5">
                  {stage.keyOutputs.map((output, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PDF Document Reference */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 bg-slate-100/70 p-3 rounded-lg">
                <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                <span><strong>Reference in SOCH Blueprint:</strong> {stage.pdfReference}</span>
              </div>
            </>
          )}

          {pillar && (
            <>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Role in National Network</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {pillar.roleInNetwork}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Ecosystem Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SOCH {pillar.name} feeds directly into the economic pipeline: transforming potential energy into kinetic earning power. It connects into the <strong>Talent → Assessment → Development → Certification → Matching → Project → Income → Growth</strong> lifecycle.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>

          {stage && onSelectNextStage && stage.id < 8 && (
            <button
              onClick={() => onSelectNextStage(stage.id + 1)}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Next Stage ({stage.id + 1})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
