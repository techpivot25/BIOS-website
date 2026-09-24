import React, { useState } from 'react';
import { 
  Server, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Shield,
  Layers,
  HardDrive,
  Lock,
  Headphones,
  Award
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data/biosContent';
import { ServicePillar, PillarItem } from '../types';

interface ThreePillarsProps {
  onSelectItem: (item: PillarItem, pillar: ServicePillar) => void;
  onOpenAssessment: () => void;
  onNavigate?: (page: string) => void;
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({ 
  onSelectItem, 
  onOpenAssessment,
  onNavigate 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldServer':
        return <Server className="w-6 h-6" />;
      case 'CloudLightning':
        return <Cloud className="w-6 h-6" />;
      case 'CpuShield':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  const getItemIcon = (id: string) => {
    if (id.includes('draas') || id.includes('secured')) return <Shield className="w-4 h-4" />;
    if (id.includes('datacenters')) return <HardDrive className="w-4 h-4" />;
    if (id.includes('baas')) return <Lock className="w-4 h-4" />;
    if (id.includes('assist')) return <Headphones className="w-4 h-4" />;
    return <Server className="w-4 h-4" />;
  };

  const handlePillarClick = (pillarId: string) => {
    if (onNavigate) {
      if (pillarId === 'private-cloud') onNavigate('private-cloud');
      else if (pillarId === 'public-cloud') onNavigate('public-cloud');
      else if (pillarId === 'managed-services') onNavigate('managed-services');
    }
  };

  return (
    <section id="services-pillars" className="py-20 lg:py-28 bg-slate-950 relative border-b border-slate-800">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
            <span>Sovereign Cloud & Managed Services Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for GCC Sovereignty, Performance & Resilience
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            Three interconnected pillars providing end-to-end IT transformation. Host your sensitive data in-country, leverage Gartner-recognized DRaaS, and operate with 24x7 certified NOC & SOC engineers.
          </p>
        </div>

        {/* Tab Filters for Quick Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 text-white shadow-lg shadow-rose-950/40 border border-white/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All 3 Pillars
          </button>
          {SERVICE_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === pillar.id
                  ? 'bg-slate-800 text-white border border-slate-600'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PILLARS.filter(
            (pillar) => activeTab === 'all' || activeTab === pillar.id
          ).map((pillar) => {
            const accentColor = pillar.colorScheme.accent;

            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Top Glowing Edge */}
                <div 
                  className="h-1.5 w-full transition-all duration-300"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Pillar Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div 
                        className="p-3 rounded-xl border text-white shadow-inner"
                        style={{ 
                          backgroundColor: `${accentColor}20`, 
                          borderColor: `${accentColor}40`,
                          color: accentColor 
                        }}
                      >
                        {getPillarIcon(pillar.icon)}
                      </div>

                      <span 
                        className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                        style={{
                          backgroundColor: `${accentColor}10`,
                          color: accentColor,
                          borderColor: `${accentColor}30`
                        }}
                      >
                        Pillar 0{pillar.id === 'private-cloud' ? '1' : pillar.id === 'public-cloud' ? '2' : '3'}
                      </span>
                    </div>

                    <div>
                      <h3 
                        onClick={() => handlePillarClick(pillar.id)}
                        className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 cursor-pointer transition-colors"
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mt-1 leading-relaxed">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Sub-Offerings List */}
                  <div className="space-y-3 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Offerings & Capabilities
                    </div>

                    <div className="grid gap-2.5">
                      {pillar.items.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => onSelectItem(item, pillar)}
                          className="group/item cursor-pointer p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/70 hover:border-slate-700 transition-all text-left"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <div 
                                className="p-1.5 rounded-md border text-slate-300 group-hover/item:text-white transition-colors"
                                style={{ 
                                  borderColor: `${accentColor}30`, 
                                  backgroundColor: `${accentColor}10` 
                                }}
                              >
                                {getItemIcon(item.id)}
                              </div>
                              <div className="font-semibold text-sm text-slate-200 group-hover/item:text-white">
                                {item.name}
                              </div>
                            </div>

                            {item.highlight && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0 border border-slate-700">
                                {item.highlight}
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-slate-400 mt-1.5 pl-8">
                            {item.tagline}
                          </div>

                          {/* Quick spec indicators */}
                          {item.metrics && (
                            <div className="flex items-center gap-3 mt-2.5 pl-8 text-[11px] font-mono text-slate-400">
                              {item.metrics.slice(0, 2).map((m, i) => (
                                <span key={i} className="flex items-center gap-1">
                                  <span className="text-slate-400">{m.label}:</span>
                                  <span className="text-white font-medium">{m.value}</span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <button
                      onClick={() => handlePillarClick(pillar.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all group/btn"
                      style={{ 
                        backgroundColor: `${accentColor}15`, 
                        color: accentColor,
                        border: `1px solid ${accentColor}40`
                      }}
                    >
                      <span>View Full {pillar.title} Page</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
