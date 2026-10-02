import React from 'react';
import { 
  Sparkles, 
  Layers, 
  SlidersHorizontal, 
  BookOpen, 
  Compass, 
  Award, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Users, 
  LogIn, 
  LogOut,
  MessageSquare,
  Video
} from 'lucide-react';
import { UserRole, UserProfile } from '../types/platform';

interface HeaderProps {
  activeTab: 'poster' | 'interactive' | 'talent-portal' | 'client-portal' | 'mentors' | 'chat' | 'video-call' | 'admin';
  setActiveTab: (tab: 'poster' | 'interactive' | 'talent-portal' | 'client-portal' | 'mentors' | 'chat' | 'video-call' | 'admin') => void;
  interactiveSection: string;
  setInteractiveSection: (section: string) => void;
  currentUser: UserProfile | null;
  onOpenAuth: (defaultRole?: 'talent' | 'client') => void;
  onLogout: () => void;
  onQuickSwitchRole?: (role: 'talent' | 'client' | 'admin') => void;
  unreadChatCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  interactiveSection,
  setInteractiveSection,
  currentUser,
  onOpenAuth,
  onLogout,
  onQuickSwitchRole,
  unreadChatCount = 3
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Platform Name */}
          <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => setActiveTab('poster')}>
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
              <span className="ml-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-600">Rozgar</span>
            </div>
            <div className="hidden 2xl:block border-l border-slate-300 pl-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">SOCH Rozgar</div>
              <div className="text-xs text-slate-500 font-medium">Pakistan's Talent-to-Income Network</div>
            </div>
          </div>

          {/* Primary View / Portal Switcher */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-2xl border border-slate-200 overflow-x-auto no-scrollbar gap-0.5">
            <button
              onClick={() => setActiveTab('poster')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'poster'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Infographic</span>
            </button>

            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'interactive'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('talent-portal')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'talent-portal'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 font-extrabold'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Talent</span>
            </button>

            <button
              onClick={() => setActiveTab('mentors')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'mentors'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 font-extrabold'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Mentors</span>
            </button>

            <button
              onClick={() => setActiveTab('client-portal')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'client-portal'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 font-extrabold'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Clients</span>
            </button>

            {/* NEW: Chat Hub */}
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap relative ${
                activeTab === 'chat'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 font-extrabold'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>Chat Hub</span>
              {unreadChatCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              )}
            </button>

            {/* NEW: Live Video Call Room */}
            <button
              onClick={() => setActiveTab('video-call')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'video-call'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 font-extrabold'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>Live Video</span>
            </button>

            {/* SOCH Admin (Operations & Mediation) */}
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'admin'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-purple-700 hover:text-purple-900 font-extrabold'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>SOCH Admin</span>
            </button>
          </div>

          {/* Right User State & Role Persona Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {onQuickSwitchRole && (
              <div className="hidden xl:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-[10px] font-bold">
                <span className="text-slate-400 px-1.5">View As:</span>
                <button
                  onClick={() => onQuickSwitchRole('talent')}
                  className={`px-2 py-0.5 rounded-lg transition-all ${
                    currentUser?.role === 'talent'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Talent
                </button>
                <button
                  onClick={() => onQuickSwitchRole('client')}
                  className={`px-2 py-0.5 rounded-lg transition-all ${
                    currentUser?.role === 'client'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Client
                </button>
                <button
                  onClick={() => onQuickSwitchRole('admin')}
                  className={`px-2 py-0.5 rounded-lg transition-all ${
                    currentUser?.role === 'admin'
                      ? 'bg-purple-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Admin (SOCH)
                </button>
              </div>
            )}

            {currentUser ? (
              <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 py-1.5 px-2.5 rounded-2xl">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-xl object-cover border border-emerald-500"
                />
                <div className="hidden sm:block text-left text-xs">
                  <div className="font-extrabold text-slate-900 leading-tight">{currentUser.name}</div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">{currentUser.role === 'admin' ? 'SOCH ADMIN' : currentUser.role}</span>
                </div>
                <button
                  onClick={onLogout}
                  title="Logout"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => onOpenAuth('talent')}
                  className="px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-extrabold transition-all"
                >
                  Join as Talent
                </button>
                <button
                  onClick={() => onOpenAuth('client')}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold shadow-xs transition-all"
                >
                  Hire Talent
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Subnav for Engine Mode */}
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
