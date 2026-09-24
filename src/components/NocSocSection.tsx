import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Phone, 
  Eye, 
  Server, 
  Radio, 
  Clock, 
  Users, 
  CheckCircle2,
  Lock,
  ArrowRight,
  MapPin
} from 'lucide-react';
import nocSocImg from '../assets/images/noc_soc_control_center_1790176179214.jpg';
import { NOC_SOC_METRICS } from '../data/biosContent';

interface NocSocSectionProps {
  onOpenNocTour: () => void;
  onOpenAssessment: () => void;
}

export const NocSocSection: React.FC<NocSocSectionProps> = ({
  onOpenNocTour,
  onOpenAssessment
}) => {
  return (
    <section id="noc-soc-section" className="py-20 lg:py-28 bg-slate-900/40 relative border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline directly reflecting screenshot copy */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>24/7/365 Command & Telemetry Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Come in and See our NOC and SOC
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Come in and see how we deliver Managed services, Managed Security and Managed Applications. Our round-the-clock command centers in Dubai and Riyadh give you true operational peace of mind.
          </p>
        </div>

        {/* Command Center Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Large High-Tech Command Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src={nocSocImg} 
                alt="BIOS Middle East 24x7 NOC and SOC Command Center" 
                className="w-full h-96 sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating Live Telemetry Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-emerald-400 font-semibold">LIVE NOC/SOC FEED</span>
              </div>

              {/* Bottom Overlaid Metrics */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Mean Time to Detect</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">4.2 Mins</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Network Uptime</div>
                  <div className="text-lg font-bold font-mono text-blue-400 mt-0.5">99.995%</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Active Sensors</div>
                  <div className="text-lg font-bold font-mono text-purple-400 mt-0.5">14,280+</div>
                </div>
              </div>
            </div>

            {/* Virtual Tour Action Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Experience our operations first-hand with a guided virtual or physical walk-through.</span>
              </div>

              <button
                onClick={onOpenNocTour}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Launch Interactive Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: GCC Data Center Nodes & SLA Commitment */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Sovereign GCC Data Center Fabric</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400">All Nodes Active</span>
              </div>

              {/* Data Centers List */}
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {NOC_SOC_METRICS.dataCenters.map((dc, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <div>
                        <div className="font-semibold text-slate-200">{dc.city}, {dc.country}</div>
                        <div className="text-[11px] text-slate-400">{dc.facility}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono text-emerald-400 font-medium">{dc.latency}</div>
                      <div className="text-[10px] text-slate-400">{dc.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dedicated Certifications */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-300">
                  Certified Engineering Roster On-Duty:
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Cisco CCIE</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">VMware VCAP</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Certified Ethical Hacker (CEH)</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">CISSP</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Microsoft Azure Expert</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">ITIL v4 Expert</span>
                </div>
              </div>

              {/* Contact Toll Free Strip */}
              <div className="pt-2">
                <a
                  href="tel:800246763"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors group"
                >
                  <Phone className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                  <span>Call 24/7 Operations Desk: <strong>800 BIOSME (246763)</strong></span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
