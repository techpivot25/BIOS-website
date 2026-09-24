import React, { useState } from 'react';
import { 
  Cloud, 
  Layers, 
  ShieldCheck, 
  TrendingDown, 
  Activity, 
  Sliders, 
  Play, 
  ArrowRight, 
  Download,
  Server,
  Lock,
  Zap,
  Globe
} from 'lucide-react';
import skylineImg from '../assets/images/multicloud_dubai_skyline_1790176196250.jpg';

interface MultiCloudSectionProps {
  onOpenGuideModal: () => void;
  onOpenAssessment: () => void;
}

export const MultiCloudSection: React.FC<MultiCloudSectionProps> = ({
  onOpenGuideModal,
  onOpenAssessment
}) => {
  const [activeTab, setActiveTab] = useState<'cloudhpt' | 'azure' | 'aws'>('cloudhpt');
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const workloads = {
    cloudhpt: {
      name: 'CloudHPT (In-Country GCC)',
      role: 'Core Enterprise ERP & SAMA Banking Workloads',
      status: 'Optimal',
      latency: '1.2 ms',
      residency: '100% Sovereign (Dubai & Riyadh)',
      costEgress: '$0.00 (Zero Fee)',
      securityScore: '99/100',
      vmsRunning: '142 Dedicated Instances',
      specs: 'Cisco UCS + Pure Storage NVMe Flash',
      compliance: 'Central Bank of UAE, SAMA, NESAC, ISO 27001'
    },
    azure: {
      name: 'Microsoft Azure GCC',
      role: 'Global Microsoft 365, PowerBI & Identity Services',
      status: 'Connected',
      latency: '8.4 ms',
      residency: 'UAE Central & North',
      costEgress: 'Managed FinOps Optimized',
      securityScore: '96/100',
      vmsRunning: '64 Elastic Nodes',
      specs: 'Azure Compute + ExpressRoute Direct Peering',
      compliance: 'UAE Cloud First Policy, ISO 27001'
    },
    aws: {
      name: 'Amazon Web Services (AWS)',
      role: 'Global Customer Facing Apps & Scalable Web APIs',
      status: 'Connected',
      latency: '11.2 ms',
      residency: 'Middle East (Bahrain & UAE)',
      costEgress: 'Optimized Reserved Instances',
      securityScore: '95/100',
      vmsRunning: '38 Containerized Services',
      specs: 'EKS Clusters + Direct Connect',
      compliance: 'PCI-DSS, ISO 27001'
    }
  };

  const current = workloads[activeTab];

  return (
    <section id="multi-cloud-section" className="py-20 lg:py-28 bg-slate-900/60 relative border-b border-slate-800 overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src={skylineImg} 
          alt="Dubai Multi-Cloud Skyline" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & The Screenshot Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Cloud className="w-3.5 h-3.5" />
              <span>Unified Multi-Cloud Orchestration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              BIOS Multi-Cloud — No two clouds are the same.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Different clouds come with different benefits, pricing, and payment options that suit different workloads and business outcomes. Managing multiple disparate vendor consoles creates operational silos, security blindspots, and runaway egress costs.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">A Single Pane of Glass</h4>
                  <p className="text-xs text-slate-400">Unified dashboard providing end-to-end monitoring, health alerts, and performance metrics across CloudHPT, Azure, and AWS.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">FinOps & Cost Governance</h4>
                  <p className="text-xs text-slate-400">Eliminate wasted cloud capacity, rightsize virtual machines, and prevent surprise egress bills with guaranteed savings up to 34%.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sovereign Compliance Enforcement</h4>
                  <p className="text-xs text-slate-400">Ensure sensitive customer financial and personal identifiable data never leaves UAE or Saudi borders, while non-sensitive workloads scale globally.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenGuideModal}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get Multi-Cloud Guide</span>
              </button>

              <button
                onClick={onOpenAssessment}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive "Single Pane of Glass" Simulator */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Window Bar */}
              <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">BIOS Multi-Cloud Console v4.8</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SYNCHRONIZED</span>
                </div>
              </div>

              {/* Cloud Switcher Tabs */}
              <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900/40 p-1.5 gap-1.5 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('cloudhpt')}
                  className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'cloudhpt' 
                      ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-rose-400" />
                  <span>CloudHPT Sovereign</span>
                </button>

                <button
                  onClick={() => setActiveTab('azure')}
                  className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'azure' 
                      ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5 text-blue-400" />
                  <span>Azure GCC</span>
                </button>

                <button
                  onClick={() => setActiveTab('aws')}
                  className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'aws' 
                      ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>AWS Global</span>
                </button>
              </div>

              {/* Active Cloud Telemetry Surface */}
              <div className="p-6 space-y-5">
                
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-bold text-white tracking-tight">{current.name}</div>
                    <div className="text-xs text-slate-400">{current.role}</div>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Latency: <strong className="text-emerald-400">{current.latency}</strong>
                  </span>
                </div>

                {/* Metrics Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Data Residency</div>
                    <div className="text-xs font-semibold text-white mt-1">{current.residency}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Egress Billing</div>
                    <div className="text-xs font-semibold text-emerald-400 mt-1">{current.costEgress}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 col-span-2 sm:col-span-1">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Security Posture</div>
                    <div className="text-xs font-semibold text-blue-400 mt-1">{current.securityScore}</div>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="text-slate-400">Active Compute:</span>
                    <span className="font-mono text-slate-200">{current.vmsRunning}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="text-slate-400">Storage Fabric:</span>
                    <span className="font-mono text-slate-200">{current.specs}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="text-slate-400">Audited Compliance:</span>
                    <span className="font-mono text-emerald-400 text-[11px]">{current.compliance}</span>
                  </div>
                </div>

                {/* FinOps Banner */}
                <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-blue-300">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>Average Multi-Cloud TCO Savings: <strong className="text-white">34%</strong></span>
                  </div>
                  <button 
                    onClick={onOpenAssessment}
                    className="text-blue-400 hover:text-blue-300 font-semibold text-[11px] underline"
                  >
                    View Cost Analysis
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
