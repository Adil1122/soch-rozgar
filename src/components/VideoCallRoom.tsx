import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  MonitorUp, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  Settings, 
  Lock,
  Volume2,
  Share2,
  Send,
  X,
  CheckCircle2,
  ThumbsUp,
  Heart,
  Smile,
  Flame,
  Lightbulb,
  FileCheck,
  LayoutGrid,
  Square,
  FileCode,
  Download,
  AlertCircle
} from 'lucide-react';
import { VideoCallSession, UserProfile } from '../types/platform';

interface VideoCallRoomProps {
  session: VideoCallSession;
  currentUser: UserProfile | null;
  onEndCall: () => void;
  onSwitchSession?: (sessionId: string) => void;
  availableSessions?: VideoCallSession[];
}

interface InCallMessage {
  id: string;
  senderName: string;
  senderRole: string;
  text: string;
  time: string;
}

interface FloatingReaction {
  id: number;
  emoji: string;
  left: number;
}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({
  session,
  currentUser,
  onEndCall,
  onSwitchSession,
  availableSessions = []
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callDuration, setCallDuration] = useState(session.durationSeconds);
  const [isAiTranscriptionActive, setIsAiTranscriptionActive] = useState(true);
  const [activeLayout, setActiveLayout] = useState<'spotlight' | 'grid' | 'screenshare'>('spotlight');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAgendaOpen, setIsAgendaOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCallSummaryModal, setShowCallSummaryModal] = useState(false);

  // In-call chat messages
  const [inCallMessages, setInCallMessages] = useState<InCallMessage[]>([
    {
      id: 'ic-1',
      senderName: session.remoteParticipantName,
      senderRole: session.remoteParticipantRole,
      text: 'Good day! All verification assets are ready for review.',
      time: '10:02'
    },
    {
      id: 'ic-2',
      senderName: session.hostName,
      senderRole: session.hostRole,
      text: 'Welcome to the SOCH Encrypted Video Meeting. Let us review the agenda items.',
      time: '10:03'
    }
  ]);
  const [newChatText, setNewChatText] = useState('');

  // Floating reactions
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);

  // Timer counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendInCallChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;
    const msg: InCallMessage = {
      id: `ic-${Date.now()}`,
      senderName: currentUser?.name || 'You',
      senderRole: currentUser?.role || 'host',
      text: newChatText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setInCallMessages(prev => [...prev, msg]);
    setNewChatText('');
  };

  const triggerReaction = (emoji: string) => {
    const newReaction: FloatingReaction = {
      id: Date.now() + Math.random(),
      emoji,
      left: 20 + Math.random() * 60 // 20% to 80%
    };
    setReactions(prev => [...prev, newReaction]);
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== newReaction.id));
    }, 2500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleLeaveClick = () => {
    setShowCallSummaryModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between overflow-hidden animate-fadeIn select-none font-sans">
      
      {/* Floating Reactions Layer */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
        {reactions.map(r => (
          <div
            key={r.id}
            className="absolute bottom-24 text-4xl animate-floatUp"
            style={{ left: `${r.left}%` }}
          >
            {r.emoji}
          </div>
        ))}
      </div>

      {/* Top Floating Control Bar */}
      <div className="p-3 sm:p-4 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 backdrop-blur-md relative z-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>HD ENCRYPTED ROOM</span>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
              <span className="truncate max-w-[200px] sm:max-w-md">{session.title}</span>
            </h2>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span>Topic:</span>
              <strong className="text-emerald-300 truncate">{session.sessionTopic}</strong>
            </p>
          </div>
        </div>

        {/* Center: Call Timer & Scenario Switcher */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>{formatTime(callDuration)}</span>
          </div>

          {availableSessions.length > 1 && onSwitchSession && (
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs">
              <span className="text-[10px] text-slate-400 font-bold px-2">SCENARIOS:</span>
              {availableSessions.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => onSwitchSession(s.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    s.id === session.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {idx === 0 ? 'Client Review' : idx === 1 ? 'Mentor 1-on-1' : 'Talent Interview'}
                </button>
              ))}
            </div>
          )}

          <span className="text-[11px] text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOCH Escrow Mediation</span>
          </span>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2">
          {/* AI Transcribe Toggle */}
          <button
            onClick={() => setIsAiTranscriptionActive(!isAiTranscriptionActive)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center space-x-1.5 ${
              isAiTranscriptionActive
                ? 'bg-emerald-900/60 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI Real-time QA Transcribe</span>
          </button>

          {/* Agenda & Deliverables Toggle */}
          <button
            onClick={() => setIsAgendaOpen(!isAgendaOpen)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all ${
              isAgendaOpen ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Meeting Agenda & Deliverables"
          >
            <FileCheck className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Leave / End Call */}
          <button
            onClick={handleLeaveClick}
            className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md transition-colors"
          >
            End Call
          </button>
        </div>
      </div>

      {/* Main Video Stage Area */}
      <div className="flex-1 p-2 sm:p-4 grid grid-cols-1 md:grid-cols-12 gap-3 relative overflow-hidden items-stretch">
        
        {/* ================= PRIMARY VIDEO / SCREEN STAGE ================= */}
        <div className={`${isChatOpen || isAgendaOpen ? 'md:col-span-8 lg:col-span-9' : 'md:col-span-12'} flex flex-col justify-between gap-3 relative`}>
          
          {/* Main Stage Container */}
          <div className="flex-1 bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800 flex flex-col justify-between shadow-2xl min-h-[380px]">
            
            {/* Screen Share Mode */}
            {isScreenSharing ? (
              <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-4 overflow-hidden">
                {/* Mock Shared Screen Interface */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="font-mono text-emerald-400 ml-2">
                      {session.callType === 'soch_with_client' ? 'app.sochrozgar.pk/checkout-demo' : 'src/components/CheckoutModule.tsx'}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold text-[10px]">
                    LIVE PRESENTATION STREAM (1080p 60fps)
                  </span>
                </div>

                {/* Content of the Screen Share based on call type */}
                <div className="flex-1 my-3 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 font-mono text-xs overflow-y-auto">
                  {session.callType === 'soch_with_client' ? (
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/80">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-400">Live Client Milestone Demo</span>
                          <h4 className="text-base font-extrabold text-white">Apex Retail Multi-Vendor Mobile Checkout</h4>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500 text-slate-950 font-black rounded-lg text-xs">
                          QA STATUS: ZERO DEFECTS ✓
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                          <span className="text-slate-400 block font-bold">Performance Audit</span>
                          <div className="text-emerald-400 font-bold text-sm">Lighthouse Score: 98/100</div>
                          <p className="text-[11px] text-slate-400">Mobile load time: 1.1s via edge caching</p>
                        </div>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                          <span className="text-slate-400 block font-bold">Escrow Verification</span>
                          <div className="text-white font-bold text-sm">Milestone 2: $1,200 USD</div>
                          <p className="text-[11px] text-emerald-400">Ready for release to talent pod</p>
                        </div>
                      </div>
                    </div>
                  ) : session.callType === 'mentor_qa_session' ? (
                    <div className="space-y-2 text-slate-300 text-xs">
                      <div className="text-emerald-400 font-bold">// Pull Request #401 Code Audit: React.useMemo Optimization</div>
                      <pre className="text-emerald-300">
{`export const CheckoutSummary: React.FC<SummaryProps> = ({ cartItems, discountCode }) => {
  // SOCH Mentor QA: Refactored expensive tax calculation with memoization
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const taxAmount = useMemo(() => {
    return calculateFBRTax(subtotal, discountCode);
  }, [subtotal, discountCode]);

  return <SummaryView subtotal={subtotal} tax={taxAmount} verifiedBy="SOCH QA" />;
};`}
                      </pre>
                    </div>
                  ) : (
                    <div className="space-y-3 font-sans">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-xs font-bold text-emerald-400">Live Stage 2 Assessment Question</span>
                        <h4 className="text-sm font-extrabold text-white mt-1">
                          "How do you design a high-throughput state manager for an asynchronous dashboard with multiple live WebSockets?"
                        </h4>
                        <p className="text-xs text-slate-400 mt-2">
                          Candidate Bilal Ahmed is presenting architecture diagram with Redis event queues and React 19 optimistic updates.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Presented by: <strong className="text-white">{session.hostName}</strong></span>
                  <button
                    onClick={() => setIsScreenSharing(false)}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs"
                  >
                    Stop Presenting
                  </button>
                </div>
              </div>
            ) : (
              /* Camera Stage */
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={session.remoteParticipantAvatar}
                  alt={session.remoteParticipantName}
                  className="w-full h-full object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
              </div>
            )}

            {/* Top Stage Badges */}
            <div className="relative z-10 p-4 flex items-center justify-between text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{session.remoteParticipantName}</span>
                <span className="text-[10px] text-emerald-400">({session.remoteParticipantRole})</span>
              </span>

              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                1080p 60fps • 48kHz
              </span>
            </div>

            {/* Real-time AI Transcribe Overlay */}
            {isAiTranscriptionActive && (
              <div className="relative z-10 m-3 sm:m-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 max-w-xl self-center text-center shadow-lg">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Live AI Voice-to-Text Transcription</span>
                </span>
                <p className="text-xs text-slate-200 italic">
                  "...all responsive mobile breakpoints and payment webhooks pass the QA checklist. Deliverables meet enterprise SLA."
                </p>
              </div>
            )}

            {/* Bottom Stage Metadata */}
            <div className="relative z-10 p-4 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-[11px]">Audio Active • AI Noise Suppression Enabled</span>
              </div>
            </div>

            {/* User Webcam Picture-in-Picture */}
            {!isScreenSharing && (
              <div className="absolute top-4 right-4 z-20 w-32 sm:w-44 aspect-video bg-slate-900 rounded-2xl overflow-hidden border-2 border-emerald-500/60 shadow-2xl">
                {isVideoOff ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 text-[10px]">
                    <VideoOff className="w-5 h-5 text-slate-600 mb-1" />
                    <span>Camera Off</span>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={currentUser?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'}
                      alt="Self Feed"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-bold bg-black/70 px-1.5 py-0.2 rounded text-white">
                      You ({currentUser?.name?.split(' ')[0] || 'Me'})
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Reaction Trigger Bar */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-2 flex items-center justify-between text-xs">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Smile className="w-3.5 h-3.5 text-emerald-400" />
              <span>Live Reactions:</span>
            </span>

            <div className="flex items-center space-x-2">
              {[
                { emoji: '👍', label: 'Thumbs Up' },
                { emoji: '👏', label: 'Applaud' },
                { emoji: '🚀', label: 'Launch' },
                { emoji: '❤️', label: 'Love' },
                { emoji: '💡', label: 'Idea' },
                { emoji: '🎯', label: 'Target' }
              ].map(reaction => (
                <button
                  key={reaction.emoji}
                  onClick={() => triggerReaction(reaction.emoji)}
                  className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-lg transition-transform active:scale-125"
                  title={reaction.label}
                >
                  {reaction.emoji}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT DRAWER: CHAT & AGENDA ================= */}
        {(isChatOpen || isAgendaOpen) && (
          <div className="md:col-span-4 lg:col-span-3 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-2xl animate-fadeIn">
            
            {/* Drawer Header */}
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => { setIsChatOpen(true); setIsAgendaOpen(false); }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    isChatOpen ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  In-Call Chat
                </button>
                <button
                  onClick={() => { setIsAgendaOpen(true); setIsChatOpen(false); }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    isAgendaOpen ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Agenda & QA
                </button>
              </div>

              <button
                onClick={() => { setIsChatOpen(false); setIsAgendaOpen(false); }}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* In-Call Chat View */}
            {isChatOpen && (
              <div className="flex-1 flex flex-col justify-between overflow-hidden">
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
                  {inCallMessages.map(msg => (
                    <div key={msg.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-emerald-400">{msg.senderName}</span>
                        <span className="text-slate-500">{msg.time}</span>
                      </div>
                      <p className="text-slate-200">{msg.text}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendInCallChat} className="p-2.5 border-t border-slate-800 bg-slate-950 flex items-center space-x-1.5">
                  <input
                    type="text"
                    value={newChatText}
                    onChange={(e) => setNewChatText(e.target.value)}
                    placeholder="Send note during call..."
                    className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {/* Agenda & Deliverables View */}
            {isAgendaOpen && (
              <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                <div>
                  <h4 className="font-black text-white text-sm">Meeting Objectives</h4>
                  <p className="text-[11px] text-slate-400">Governed under SOCH Managed Delivery SLA</p>
                </div>

                <div className="space-y-2">
                  {(session.meetingAgenda || [
                    'Review automated QA test suite on responsive checkout',
                    'Verify zero-defect SLA compliance under SOCH guarantee',
                    'Authorize Milestone 2 escrow release ($1,200 USD)'
                  ]).map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-800/80 text-[11px] text-emerald-200 space-y-1">
                  <strong className="block text-white font-bold">SOCH Escrow Protection</strong>
                  <p>All authorizations confirmed in this session are digitally hashed to the project milestone contract.</p>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Bottom Central Control Dock */}
      <div className="p-3 sm:p-4 bg-slate-950/95 border-t border-slate-800 flex items-center justify-center space-x-3 sm:space-x-4 relative z-20">
        
        {/* Mute Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-3.5 rounded-2xl transition-all shadow-md ${
            isMuted
              ? 'bg-rose-600 text-white animate-pulse'
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
          title={isMuted ? 'Unmute Microphone' : 'Mute Microphone'}
        >
          {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        {/* Camera Toggle */}
        <button
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`p-3.5 rounded-2xl transition-all shadow-md ${
            isVideoOff
              ? 'bg-rose-600 text-white'
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
          title={isVideoOff ? 'Turn Camera On' : 'Turn Camera Off'}
        >
          {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
        </button>

        {/* Screen Share */}
        <button
          onClick={() => setIsScreenSharing(!isScreenSharing)}
          className={`p-3.5 rounded-2xl transition-all shadow-md ${
            isScreenSharing
              ? 'bg-emerald-600 text-white ring-2 ring-emerald-400/50'
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
          title={isScreenSharing ? 'Stop Screen Sharing' : 'Share Screen / Deliverables'}
        >
          <MonitorUp className="w-5 h-5" />
        </button>

        {/* In-Call Chat Drawer Trigger */}
        <button
          onClick={() => { setIsChatOpen(!isChatOpen); setIsAgendaOpen(false); }}
          className={`p-3.5 rounded-2xl transition-all shadow-md ${
            isChatOpen ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
          title="Open In-Call Chat"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* End Call Button */}
        <button
          onClick={handleLeaveClick}
          className="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-xl flex items-center space-x-2 transition-all"
        >
          <PhoneOff className="w-5 h-5" />
          <span className="hidden sm:inline">Leave Room</span>
        </button>
      </div>

      {/* Post-Call Summary Modal */}
      {showCallSummaryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-white space-y-5 shadow-2xl animate-scaleUp">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-white">Video Session Completed</h3>
              <p className="text-xs text-slate-400">
                Duration: <strong className="text-emerald-400">{formatTime(callDuration)}</strong> • Encrypted Record Saved
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                AI Automated Summary & Action Items:
              </span>
              <ul className="space-y-1 text-slate-300 list-disc list-inside">
                <li>Milestone review completed with zero SLA discrepancies</li>
                <li>Code optimizations approved by SOCH Architecture Mentor</li>
                <li>Hashed recording securely logged to Project Escrow Audit</li>
              </ul>
            </div>

            <div className="space-y-2">
              <button
                onClick={onEndCall}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-colors"
              >
                Return to Workspace
              </button>
              <button
                onClick={() => setShowCallSummaryModal(false)}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Resume Video Call
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
