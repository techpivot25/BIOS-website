import React, { useState } from 'react';
import { 
  X, 
  Radio, 
  ShieldAlert, 
  CheckCircle2, 
  Activity, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  Phone,
  Server
} from 'lucide-react';
import nocSocImg from '../assets/images/noc_soc_control_center_1790176179214.jpg';

interface NocTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookPhysicalTour: () => void;
}

export const NocTourModal: React.FC<NocTourModalProps> = ({
  isOpen,
  onClose,
  onBookPhysicalTour
}) => {
  const [activeTab, setActiveTab] = useState<'surveillance' | 'soc' | 'datacenter'>('surveillance');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/70 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Inside the 24x7 BIOS NOC & SOC
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE STATUS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Command center operations in Dubai Internet City & Riyadh King Fahd Road
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl h-64 sm:h-72">
            <img 
              src={nocSocImg} 
              alt="BIOS NOC and SOC command center" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="font-semibold">Dubai Central Command & Control Room</span>
              </div>
              <span className="font-mono text-slate-300 text-[11px]">24/7/365 Continuous Watch</span>
            </div>
          </div>

          {/* Sub-Views Tabs */}
          <div className="grid grid-cols-3 gap-2 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab('surveillance')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'surveillance'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              1. 24x7 Infrastructure NOC
            </button>

            <button
              onClick={() => setActiveTab('soc')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'soc'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              2. Managed SOC & SIEM
            </button>

            <button
              onClick={() => setActiveTab('datacenter')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'datacenter'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              3. Sovereign Facilities
            </button>
          </div>

          {/* Dynamic Walkthrough Content */}
          {activeTab === 'surveillance' && (
            <div className="space-y-3 text-xs text-slate-300">
              <h4 className="text-sm font-bold text-white">Proactive Network Operations Center (NOC)</h4>
              <p>
                Our NOC engineers continuously monitor over 14,000 infrastructure sensors across virtualization, SAN storage, core switching, and hypervisors. Any anomaly triggers automated runbooks before users experience degradation.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Guaranteed Incident SLA</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">&lt; 15 Minutes</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">ITIL Alignment</div>
                  <div className="text-base font-bold text-blue-400 mt-0.5">Incident & Change Mgt</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'soc' && (
            <div className="space-y-3 text-xs text-slate-300">
              <h4 className="text-sm font-bold text-white">Security Operations Center (SOC) & Next-Gen SIEM</h4>
              <p>
                Equipped with real-time behavioral analytics and MITRE ATT&CK correlation, the BIOS SOC isolates malicious zero-day exploits, ransomware payloads, and unauthorized lateral movement in under 4.2 minutes.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Mean Time to Detect</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">4.2 Mins</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Compliance Frameworks</div>
                  <div className="text-base font-bold text-purple-400 mt-0.5">SAMA, NESAC, ISO 27001</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'datacenter' && (
            <div className="space-y-3 text-xs text-slate-300">
              <h4 className="text-sm font-bold text-white">Carrier-Neutral Sovereign Tier III Datacenters</h4>
              <p>
                Physical hosting nodes in Dubai Internet City, Abu Dhabi Global Market, and Riyadh. Built with 2N+1 power redundancy, diesel generators with 72-hour autonomy, and biometric multi-tier mantrap security.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Uptime Certification</div>
                  <div className="text-base font-bold text-white mt-0.5">Tier III Certified</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Data Egress Tax</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">$0.00 / Free</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <a
            href="tel:800246763"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
          >
            <Phone className="w-3.5 h-3.5 text-rose-500" />
            <span>NOC Direct: 800 BIOSME</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookPhysicalTour();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Schedule Physical Walk-Through in Dubai or Riyadh</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
