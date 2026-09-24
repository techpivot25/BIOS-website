import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Layers, 
  Building2, 
  Cpu, 
  ShieldAlert, 
  HardDrive, 
  ShieldCheck, 
  Zap, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Phone, 
  Sliders, 
  ChevronRight, 
  Award, 
  DollarSign, 
  Sparkles,
  MessageSquare,
  Globe,
  Database,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { PRIVATE_CLOUD_SUB_OFFERINGS, PrivateCloudSubOffering } from '../data/privateCloudData';
import f1SpeedImg from '../assets/images/private_cloud_speed_f1_1790178619376.jpg';

interface PrivateCloudPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (subject?: string) => void;
  initialSubOfferingId?: string;
}

export const PrivateCloudPage: React.FC<PrivateCloudPageProps> = ({
  onNavigate,
  onOpenContact,
  initialSubOfferingId,
}) => {
  const [selectedSubId, setSelectedSubId] = useState<string>(
    initialSubOfferingId || 'private-cloudhpt'
  );
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // Sync if prop changes
  useEffect(() => {
    if (initialSubOfferingId) {
      setSelectedSubId(initialSubOfferingId);
    }
  }, [initialSubOfferingId]);

  // Find active sub-offering
  const activeOffering = PRIVATE_CLOUD_SUB_OFFERINGS.find(
    (item) => item.id === selectedSubId
  ) || PRIVATE_CLOUD_SUB_OFFERINGS[0];

  const handleSelectSub = (id: string) => {
    setSelectedSubId(id);
    window.location.hash = `private-cloud/${id}`;
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleChatAboutService = (serviceName: string) => {
    window.dispatchEvent(
      new CustomEvent('bios:open-chat', {
        detail: { service: serviceName },
      })
    );
  };

  const getSubIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'private-cloudhpt': return <Server className={className} />;
      case 'hybrid-cloudhpt': return <Layers className={className} />;
      case 'datacenters': return <Building2 className={className} />;
      case 'cloudhpt-iaas': return <Cpu className={className} />;
      case 'cloudhpt-draas': return <ShieldAlert className={className} />;
      case 'cloudhpt-baas': return <HardDrive className={className} />;
      default: return <Server className={className} />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Top Breadcrumb & Sovereign Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-300">Private Cloud</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-rose-400 font-bold">{activeOffering.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>SOVEREIGN UAE & KSA TIER-III INFRASTRUCTURE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Sovereign Private Cloud & Infrastructure
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                Dedicated compute, hybrid federation, carrier-neutral datacenters, and Gartner-recognized DRaaS hosted in Dubai, Abu Dhabi, and Riyadh.
              </p>
            </div>

            {/* Quick Live Contact Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handleChatAboutService(activeOffering.name)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-rose-950/40 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Live Technical Agent</span>
              </button>

              <a
                href="tel:800246763"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>800 BIOSME</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY HORIZONTAL SUB-OFFERING NAVIGATION BAR */}
      <div className="sticky top-[69px] z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            {PRIVATE_CLOUD_SUB_OFFERINGS.map((sub) => {
              const isSelected = sub.id === selectedSubId;
              return (
                <button
                  key={sub.id}
                  onClick={() => handleSelectSub(sub.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-900/30 scale-[1.02]'
                      : 'bg-slate-900/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={isSelected ? 'text-white' : 'text-blue-400'}>
                    {getSubIcon(sub.id, "w-4 h-4")}
                  </span>
                  <span>{sub.name}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ACTIVE SUB-OFFERING SHOWCASE SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Sub-Offering Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                
                {/* Badges & Official Website Link Indicator */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    {activeOffering.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    <span>{activeOffering.sla}</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {activeOffering.name}
                  </h2>
                  <p className="mt-2 text-lg text-blue-400 font-semibold leading-snug">
                    {activeOffering.tagline}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  {activeOffering.overviewParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenContact(`Inquiry: ${activeOffering.name}`)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Architecture Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleChatAboutService(activeOffering.name)}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-rose-400" />
                    <span>Chat with Technical Specialist</span>
                  </button>

                  {/* Official biosme.com direct page link */}
                  <a
                    href={activeOffering.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-all flex items-center gap-1.5 group"
                    title={`View official ${activeOffering.name} on biosme.com`}
                  >
                    <span>Official Website Link</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side Visual / Specs Panel */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5 sm:p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        {getSubIcon(activeOffering.id)}
                      </div>
                      <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Architectural Specs
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">100% Verified</span>
                  </div>

                  {/* Key Stats Strip */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeOffering.keyStats.map((stat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <p className="text-[10px] text-slate-400 font-medium">{stat.label}</p>
                        <p className="text-xs sm:text-sm font-extrabold text-slate-100 mt-0.5">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Compliance List */}
                  <div className="pt-2">
                    <p className="text-[11px] font-semibold text-slate-400 mb-2">Compliance & Certifications:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeOffering.compliance.map((item, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Official URL Verification Card */}
                  <div className="mt-3 p-3 rounded-xl bg-blue-950/30 border border-blue-900/50 flex items-center justify-between text-xs">
                    <div className="min-w-0 pr-2">
                      <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">Official BIOS Resource</p>
                      <p className="text-[11px] text-slate-300 truncate font-mono mt-0.5">
                        {activeOffering.officialUrl}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopyLink(activeOffering.officialUrl)}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                        title="Copy official link"
                      >
                        {copiedUrl === activeOffering.officialUrl ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={activeOffering.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ARCHITECTURE HIGHLIGHTS GRID */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-extrabold text-rose-400 tracking-wider uppercase">
                ENGINEERED EXCELLENCE
              </p>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Core Architectural Pillars for {activeOffering.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeOffering.architecturePoints.map((point, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    {point.tag && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {point.tag}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center text-[10px] text-slate-400 gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Included in SLA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KEY CAPABILITIES & MANAGEMENT MODEL */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">
                  ENTERPRISE CONTROL
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Key Capabilities & Operations Management
                </h3>
              </div>
              <button
                onClick={() => onOpenContact(`Architecture Sizing for ${activeOffering.name}`)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold self-start transition-colors"
              >
                Request Sizing Calculator
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeOffering.keyCapabilities.map((cap, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-blue-400 border border-slate-800 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">{cap.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ENTERPRISE USE CASES & TARGET WORKLOADS */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">
                PROVEN IN THE REGION
              </p>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Recommended Enterprise Workloads for {activeOffering.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeOffering.useCases.map((useCase, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 space-y-4 shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-white">{useCase.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{useCase.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                      Workloads & Stacks:
                    </p>
                    <p className="text-xs font-semibold text-blue-400 mt-0.5">
                      {useCase.targetWorkloads}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPREHENSIVE 6-WAY COMPARISON MATRIX */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold text-rose-400 uppercase tracking-wider">
                  COMPLETE SOVEREIGN ECOSYSTEM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Cross-Comparison: The 6 Private Cloud Offerings
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compare tenancy, architecture, and deployment models to select the right fit.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Offering</th>
                    <th className="py-3 px-4">Tenancy & Compute</th>
                    <th className="py-3 px-4">Primary Advantage</th>
                    <th className="py-3 px-4">Target Workloads</th>
                    <th className="py-3 px-4">Official Page</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {PRIVATE_CLOUD_SUB_OFFERINGS.map((sub) => {
                    const isRowActive = sub.id === activeOffering.id;
                    return (
                      <tr 
                        key={sub.id} 
                        className={`transition-colors cursor-pointer ${
                          isRowActive ? 'bg-blue-950/40 font-semibold' : 'hover:bg-slate-900/50'
                        }`}
                        onClick={() => handleSelectSub(sub.id)}
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className={`shrink-0 ${isRowActive ? 'text-blue-400' : 'text-slate-400'}`}>
                              {getSubIcon(sub.id, "w-4 h-4")}
                            </div>
                            <div>
                              <span className="text-white font-bold block">{sub.name}</span>
                              <span className="text-[10px] text-slate-400">{sub.badge}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-slate-300">
                          {sub.keyStats[0].value}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">
                          {sub.tagline}
                        </td>
                        <td className="py-3.5 px-4 text-[11px] text-slate-400">
                          {sub.useCases[0].targetWorkloads}
                        </td>
                        <td className="py-3.5 px-4">
                          <a
                            href={sub.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono text-[11px]"
                          >
                            <span>biosme.com</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectSub(sub.id);
                            }}
                            className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                              isRowActive 
                                ? 'bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 text-white shadow-sm' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            {isRowActive ? 'Viewing' : 'Inspect'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* BOTTOM CONSULTATION & SIZING BANNER */}
          <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-rose-900/30 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">
                READY TO ELEVATE YOUR ENTERPRISE ARCHITECTURE?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get a Custom Sizing & Migration Proposal
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Our Cisco and VMware certified cloud architects will assess your on-premises compute, SAN storage, and networking requirements to design a tailored sovereign environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenContact(`Architecture Proposal: ${activeOffering.name}`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-950/50 hover:shadow-rose-600/30 border border-white/20 hover:scale-105 transition-all cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => handleChatAboutService(activeOffering.name)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-rose-400" />
                <span>Chat with Agent</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
