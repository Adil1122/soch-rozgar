import React, { useState } from 'react';
import { Header } from './components/Header';
import { NetworkPoster } from './components/NetworkPoster';
import { StageDetailModal } from './components/StageDetailModal';
import { ProblemVsSolution } from './components/ProblemVsSolution';
import { AssessmentSimulator } from './components/AssessmentSimulator';
import { LifecycleExplorer } from './components/LifecycleExplorer';
import { TeamAssemblyBuilder } from './components/TeamAssemblyBuilder';
import { EconomicsCalculator } from './components/EconomicsCalculator';
import { PhasedRoadmap } from './components/PhasedRoadmap';
import { PhilosophyEcosystem } from './components/PhilosophyEcosystem';
import { TalentDashboard } from './components/TalentDashboard';
import { MentorsDirectory } from './components/MentorsDirectory';
import { ClientPortal } from './components/ClientPortal';
import { AdminPanel } from './components/AdminPanel';
import { AuthModal } from './components/AuthModal';
import { ChatWorkspace } from './components/ChatWorkspace';
import { VideoCallRoom } from './components/VideoCallRoom';

import { StageItem, EcosystemPillar } from './types/soch';
import { STAGES_DATA } from './data/sochData';
import { 
  INITIAL_MENTORS, 
  INITIAL_TALENT_PROFILE, 
  INITIAL_ASSIGNED_TASKS, 
  INITIAL_CLIENT_PROJECTS,
  INITIAL_CHAT_CHANNELS,
  INITIAL_CHAT_MESSAGES,
  SAMPLE_VIDEO_CALL_SESSIONS
} from './data/platformStore';
import { 
  UserProfile, 
  AssignedTask, 
  ClientProject, 
  MentorProfile, 
  ChatChannel, 
  ChatMessage, 
  VideoCallSession 
} from './types/platform';

