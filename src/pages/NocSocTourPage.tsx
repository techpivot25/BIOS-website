import React, { useState } from 'react';
import { 
  Radio, 
  ChevronRight, 
  Eye, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ArrowRight,
  Clock,
  Server
} from 'lucide-react';
import nocSocImg from '../assets/images/noc_soc_control_center_1790176179214.jpg';
import { NOC_SOC_METRICS } from '../data/biosContent';

interface NocSocTourPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const NocSocTourPage: React.FC<NocSocTourPageProps> = ({
  onNavigate,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'surveillance' | 'soc' | 'datacenters'>('surveillance');

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400 font-medium">NOC & SOC</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">Virtual Command Center Walkthrough</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>24x7 Command & Telemetry Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Inside the 24x7 BIOS NOC & SOC
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Experience our round-the-clock operations centers in Dubai Internet City and Riyadh King Fahd Road. See how our certified engineers maintain 99.995% uptime and sub-4.2 minute threat containment.
          </p>
        </div>
      </section>

      {/* Main Tour Showcase */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Large Command Visual with Live Feeds */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
          <img 
            src={nocSocImg} 
            alt="BIOS NOC & SOC Operations" 
            className="w-full h-80 sm:h-[460px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Floating live status badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">ALL SENSORS NOMINAL</span>
          </div>

          {/* Overlay Metrics */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400">Mean Time to Detect</div>
              <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">4.2 Mins</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400">Network Availability</div>
              <div className="text-lg font-bold font-mono text-blue-400 mt-0.5">99.995%</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400">Critical Response SLA</div>
              <div className="text-lg font-bold font-mono text-purple-400 mt-0.5">&lt; 15 Mins</div>
            </div>
          </div>
        </div>

        {/* 3 Guided Walkthrough Perspectives */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-950/80 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('surveillance')}
              className={`py-4 px-3 text-center transition-all border-b-2 font-medium ${
                activeTab === 'surveillance'
                  ? 'border-emerald-500 text-white bg-slate-900 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              1. 24x7 Infrastructure NOC
            </button>

            <button
              onClick={() => setActiveTab('soc')}
              className={`py-4 px-3 text-center transition-all border-b-2 font-medium ${
                activeTab === 'soc'
                  ? 'border-emerald-500 text-white bg-slate-900 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Managed SOC & SIEM
            </button>

            <button
              onClick={() => setActiveTab('datacenters')}
              className={`py-4 px-3 text-center transition-all border-b-2 font-medium ${
                activeTab === 'datacenters'
                  ? 'border-emerald-500 text-white bg-slate-900 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Sovereign Data Centers
            </button>
          </div>

          <div className="p-8 sm:p-10 space-y-6">
            {activeTab === 'surveillance' && (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <h3 className="text-xl font-bold text-white">Continuous Network Operations Command</h3>
                <p>
                  Our Dubai and Riyadh command centers oversee 14,000+ infrastructure probes across compute fabrics, hypervisors, SAN storage controllers, core BGP routing, and fiber interconnects.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="font-bold text-white text-xs">Automated Runbook Execution</div>
                    <div className="text-xs text-slate-400 mt-1">Pre-approved automated scripts resolve recurring alerts instantly without requiring customer intervention.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="font-bold text-white text-xs">Certified Incident Command</div>
                    <div className="text-xs text-slate-400 mt-1">Direct escalation paths to Cisco CCIE and VMware VCAP administrators with 15-minute response guarantees.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'soc' && (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <h3 className="text-xl font-bold text-white">Next-Generation Security Operations Center</h3>
                <p>
                  Equipped with modern SIEM correlation rules, automated EDR isolation, and MITRE ATT&CK framework mapping, our SOC analysts intercept anomalous behavioral patterns before ransomware can execute.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="font-bold text-white text-xs">Mean Time to Detect (MTTD)</div>
                    <div className="text-xs text-slate-400 mt-1">Threats triaged and contained in an average of 4.2 minutes across endpoints and network perimeters.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="font-bold text-white text-xs">Sovereign Compliance Audits</div>
                    <div className="text-xs text-slate-400 mt-1">Automated compliance reporting mapped directly to SAMA, NESAC, and ISO 27001 regulatory mandates.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'datacenters' && (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <h3 className="text-xl font-bold text-white">Sovereign GCC Data Center Fabric</h3>
                <p>
                  Carrier-neutral Tier III certified facilities located in Dubai Internet City, Abu Dhabi, and Riyadh. Built with 2N+1 electrical feeds, 72-hour fuel autonomy, and biometric multi-tier mantrap security.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <div className="font-mono text-emerald-400 font-bold">1.2 ms</div>
                    <div className="text-xs text-white mt-1">Dubai (DIC-01)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <div className="font-mono text-emerald-400 font-bold">1.8 ms</div>
                    <div className="text-xs text-white mt-1">Abu Dhabi (ADGM-01)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                    <div className="font-mono text-emerald-400 font-bold">2.1 ms</div>
                    <div className="text-xs text-white mt-1">Riyadh (KFD-01 SAMA)</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Schedule On-Site Tour Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">
              Want to visit our command centers in person?
            </h4>
            <p className="text-xs text-slate-400">
              Schedule a guided physical walk-through of our Dubai Internet City or Riyadh facilities for your executive team.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('On-Site NOC/SOC Facility Tour (Dubai / Riyadh)')}
              className="px-6 py-3 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              BOOK PHYSICAL TOUR
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
