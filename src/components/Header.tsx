import React from 'react';
import { Sparkles, Layers, SlidersHorizontal, BookOpen, Compass, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: 'poster' | 'interactive';
  setActiveTab: (tab: 'poster' | 'interactive') => void;
  interactiveSection: string;
  setInteractiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  interactiveSection,
  setInteractiveSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Platform Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('poster')}>
            <div className="flex items-center">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">S</span>
              <div className="relative inline-flex items-center justify-center mx-0.5">
                <span className="text-3xl sm:text-4xl font-black text-slate-800">O</span>
                {/* Green Leaf inside the O */}
                <svg className="absolute w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 fill-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4C6.2 19 6 17.5 6 16c0-4.4 3.6-8 8-8 1.5 0 3 .2 4.4.6C17.6 4.8 14.5 2 12 2z" />
                  <path d="M12 22c5.5 0 10-4.5 10-10 0-3.5-1.8-6.6-4.6-8.4.4 1.4.6 2.9.6 4.4 0 4.4-3.6 8-8 8-1.5 0-3-.2-4.4-.6C6.4 19.2 9.5 22 12 22z" fill="#10B981" />
                </svg>
              </div>
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">CH</span>
            </div>
            <div className="hidden sm:block border-l border-slate-300 pl-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Talent to Income Platform</div>
              <div className="text-xs text-slate-500 font-medium">Pakistan's National Skill Network</div>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('poster')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'poster'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Network Infographic</span>
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'interactive'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Interactive System Engine</span>
              <span className="ml-1 px-1.5 py-0.2 bg-emerald-700/80 text-[10px] rounded-full text-white font-bold">10-Pages</span>
            </button>
          </div>

          {/* Right Action Callouts */}
          <div className="hidden md:flex items-center space-x-3 text-right">
            <div>
              <div className="text-xs font-bold text-slate-700 font-urdu">سوچ روزگار نیٹ ورک</div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Seek • Observe • Create • Hope
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Subnav for Interactive Mode */}
        {activeTab === 'interactive' && (
          <div className="flex items-center space-x-2 py-2 overflow-x-auto no-scrollbar border-t border-slate-100 text-xs">
            {[
              { id: 'problem', label: 'The Problem & Fiverr Contrast', icon: Compass },
              { id: 'assessment', label: '11D AI Assessment', icon: Sparkles },
              { id: 'journey', label: '8-Stage Lifecycle', icon: Layers },
              { id: 'teams', label: 'Human + AI Teams', icon: Award },
              { id: 'economics', label: 'Managed Economics', icon: SlidersHorizontal },
              { id: 'roadmap', label: '3-Phase Roadmap', icon: BookOpen },
              { id: 'ecosystem', label: 'SOCH Ecosystem & Philosophy', icon: Layers },
            ].map((sub) => {
              const Icon = sub.icon;
              const isActive = interactiveSection === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setInteractiveSection(sub.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-800 font-bold border border-emerald-300'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