export function App() {
  const [activeTab, setActiveTab] = useState<'poster' | 'interactive' | 'talent-portal' | 'client-portal' | 'mentors' | 'chat' | 'video-call' | 'admin'>('poster');
  const [interactiveSection, setInteractiveSection] = useState<string>('problem');
  const [selectedStage, setSelectedStage] = useState<StageItem | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<EcosystemPillar | null>(null);

  // Auth State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(INITIAL_TALENT_PROFILE);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalDefaultRole, setAuthModalDefaultRole] = useState<'talent' | 'client'>('talent');

  // Application Data States
  const [talentProfile, setTalentProfile] = useState<UserProfile>(INITIAL_TALENT_PROFILE);
  const [mentorsList, setMentorsList] = useState<MentorProfile[]>(INITIAL_MENTORS);
  const [assignedTasks, setAssignedTasks] = useState<AssignedTask[]>(INITIAL_ASSIGNED_TASKS);
  const [clientProjects, setClientProjects] = useState<ClientProject[]>(INITIAL_CLIENT_PROJECTS);
  
  // Communications & Video State
  const [chatChannels, setChatChannels] = useState<ChatChannel[]>(INITIAL_CHAT_CHANNELS);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_CHAT_MESSAGES);
  const [videoSessions, setVideoSessions] = useState<VideoCallSession[]>(SAMPLE_VIDEO_CALL_SESSIONS);
  const [activeVideoSession, setActiveVideoSession] = useState<VideoCallSession | null>(null);

  // All Talents (For Admin Panel)
  const [allTalentUsers, setAllTalentUsers] = useState<UserProfile[]>([
    INITIAL_TALENT_PROFILE,
    {
      id: 'tal-102',
      name: 'Zubair Qureshi',
      email: 'zubair@talent.soch.pk',
      role: 'talent',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      title: 'UI/UX Mobile Specialist',
      city: 'Islamabad',
      status: 'verified',
      joinedDate: '2025-08-20',
      talentDetails: {
        passionStory: 'Passionate about Clean Urdu-English bilingual interfaces and fintech mobile apps.',
        skills: ['Figma', 'Design Tokens', 'User Research'],
        track: 'UI/UX Product Design',
        level: 'Market-Ready',
        assessmentScore: 91,
        videoInterviewStatus: 'passed',
        testScores: [],
        roadmapMilestones: [],
        earningsPkr: 98000,
        completedTasksCount: 4
      }
    },
    {
      id: 'tal-103',
      name: 'Maryam Abbasi',
      email: 'maryam@talent.soch.pk',
      role: 'talent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      title: 'AI Agent & Python Developer',
      city: 'Karachi',
      status: 'in_review',
      joinedDate: '2025-09-01',
      talentDetails: {
        passionStory: 'I want to build intelligent customer service agents for global enterprises from Karachi.',
        skills: ['Python', 'FastAPI', 'LangChain', 'Gemini APIs'],
        track: 'Applied AI & Automation',
        level: 'Apprentice',
        assessmentScore: 86,
        videoInterviewStatus: 'processing',
        testScores: [],
        roadmapMilestones: [],
        earningsPkr: 35000,
        completedTasksCount: 2
      }
    }
  ]);

  const handleOpenAuth = (role?: 'talent' | 'client') => {
    setAuthModalDefaultRole(role || 'talent');
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (role: 'talent' | 'client' | 'admin', name: string, email: string) => {
    if (role === 'talent') {
      const user: UserProfile = {
        ...INITIAL_TALENT_PROFILE,
        name,
        email,
        role: 'talent'
      };
      setCurrentUser(user);
      setActiveTab('talent-portal');
    } else if (role === 'client') {
      const user: UserProfile = {
        id: 'client-901',
        name,
        email,
        role: 'client',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        joinedDate: '2025-09-15',
        status: 'verified'
      };
      setCurrentUser(user);
      setActiveTab('client-portal');
    } else {
      const user: UserProfile = {
        id: 'admin-001',
        name: 'SOCH Super Admin',
        email: 'admin@soch.pk',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
        joinedDate: '2025-01-01',
        status: 'verified'
      };
      setCurrentUser(user);
      setActiveTab('admin');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('poster');
  };

  const handleQuickSwitchRole = (role: 'talent' | 'client' | 'admin') => {
    if (role === 'talent') {
      setCurrentUser(talentProfile);
    } else if (role === 'client') {
      setCurrentUser({
        id: 'client-901',
        name: 'Sarah Jenkins (Apex Retail)',
        email: 'sarah@apexretail.com',
        role: 'client',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        joinedDate: '2025-09-15',
        status: 'verified'
      });
    } else {
      setCurrentUser({
        id: 'admin-001',
        name: 'SOCH Super Admin',
        email: 'admin@soch.pk',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
        joinedDate: '2025-01-01',
        status: 'verified'
      });
    }
  };

  const handleUpdateTaskProgress = (taskId: string, newProgress: number, newStatus?: AssignedTask['status']) => {
    setAssignedTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          progress: newProgress,
          status: newStatus || task.status
        };
      }
      return task;
    }));
  };

  const handleCreateClientProject = (newProjectData: Omit<ClientProject, 'id' | 'postedDate' | 'matchedTalentCount' | 'assignedTeam'>) => {
    const created: ClientProject = {
      ...newProjectData,
      id: `proj-${Math.floor(Math.random() * 900 + 100)}`,
      postedDate: new Date().toISOString().split('T')[0],
      matchedTalentCount: 4,
      assignedTeam: [
        {
          role: 'Lead Specialist',
          talentName: 'Bilal Ahmed',
          avatar: INITIAL_TALENT_PROFILE.avatar,
          status: 'Matched & Active'
        },
        {
          role: 'AI Autonomous Agent',
          talentName: 'SOCH Agentic Bot v2.4',
          avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
          status: 'Active'
        }
      ]
    };
    setClientProjects(prev => [created, ...prev]);
  };

  const handleLaunchVideoCall = (channelOrSessionId?: string) => {
    let session = videoSessions.find(s => s.id === channelOrSessionId);
    if (!session && channelOrSessionId) {
      if (channelOrSessionId.includes('client')) {
        session = videoSessions.find(s => s.callType === 'soch_with_client');
      } else if (channelOrSessionId.includes('mentor')) {
        session = videoSessions.find(s => s.callType === 'mentor_qa_session');
      } else {
        session = videoSessions.find(s => s.callType === 'soch_with_talent');
      }
    }
    if (!session) {
      session = videoSessions[0];
    }
    setActiveVideoSession(session);
  };

  const handleSendMessage = (
    channelId: string, 
    text: string, 
    codeSnippet?: { language: string; code: string }, 
    attachments?: { name: string; url: string; size: string }[]
  ) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      channelId,
      senderId: currentUser?.id || 'anon',
      senderName: currentUser?.name || 'You',
      senderRole: (currentUser?.role as any) || 'talent',
      senderAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      codeSnippet,
      attachments
    };

    setChatMessages(prev => ({
      ...prev,
      [channelId]: [...(prev[channelId] || []), newMessage]
    }));

    // Update channel snippet
    setChatChannels(prev => prev.map(ch => {
      if (ch.id === channelId) {
        return {
          ...ch,
          lastMessage: `${currentUser?.name?.split(' ')[0] || 'User'}: ${text.slice(0, 45)}...`,
          lastMessageTime: 'Just now'
        };
      }
      return ch;
    }));

    // Realistic auto-response after 1.2 seconds to demonstrate active mediation
    setTimeout(() => {
      let replyText = 'Message received and logged into SOCH mediation record.';
      let replierName = 'Usman Farooq (SOCH Delivery Lead)';
      let replierRole: 'soch_admin' | 'mentor' | 'client' | 'talent' = 'soch_admin';
      let replierAvatar = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80';

      if (channelId.includes('mentor')) {
        replyText = 'Received your update. I have reviewed the logic and it aligns with our architecture standards. See you in the next call!';
        replierName = 'Engr. Haris Khan (SOCH Mentor)';
        replierRole = 'mentor';
        replierAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
      } else if (channelId.includes('client')) {
        if (currentUser?.role === 'client') {
          replyText = 'Thank you! As your SOCH Delivery Lead, I have confirmed this milestone deliverable with the internal QA team and escrow records.';
          replierName = 'Usman Farooq (SOCH Delivery Lead)';
          replierRole = 'soch_admin';
        } else {
          replyText = 'Understood. We will check the milestone demo in our next sprint sync.';
          replierName = 'Sarah Jenkins (Apex Retail)';
          replierRole = 'client';
          replierAvatar = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80';
        }
      } else {
        replyText = 'Your task submission is in the QA queue. Mentor verification will conclude shortly.';
        replierName = 'SOCH Delivery Pod Lead';
        replierRole = 'soch_admin';
      }

      const autoReply: ChatMessage = {
        id: `reply-${Date.now()}`,
        channelId,
        senderId: 'replier-1',
        senderName: replierName,
        senderRole: replierRole,
        senderAvatar: replierAvatar,
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => ({
        ...prev,
        [channelId]: [...(prev[channelId] || []), autoReply]
      }));
    }, 1200);
  };

  const handleOpenSimulator = () => {
    setActiveTab('interactive');
    setInteractiveSection('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStage = (stage: StageItem) => {
    setSelectedStage(stage);
    setSelectedPillar(null);
  };

  const handleSelectPillar = (pillar: EcosystemPillar) => {
    setSelectedPillar(pillar);
    setSelectedStage(null);
  };

  const handleCloseModal = () => {
    setSelectedStage(null);
    setSelectedPillar(null);
  };

  const handleNextStage = (nextId: number) => {
    const next = STAGES_DATA.find((s) => s.id === nextId);
    if (next) {
      setSelectedStage(next);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      {/* Top Navigation Bar with Role Routing */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        interactiveSection={interactiveSection}
        setInteractiveSection={setInteractiveSection}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        onQuickSwitchRole={handleQuickSwitchRole}
      />

      {/* Main Container with minimal left-right padding */}
      <main className="flex-1 w-full px-2 sm:px-4 lg:px-6 py-3 sm:py-5">
        {activeTab === 'poster' && (
          <NetworkPoster
            onSelectStage={handleSelectStage}
            onSelectPillar={handleSelectPillar}
            onOpenSimulator={handleOpenSimulator}
          />
        )}

        {activeTab === 'interactive' && (
          <div className="space-y-8 max-w-7xl mx-auto">
            {interactiveSection === 'problem' && <ProblemVsSolution />}
            {interactiveSection === 'assessment' && <AssessmentSimulator />}
            {interactiveSection === 'journey' && (
              <LifecycleExplorer onSelectStage={handleSelectStage} />
            )}
            {interactiveSection === 'teams' && <TeamAssemblyBuilder />}
            {interactiveSection === 'economics' && <EconomicsCalculator />}
            {interactiveSection === 'roadmap' && <PhasedRoadmap />}
            {interactiveSection === 'ecosystem' && (
              <PhilosophyEcosystem onSelectPillar={handleSelectPillar} />
            )}
          </div>
        )}

        {activeTab === 'talent-portal' && (
          <div className="max-w-7xl mx-auto">
            <TalentDashboard
              profile={talentProfile}
              assignedTasks={assignedTasks}
              onUpdateTaskProgress={handleUpdateTaskProgress}
              onNavigateToMentors={() => setActiveTab('mentors')}
              onNavigateToChat={(channelId) => {
                setActiveTab('chat');
              }}
              onLaunchVideoCall={(sessionId) => {
                handleLaunchVideoCall(sessionId || 'call-103');
              }}
            />
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="max-w-7xl mx-auto">
            <MentorsDirectory
              mentors={mentorsList}
              onNavigateToChat={(channelId) => {
                setActiveTab('chat');
              }}
              onLaunchVideoCall={(sessionId) => {
                handleLaunchVideoCall(sessionId || 'call-102');
              }}
            />
          </div>
        )}

        {activeTab === 'client-portal' && (
          <div className="max-w-7xl mx-auto">
            <ClientPortal
              clientProfile={currentUser || undefined}
              projects={clientProjects}
              onCreateProject={handleCreateClientProject}
              onNavigateToChat={(channelId) => {
                setActiveTab('chat');
              }}
              onLaunchVideoCall={(sessionId) => {
                handleLaunchVideoCall(sessionId || 'call-101');
              }}
            />
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="max-w-7xl mx-auto">
            <ChatWorkspace
              currentUser={currentUser}
              channels={chatChannels}
              messages={chatMessages}
              onSendMessage={handleSendMessage}
              onLaunchVideoCall={handleLaunchVideoCall}
              onSwitchRole={handleQuickSwitchRole}
            />
          </div>
        )}

        {activeTab === 'video-call' && (
          <div className="max-w-7xl mx-auto">
            <VideoCallRoom
              session={activeVideoSession || videoSessions[0]}
              currentUser={currentUser}
              onEndCall={() => {
                setActiveVideoSession(null);
                setActiveTab('chat');
              }}
              onSwitchSession={(sessionId) => {
                const s = videoSessions.find(v => v.id === sessionId);
                if (s) setActiveVideoSession(s);
              }}
              availableSessions={videoSessions}
            />
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="max-w-7xl mx-auto">
            <AdminPanel
              talentList={allTalentUsers}
              projectsList={clientProjects}
              tasksList={assignedTasks}
              onNavigateToChat={(channelId) => {
                setActiveTab('chat');
              }}
              onLaunchVideoCall={(sessionId) => {
                handleLaunchVideoCall(sessionId || 'call-101');
              }}
            />
          </div>
        )}
      </main>

      {/* Video Call Modal / Overlay when launched from other screens */}
      {activeVideoSession && activeTab !== 'video-call' && (
        <VideoCallRoom
          session={activeVideoSession}
          currentUser={currentUser}
          onEndCall={() => setActiveVideoSession(null)}
          onSwitchSession={(sessionId) => {
            const s = videoSessions.find(v => v.id === sessionId);
            if (s) setActiveVideoSession(s);
          }}
          availableSessions={videoSessions}
        />
      )}

      {/* Auth Login / Register Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultRole={authModalDefaultRole}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Stage Detail Modal */}
      <StageDetailModal
        stage={selectedStage}
        pillar={selectedPillar}
        onClose={handleCloseModal}
        onSelectNextStage={handleNextStage}
      />

      {/* Footer in synced emerald-slate-900 color scheme */}
      <footer className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-slate-300 border-t border-emerald-900/60 py-8 mt-10">
        <div className="w-full px-3 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-2xl font-black text-white">S</span>
              <span className="text-emerald-400 text-xl font-bold">🌱</span>
              <span className="text-2xl font-black text-white">CH</span>
              <span className="ml-2 text-xl font-extrabold text-emerald-400">Rozgar</span>
            </div>
            <div className="border-l border-emerald-800/80 pl-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                SOCH Rozgar
              </div>
              <div className="text-xs text-emerald-300/80">
                Pakistan's Talent-to-Income Network
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-300">
            <button onClick={() => setActiveTab('talent-portal')} className="hover:text-emerald-400 transition-colors">
              Talent Portal
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('mentors')} className="hover:text-emerald-400 transition-colors">
              Mentors Directory
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('client-portal')} className="hover:text-emerald-400 transition-colors">
              Client Portal
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('chat')} className="hover:text-emerald-400 transition-colors">
              Chat Hub
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('video-call')} className="hover:text-emerald-400 transition-colors">
              Live Video
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('admin')} className="hover:text-emerald-400 transition-colors">
              SOCH Admin
            </button>
          </div>

          <div className="text-center md:text-right text-xs space-y-1">
            <p className="text-emerald-300 font-semibold tracking-wide">
              Seek • Observe • Create • Hope
            </p>
            <p className="text-slate-400">
              Transforming potential into prosperity across Pakistan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
