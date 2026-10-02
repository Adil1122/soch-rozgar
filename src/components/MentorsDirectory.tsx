import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Star, 
  Calendar, 
  Clock, 
  DollarSign, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare, 
  Filter,
  Sparkles,
  BookOpen,
  Video
} from 'lucide-react';
import { MentorProfile } from '../types/platform';

interface MentorsDirectoryProps {
  mentors: MentorProfile[];
  onBookMentorSession?: (mentor: MentorProfile) => void;
  onNavigateToChat?: (channelId?: string) => void;
  onLaunchVideoCall?: (sessionId?: string) => void;
}

export const MentorsDirectory: React.FC<MentorsDirectoryProps> = ({
  mentors,
  onBookMentorSession,
  onNavigateToChat,
  onLaunchVideoCall
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMentorForModal, setSelectedMentorForModal] = useState<MentorProfile | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const categories = [
    'All',
    'Software Engineering',
    'UI/UX & Product Design',
    'AI & Machine Learning',
    'Digital Marketing & Growth',
    'DevOps & Cloud',
    'Content & Creative'
  ];

  const filteredMentors = mentors.filter((m) => {
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesQuery = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleConfirmBooking = (mentor: MentorProfile) => {
    setBookingSuccess(`Session booked with ${mentor.name}! Your meeting link has been generated.`);
    setTimeout(() => {
      setBookingSuccess(null);
      setSelectedMentorForModal(null);
    }, 2800);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-emerald-800/60">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/60">
            Stage 7: Mentorship & Ecosystem Leadership
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-3">
            SOCH Verified Mentors & Technical Leads
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 leading-relaxed">
            Every learner on SOCH is paired with seasoned Pakistani industry practitioners. Mentors review code, audit portfolio projects, conduct mock client pitch drills, and ensure verified delivery quality.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mentor by name, skill (e.g. React, Figma, AI, AWS) or title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-emerald-700 text-emerald-300 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all p-6 flex flex-col justify-between"
          >
            <div>
              {/* Top card bar */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{mentor.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{mentor.title}</p>
                    <span className="text-[11px] font-bold text-emerald-700">{mentor.company}</span>
                  </div>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-3">
                {mentor.bio}
              </p>

              {/* Badges & Category */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {mentor.category}
                </span>
                {mentor.badges.map((b, bIdx) => (
                  <span key={bIdx} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    ⭐ {b}
                  </span>
                ))}
              </div>

              {/* Skills tags */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                {mentor.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Book Action */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs mb-3">
                <div className="flex items-center space-x-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{mentor.rating}</span>
                  <span className="text-slate-400 font-normal">({mentor.reviewsCount} reviews)</span>
                </div>
                <div className="text-slate-600 font-bold">
                  {mentor.studentsMentored}+ mentored
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-black text-slate-900">
                    PKR {mentor.hourlyRatePkr.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 block font-semibold">Per 1-on-1 Review Session</span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => onNavigateToChat ? onNavigateToChat('ch-mentor-1') : null}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                    title="Message via SOCH Hub"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                  <button
                    onClick={() => onLaunchVideoCall ? onLaunchVideoCall('call-102') : null}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                    title="Launch Video Code Review"
                  >
                    <Video className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                  <button
                    onClick={() => setSelectedMentorForModal(mentor)}
                    className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors flex items-center space-x-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedMentorForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-6 text-white relative">
              <button
                onClick={() => setSelectedMentorForModal(null)}
                className="absolute top-4 right-4 text-xs font-bold text-white/80 hover:text-white bg-black/20 px-2.5 py-1 rounded-full"
              >
                ✕ Close
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src={selectedMentorForModal.avatar}
                  alt={selectedMentorForModal.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-400"
                />
                <div>
                  <h3 className="text-lg font-black">{selectedMentorForModal.name}</h3>
                  <p className="text-xs text-emerald-200">{selectedMentorForModal.title}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {bookingSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-extrabold">Booking Confirmed!</h4>
                  <p className="text-xs">{bookingSuccess}</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Select Session Objective
                    </label>
                    <select className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium">
                      <option>Portfolio / Code Review & Milestone QA Sign-Off</option>
                      <option>Client Pitch & Interview Drill</option>
                      <option>Technical Career Path Direction & Roadmap</option>
                      <option>System Architecture Diagnostic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Choose Available Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button className="p-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold text-center">
                        Tomorrow at 5:00 PM
                      </button>
                      <button className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-center hover:bg-slate-50">
                        Wednesday at 7:00 PM
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Total Session Fee:</span>
                    <span className="font-extrabold text-emerald-700 text-sm">
                      PKR {selectedMentorForModal.hourlyRatePkr.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleConfirmBooking(selectedMentorForModal)}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm 1-on-1 Mentorship Booking</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
