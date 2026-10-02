import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Building2, 
  Eye, 
  EyeOff,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { UserRole } from '../types/platform';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole: 'talent' | 'client';
  onLoginSuccess: (role: 'talent' | 'client' | 'admin', name: string, email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultRole,
  onLoginSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [role, setRole] = useState<'talent' | 'client' | 'admin'>(defaultRole);
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passionOrIndustry, setPassionOrIndustry] = useState('');
  const [city, setCity] = useState('Lahore');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = fullName.trim() || (role === 'talent' ? 'Bilal Ahmed' : role === 'client' ? 'Alex Sterling' : 'System Admin');
    const finalEmail = email.trim() || `${role}@soch.pk`;
    onLoginSuccess(role, finalName, finalEmail);
    onClose();
  };

  const handleQuickDemoLogin = (selectedRole: 'talent' | 'client' | 'admin') => {
    if (selectedRole === 'talent') {
      onLoginSuccess('talent', 'Bilal Ahmed', 'bilal.ahmed@talent.soch.pk');
    } else if (selectedRole === 'client') {
      onLoginSuccess('client', 'Sarah Jenkins (Apex Retail)', 'sarah@apexretail.co.uk');
    } else {
      onLoginSuccess('admin', 'Admin Superuser', 'admin@soch.pk');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black">SOCH</span>
              <span className="text-emerald-400 font-extrabold text-xl">🌱 Rozgar</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-bold px-3"
            >
              ✕ Close
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl font-black mt-3">
            {activeTab === 'register' ? 'Join Pakistan’s Talent Network' : 'Welcome Back to SOCH Rozgar'}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
            {role === 'talent' 
              ? 'Discover your passion, take AI video interviews, get certified, and receive matched projects.'
              : role === 'client'
              ? 'Hire pre-vetted outcome-guaranteed teams & engineers without freelance bidding noise.'
              : 'SOCH Platform operations, governance, verification, and escrow audit panel.'}
          </p>

          {/* Role selector tabs */}
          <div className="mt-4 flex p-1 bg-black/30 backdrop-blur-xs rounded-xl border border-white/15">
            <button
              type="button"
              onClick={() => setRole('talent')}
              className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                role === 'talent' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>I am Talent</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('client')}
              className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                role === 'client' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>I am a Client</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('admin')}
              className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                role === 'admin' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Switch between Sign In / Sign Up */}
          <div className="flex border-b border-slate-200 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab('register')}
              className={`pb-2 text-sm font-bold mr-6 transition-colors border-b-2 -mb-3 ${
                activeTab === 'register' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className={`pb-2 text-sm font-bold transition-colors border-b-2 -mb-3 ${
                activeTab === 'login' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'register' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={role === 'talent' ? 'e.g. Bilal Ahmed' : 'e.g. Sarah Jenkins'}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'talent' ? 'bilal@gmail.com' : 'client@company.com'}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Talent Specific Fields during Registration */}
            {activeTab === 'register' && role === 'talent' && (
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>Your Raw Passion / Creative Interest</span>
                  </label>
                  <textarea
                    rows={2}
                    value={passionOrIndustry}
                    onChange={(e) => setPassionOrIndustry(e.target.value)}
                    placeholder="e.g. 'I like drawing graphics & coding logic, but need real direction and client opportunities...'"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <span className="text-[11px] text-slate-500">
                    *Our AI will analyze your passion statement to prescribe your exact learning & test path.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City in Pakistan
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option>Lahore</option>
                      <option>Karachi</option>
                      <option>Islamabad / Rawalpindi</option>
                      <option>Peshawar</option>
                      <option>Faisalabad</option>
                      <option>Quetta</option>
                      <option>Multan</option>
                      <option>Sialkot</option>
                      <option>Other / Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Client Specific Fields during Registration */}
            {activeTab === 'register' && role === 'client' && (
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Company Name / Startup</span>
                  </label>
                  <input
                    type="text"
                    value={passionOrIndustry}
                    onChange={(e) => setPassionOrIndustry(e.target.value)}
                    placeholder="e.g. NovaTech Labs UK or Lahore Retailers"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>{activeTab === 'register' ? 'Complete & Enter Portal' : 'Sign In to Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Instant 1-Click Demo Profiles */}
          <div className="pt-3 border-t border-slate-200">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 text-center">
              ⚡ Instant 1-Click Demo Switcher
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('talent')}
                className="p-2 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-left transition-all"
              >
                <div className="text-xs font-black text-emerald-900">Bilal Ahmed</div>
                <div className="text-[10px] text-emerald-700">Talent Dashboard</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('client')}
                className="p-2 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-left transition-all"
              >
                <div className="text-xs font-black text-blue-900">Apex Retail</div>
                <div className="text-[10px] text-blue-700">Client Portal</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('admin')}
                className="p-2 rounded-xl border border-purple-200 bg-purple-50/70 hover:bg-purple-100 text-left transition-all"
              >
                <div className="text-xs font-black text-purple-900">HQ Operator</div>
                <div className="text-[10px] text-purple-700">Admin Panel</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
