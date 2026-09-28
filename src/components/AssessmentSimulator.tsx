import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, BrainCircuit, Compass, UserCheck, Layers } from 'lucide-react';

interface DimensionState {
  interests: string;
  creativity: number;
  technical: number;
  communication: number;
  timeAvailable: number; // hours per week
  learningCapacity: number;
}

export const AssessmentSimulator: React.FC = () => {
  const [profile, setProfile] = useState<DimensionState>({
    interests: 'Creative Design & Visual Arts',
    creativity: 85,
    technical: 40,
    communication: 70,
    timeAvailable: 25,
    learningCapacity: 90,
  });

  const [selectedPersona, setSelectedPersona] = useState<string>('creative');

  const setPersona = (type: string) => {
    setSelectedPersona(type);
    if (type === 'creative') {
      setProfile({
        interests: 'Creative Design & Visual Arts',
        creativity: 90,
        technical: 45,
        communication: 75,
        timeAvailable: 30,
        learningCapacity: 85,
      });
    } else if (type === 'coder') {
      setProfile({
        interests: 'Web & Software Engineering',
        creativity: 55,
        technical: 90,
        communication: 60,
        timeAvailable: 35,
        learningCapacity: 95,
      });
    } else if (type === 'marketer') {
      setProfile({
        interests: 'Social Media & Growth Strategy',
        creativity: 80,
        technical: 50,
        communication: 95,
        timeAvailable: 20,
        learningCapacity: 80,
      });
    }
  };

  // Determine top career paths based on profile
  const getCareerPaths = () => {
    if (profile.creativity >= 70 && profile.technical <= 60) {
      return [
        {
          title: 'UI/UX & Product Designer',
          match: 94,
          rationale: 'High creativity combined with visual aesthetics. Ideal for Figma, design systems, and mobile wireframes.',
          path: ['Design Fundamentals', 'Figma Prototyping', 'User Research', '5 Mobile App Case Studies', 'Mentor Code Audit'],
          badge: 'High Global Demand',
          color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
        },
        {
          title: 'Social Media & Brand Identity Designer',
          match: 89,
          rationale: 'Quick turnaround graphics, ad creatives, and vector branding for regional and international brands.',
          path: ['Color Theory', 'Illustrator & Photoshop', 'AI Prompt Engineering (Midjourney)', '5 Real Campaign Briefs'],
          badge: 'Fast Time to First Dollar',
          color: 'text-teal-600 bg-teal-50 border-teal-200'
        },
      ];
    } else if (profile.technical >= 70) {
      return [
        {
          title: 'Full-Stack Web & AI Developer',
          match: 96,
          rationale: 'Strong analytical capacity and engineering fundamentals. Ideal for React, TypeScript, APIs, and AI integrations.',
          path: ['Modern TypeScript & React', 'Node.js & Postgres', 'LLM Agent Orchestration', '5 Production Web Apps', 'Senior PR Review'],
          badge: 'Top Earning Potential',
          color: 'text-blue-600 bg-blue-50 border-blue-200'
        },
        {
          title: 'Frontend Product Engineer',
          match: 88,
          rationale: 'Focus on responsive web applications, Tailwind CSS, clean components, and fast load times.',
          path: ['Component Architecture', 'State Management', 'Tailwind & Motion', 'Real Client Capstone Project'],
          badge: 'High Placement Rate',
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
        },
      ];
    } else {
      return [
        {
          title: 'Digital Growth & Social Media Strategist',
          match: 92,
          rationale: 'Exceptional communication and empathy. Ideal for campaign management, organic viral loops, and content marketing.',
          path: ['Marketing Fundamentals', 'SEO & Analytics', 'Short-form Video & Reels', 'Live Client Campaign Launch'],
          badge: 'High Client Retention',
          color: 'text-orange-600 bg-orange-50 border-orange-200'
        },
        {
          title: 'Creative Content Specialist',
          match: 84,
          rationale: 'Bilingual storytelling in English and Urdu, scripting, and multi-channel content scheduling.',
          path: ['Copywriting Frameworks', 'AI Content Workflows', 'Brand Voice Guidelines', 'Portfolio of 10 Pieces'],
          badge: 'Flexible Hours',
          color: 'text-purple-600 bg-purple-50 border-purple-200'
        },
      ];
    }
  };

  const careerPaths = getCareerPaths();

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
          Page 1 & 2 • Stage 1: Discover Yourself
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          11-Dimensional AI + Mentor Assessment Simulator
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          When a young person says: <em>"I like drawing and I am creative, but I don't know how I can earn from it"</em> — SOCH does not simply say "Create a Graphic Designer account." Instead, AI + human mentors evaluate 11 dimensions to prescribe the ideal career path.
        </p>
      </div>

      {/* Preset Personas */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Test Sample Candidate:</span>
        {[
          { id: 'creative', label: '🎨 "I like drawing & design"', desc: 'Creative persona from Page 1' },
          { id: 'coder', label: '💻 "I like building tech & logic"', desc: 'Engineering persona' },
          { id: 'marketer', label: '📣 "I like storytelling & talking to people"', desc: 'Marketing persona' },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setPersona(p.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedPersona === p.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Two Column Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: The 11 Dimensions Interactive Panel */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-teal-600" />
              Candidate Profile Diagnostic
            </h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              11 Dimensions Active
            </span>
          </div>

          {/* Interactive Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Creativity & Aesthetic Sense</span>
                <span className="text-teal-600">{profile.creativity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={profile.creativity}
                onChange={(e) => setProfile({ ...profile, creativity: Number(e.target.value) })}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Technical & Algorithmic Ability</span>
                <span className="text-teal-600">{profile.technical}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={profile.technical}
                onChange={(e) => setProfile({ ...profile, technical: Number(e.target.value) })}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Communication & Client Empathy</span>
                <span className="text-teal-600">{profile.communication}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={profile.communication}
                onChange={(e) => setProfile({ ...profile, communication: Number(e.target.value) })}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Learning Capacity & Agility</span>
                <span className="text-teal-600">{profile.learningCapacity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={profile.learningCapacity}
                onChange={(e) => setProfile({ ...profile, learningCapacity: Number(e.target.value) })}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Available Weekly Time Commitment</span>
                <span className="text-teal-600">{profile.timeAvailable} Hours / week</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={profile.timeAvailable}
                onChange={(e) => setProfile({ ...profile, timeAvailable: Number(e.target.value) })}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>
          </div>

          {/* List of remaining qualitative dimensions evaluated */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Additional Evaluated Dimensions (Documented on Page 2):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Interests', 'Existing Skills', 'Personality Profile', 'Education', 'Prior Work Experience', 'Portfolio Samples'
              ].map((dim, idx) => (
                <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                  ✓ {dim}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI Career Path Prescription */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-lg">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>AI + Mentor Diagnostic Output</span>
            </div>
            <p className="text-sm font-medium mt-1 text-slate-300">
              "Based on your current profile, these career paths are optimal for your market readiness."
            </p>
          </div>

          {/* Career Path Cards */}
          {careerPaths.map((cp, idx) => (
            <div key={idx} className="bg-white rounded-2xl border-2 border-slate-200/80 p-5 shadow-md hover:border-emerald-500 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full border ${cp.color}`}>
                    {cp.badge}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-2">
                    {cp.title}
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-600">{cp.match}%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Match Score</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {cp.rationale}
              </p>

              {/* Milestone Roadmap */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  Prescribed Learning & Certification Path:
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                  {cp.path.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded-md font-medium">
                        {step}
                      </span>
                      {sIdx < cp.path.length - 1 && (
                        <span className="text-slate-400 font-bold">➔</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
