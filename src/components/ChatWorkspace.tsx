import React, { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  MessageSquare, 
  Search, 
  ShieldCheck, 
  User, 
  Briefcase, 
  Lock, 
  CheckCheck, 
  Sparkles, 
  Video, 
  Info,
  Clock,
  Code2,
  FileCode,
  FileCheck2,
  PhoneCall,
  ChevronRight,
  ExternalLink,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { ChatChannel, ChatMessage, UserProfile } from '../types/platform';

interface ChatWorkspaceProps {
  currentUser: UserProfile | null;
  channels: ChatChannel[];
  messages: Record<string, ChatMessage[]>;
  onSendMessage: (channelId: string, text: string, codeSnippet?: { language: string; code: string }, attachments?: { name: string; url: string; size: string }[]) => void;
  onLaunchVideoCall: (channelId: string) => void;
  onSwitchRole?: (role: 'talent' | 'client' | 'admin') => void;
}

export const ChatWorkspace: React.FC<ChatWorkspaceProps> = ({
  currentUser,
  channels,
  messages,
  onSendMessage,
  onLaunchVideoCall,
  onSwitchRole
}) => {
  const currentRole = currentUser?.role || 'talent';
  
  // Filter channels based on role perspective
  // Talent only sees: talent_to_soch and talent_to_mentor
  // Client only sees: client_to_soch
  // Admin sees ALL channels (the SOCH operational mediator)
  const accessibleChannels = channels.filter(ch => {
    if (currentRole === 'admin') return true;
    if (currentRole === 'talent') return ch.type === 'talent_to_soch' || ch.type === 'talent_to_mentor';
    if (currentRole === 'client') return ch.type === 'client_to_soch';
    return true;
  });

  const [selectedChannelId, setSelectedChannelId] = useState<string>(accessibleChannels[0]?.id || channels[0]?.id || 'ch-client-1');
  const [inputText, setInputText] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [adminChannelFilter, setAdminChannelFilter] = useState<'all' | 'client_to_soch' | 'talent_to_soch' | 'talent_to_mentor'>('all');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('typescript');
  const [codeContent, setCodeContent] = useState('');
  const [attachedFile, setAttachedFile] = useState<{ name: string; size: string } | null>(null);
  const [showProjectDrawer, setShowProjectDrawer] = useState(true);

  // If active channel not in accessible list (e.g. role switched), fallback to first accessible
  const activeChannel = accessibleChannels.find(c => c.id === selectedChannelId) || accessibleChannels[0] || channels[0];
  const channelMessages = messages[activeChannel?.id] || [];

  const filteredChannels = accessibleChannels.filter(channel => {
    const matchesSearch = channel.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
                          channel.contextTag.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          channel.participantName.toLowerCase().includes(searchFilter.toLowerCase());
    if (currentRole === 'admin' && adminChannelFilter !== 'all') {
      return matchesSearch && channel.type === adminChannelFilter;
    }
    return matchesSearch;
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() && !codeContent.trim() && !attachedFile) return;

    const snippet = codeContent.trim() ? { language: codeLanguage, code: codeContent.trim() } : undefined;
    const attachments = attachedFile ? [{ name: attachedFile.name, url: '#', size: attachedFile.size }] : undefined;

    onSendMessage(activeChannel.id, inputText.trim() || (snippet ? 'Shared code deliverable snippet:' : 'Shared attachment:'), snippet, attachments);
    
    setInputText('');
    setCodeContent('');
    setShowCodeInput(false);
    setAttachedFile(null);
  };

  const handleQuickAction = (actionText: string) => {
    onSendMessage(activeChannel.id, actionText);
  };

  const handleSimulateAttachment = () => {
    setAttachedFile({
      name: `Deliverable_Spec_${activeChannel.contextTag.replace(/\s+/g, '_')}.pdf`,
      size: '1.4 MB'
    });
  };

  return (
    <div className="space-y-5">
      {/* Top Architecture & Mediation Protocol Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 rounded-3xl p-6 text-white border border-emerald-800/60 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-700/60 flex items-center gap-1.5 shadow-xs">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                SOCH Mediated Communication Protocol
              </span>
              <span className="text-xs text-emerald-200 font-semibold bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                Zero Direct Bypassing
              </span>
              {onSwitchRole && (
                <div className="flex items-center space-x-1 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-700 text-[11px]">
                  <span className="text-slate-400">Role:</span>
                  <button
                    onClick={() => onSwitchRole('talent')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-all ${currentRole === 'talent' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
                  >
                    Talent
                  </button>
                  <button
                    onClick={() => onSwitchRole('client')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-all ${currentRole === 'client' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
                  >
                    Client
                  </button>
                  <button
                    onClick={() => onSwitchRole('admin')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-all ${currentRole === 'admin' ? 'bg-purple-500 text-white' : 'text-slate-300 hover:text-white'}`}
                  >
                    SOCH Admin
                  </button>
                </div>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-black">
              {currentRole === 'admin' 
                ? 'SOCH Unified Mediation & Communications Hub'
                : currentRole === 'client'
                  ? 'Client & SOCH Project Delivery Communications'
                  : 'Talent & SOCH Mentorship Communications'
              }
            </h1>

            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
              <strong>Core Architecture:</strong> Clients and Talent do not communicate directly. SOCH handles all client requirements, guarantees SLA delivery, and protects escrow funds, while coordinating tasks with verified talent pods and certified mentors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onLaunchVideoCall(activeChannel.id)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0 transform active:scale-95"
            >
              <Video className="w-4 h-4 text-slate-950" />
              <span>Launch Live Video Room</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Channels Sidebar */}
        <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50/60 flex flex-col justify-between">
          <div className="p-4 border-b border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Active Channels</span>
              </h3>
              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                currentRole === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {currentRole.toUpperCase()} VIEW
              </span>
            </div>

            {/* Admin Channel Filter Tabs */}
            {currentRole === 'admin' && (
              <div className="grid grid-cols-2 gap-1 mb-3 text-[10px] font-bold">
                <button
                  onClick={() => setAdminChannelFilter('all')}
                  className={`py-1 px-2 rounded-lg text-center transition-all ${
                    adminChannelFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  All Channels ({channels.length})
                </button>
                <button
                  onClick={() => setAdminChannelFilter('client_to_soch')}
                  className={`py-1 px-2 rounded-lg text-center transition-all ${
                    adminChannelFilter === 'client_to_soch' ? 'bg-purple-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  Clients ⇄ SOCH
                </button>
                <button
                  onClick={() => setAdminChannelFilter('talent_to_soch')}
                  className={`py-1 px-2 rounded-lg text-center transition-all ${
                    adminChannelFilter === 'talent_to_soch' ? 'bg-purple-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  Talent ⇄ SOCH
                </button>
                <button
                  onClick={() => setAdminChannelFilter('talent_to_mentor')}
                  className={`py-1 px-2 rounded-lg text-center transition-all ${
                    adminChannelFilter === 'talent_to_mentor' ? 'bg-purple-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  Talent ⇄ Mentors
                </button>
              </div>
            )}

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search conversations, topics..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Channels List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1 max-h-[500px]">
            {filteredChannels.length === 0 ? (
              <div className="text-center py-10 px-4 text-xs text-slate-400">
                No channels match your filter.
              </div>
            ) : (
              filteredChannels.map((channel) => {
                const isSelected = channel.id === activeChannel?.id;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannelId(channel.id)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-white shadow-sm border border-emerald-300 ring-2 ring-emerald-500/10'
                        : 'hover:bg-slate-100/80 text-slate-600'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={channel.participantAvatar}
                        alt={channel.participantName}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                      />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black text-slate-900 truncate">
                          {channel.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-semibold">{channel.lastMessageTime}</span>
                      </div>

                      <span className="text-[10px] text-emerald-700 font-bold block truncate mt-0.5">
                        📌 {channel.contextTag}
                      </span>

                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {channel.lastMessage}
                      </p>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Left Footer System Tag */}
          <div className="p-3 bg-slate-100/80 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              SOCH Mediation Gate Active
            </span>
            <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded">SSL v2.4</span>
          </div>
        </div>

        {/* Center Messages Area */}
        <div className={`${showProjectDrawer ? 'lg:col-span-5 xl:col-span-5' : 'lg:col-span-8'} flex flex-col justify-between bg-white border-r border-slate-200`}>
          
          {/* Channel Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/40">
            <div className="flex items-center space-x-3">
              <img
                src={activeChannel?.participantAvatar}
                alt={activeChannel?.participantName}
                className="w-10 h-10 rounded-xl object-cover border border-emerald-400 shadow-2xs"
              />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="truncate max-w-[200px] sm:max-w-none">{activeChannel?.title}</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 shrink-0">
                    Verified
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Topic: <strong className="text-slate-700">{activeChannel?.contextTag}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLaunchVideoCall(activeChannel.id)}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition-colors shrink-0"
              >
                <Video className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Start Video Call</span>
              </button>

              <button
                onClick={() => setShowProjectDrawer(!showProjectDrawer)}
                className={`p-1.5 rounded-xl border text-xs font-bold transition-all ${
                  showProjectDrawer ? 'bg-slate-200 text-slate-800 border-slate-300' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-100'
                }`}
                title="Toggle Project Info Drawer"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50/25 max-h-[480px]">
            {/* Architecture Mediation Notice */}
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-xs text-emerald-900 flex items-start gap-2 max-w-xl mx-auto shadow-2xs">
              <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Managed Governance:</strong> All communication in this workspace is mediated by SOCH Project Managers and QA Leads to preserve contract deliverables and prevent freelancer exploitation.
              </p>
            </div>

            {channelMessages.map((msg) => {
              const isMe = currentUser?.name === msg.senderName || (currentRole === 'admin' && msg.senderRole === 'soch_admin');
              return (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 ${isMe ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
                >
                  <img
                    src={msg.senderAvatar}
                    alt={msg.senderName}
                    className="w-8 h-8 rounded-xl object-cover border border-slate-200 shrink-0 mt-0.5"
                  />
                  <div className={`max-w-[85%] space-y-1.5 ${isMe ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                      <span className="font-bold text-slate-700">{msg.senderName}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-semibold uppercase text-[9px]">
                        {msg.senderRole}
                      </span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                        isMe
                          ? 'bg-emerald-600 text-white rounded-tr-none'
                          : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Code Snippet if present */}
                      {msg.codeSnippet && (
                        <div className="mt-2.5 rounded-xl bg-slate-950 text-slate-200 p-3 font-mono text-[11px] overflow-x-auto text-left border border-slate-800">
                          <div className="flex items-center justify-between text-[10px] text-emerald-400 mb-1 border-b border-slate-800 pb-1">
                            <span className="flex items-center gap-1">
                              <Code2 className="w-3 h-3" />
                              <span>{msg.codeSnippet.language}</span>
                            </span>
                            <span>Verified Code</span>
                          </div>
                          <pre className="whitespace-pre-wrap">{msg.codeSnippet.code}</pre>
                        </div>
                      )}

                      {/* Attachments if present */}
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {msg.attachments.map((att, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center space-x-2 p-2 rounded-xl text-xs font-medium ${
                                isMe ? 'bg-emerald-700/60 text-white' : 'bg-slate-100 text-slate-800'
                              }`}
                            >
                              <FileCheck2 className="w-4 h-4 text-emerald-300 shrink-0" />
                              <span className="truncate flex-1">{att.name}</span>
                              <span className="text-[10px] opacity-80">{att.size}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Response Chips */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 overflow-x-auto no-scrollbar flex items-center space-x-2 text-xs">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0">Quick Action:</span>
            {currentRole === 'client' && (
              <>
                <button
                  type="button"
                  onClick={() => handleQuickAction('Can SOCH provide the latest QA test coverage report for this milestone?')}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200 text-[11px] font-semibold whitespace-nowrap transition-colors"
                >
                  📊 Request QA Report
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction('We have reviewed the demo and approve Milestone Escrow release.')}
                  className="px-2.5 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  💰 Authorize Escrow Release
                </button>
              </>
            )}
            {currentRole === 'talent' && (
              <>
                <button
                  type="button"
                  onClick={() => handleQuickAction('Submitted Pull Request with Figma responsive unit tests. Awaiting mentor review.')}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200 text-[11px] font-semibold whitespace-nowrap transition-colors"
                >
                  🚀 Submit Pull Request
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction('I have optimized the state caching as requested. Ready for code audit call.')}
                  className="px-2.5 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  ✅ Ready for Mentor Audit
                </button>
              </>
            )}
            {currentRole === 'admin' && (
              <>
                <button
                  type="button"
                  onClick={() => handleQuickAction('SOCH Quality Assurance audit has passed with 100% compliance. Releasing milestone payout.')}
                  className="px-2.5 py-1 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300 text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  🛡️ Issue QA Verification
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction('Escrow payment of PKR 45,000 has been transferred to Talent via Raast instant rails.')}
                  className="px-2.5 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  ⚡ Authorize Raast Payout
                </button>
              </>
            )}
          </div>

          {/* Expandable Code Snippet Box */}
          {showCodeInput && (
            <div className="p-3 bg-slate-900 border-t border-slate-800 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <FileCode className="w-4 h-4" />
                  Insert Code Deliverable / Pull Request Diff
                </span>
                <button
                  onClick={() => setShowCodeInput(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <textarea
                value={codeContent}
                onChange={(e) => setCodeContent(e.target.value)}
                placeholder="// Paste TypeScript, CSS, or API JSON deliverable..."
                className="w-full h-24 p-2 rounded-xl bg-slate-950 font-mono text-xs text-emerald-300 border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          )}

          {/* Attached file preview chip */}
          {attachedFile && (
            <div className="px-4 py-2 bg-emerald-50 border-t border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
              <div className="flex items-center space-x-2">
                <Paperclip className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-bold">{attachedFile.name}</span>
                <span className="text-[10px] text-emerald-600 font-normal">({attachedFile.size})</span>
              </div>
              <button
                type="button"
                onClick={() => setAttachedFile(null)}
                className="text-emerald-700 hover:text-rose-600 font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {/* Bottom Message Input Bar */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2">
            <button
              type="button"
              onClick={handleSimulateAttachment}
              title="Attach Deliverable Spec / PDF"
              className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setShowCodeInput(!showCodeInput)}
              title="Insert Code Snippet"
              className={`p-2 rounded-xl transition-colors ${
                showCodeInput ? 'bg-emerald-100 text-emerald-700' : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Code2 className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Send message in ${activeChannel?.title}...`}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

        {/* Right Project & SLA Context Drawer */}
        {showProjectDrawer && (
          <div className="lg:col-span-3 xl:col-span-3 bg-slate-50/70 p-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Contract & Pod Details
                </span>
                <h4 className="text-sm font-black text-slate-900 mt-2">
                  {activeChannel?.projectDetails?.name || activeChannel?.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Managed via SOCH Escrow Infrastructure
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Project Budget / Escrow:</span>
                  <span className="font-extrabold text-emerald-700">
                    {activeChannel?.projectDetails?.budget || '$3,500 USD'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Delivery Status:</span>
                  <span className="font-bold text-slate-800">
                    {activeChannel?.projectDetails?.status || 'Active Execution'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">SOCH Delivery Lead:</span>
                  <span className="font-bold text-slate-800">
                    {activeChannel?.projectDetails?.sochLead || 'Usman Farooq'}
                  </span>
                </div>
              </div>

              {/* Mediation Guarantee Box */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white text-xs space-y-2 shadow-sm">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-bold text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The SOCH Delivery Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  SOCH guarantees deliverables to clients and guarantees milestone payment to talent. Direct outside payments or private contact exchange violates network policy.
                </p>
              </div>

              {/* Instant Call Launcher */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <Video className="w-4 h-4 text-emerald-600" />
                  <span>High-Definition Video Call</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Launch an encrypted, recorded video call session with screen sharing and live AI transcription.
                </p>
                <button
                  onClick={() => onLaunchVideoCall(activeChannel.id)}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Start Call in this Channel</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 font-mono">
                Channel ID: {activeChannel?.id} • Escrow #ESC-8921
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
