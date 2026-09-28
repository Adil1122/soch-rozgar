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
import { StageItem, EcosystemPillar } from './types/soch';
import { STAGES_DATA } from './data/sochData';

export function App() {
  const [activeTab, setActiveTab] = useState<'poster' | 'interactive'>('poster');
  const [interactiveSection, setInteractiveSection] = useState<string>('problem');
  const [selectedStage, setSelectedStage] = useState<StageItem | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<EcosystemPillar | null>(null);

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
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        interactiveSection={interactiveSection}
        setInteractiveSection={setInteractiveSection}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'poster' ? (
          <NetworkPoster
            onSelectStage={handleSelectStage}
            onSelectPillar={handleSelectPillar}
            onOpenSimulator={handleOpenSimulator}
          />
        ) : (
          <div className="space-y-10">
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
      </main>

      {/* Detail Modal */}
      <StageDetailModal
        stage={selectedStage}
        pillar={selectedPillar}
        onClose={handleCloseModal}
        onSelectNextStage={handleNextStage}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-2xl font-black text-white">S</span>
              <span className="text-emerald-500 text-xl font-bold">🌱</span>
              <span className="text-2xl font-black text-white">CH</span>
            </div>
            <div className="border-l border-slate-700 pl-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                SOCH Rozgar Platform
              </div>
              <div className="text-xs text-slate-400">
                Pakistan's Talent-to-Income Network
              </div>
            </div>
          </div>

          <div className="text-center md:text-right text-xs space-y-1">
            <p className="text-slate-300 font-semibold">
              Seek • Observe • Create • Hope
            </p>
            <p className="text-slate-500">
              Transforming potential into prosperity across Pakistan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
