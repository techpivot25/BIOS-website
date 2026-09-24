import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  ArrowRight, 
  Download, 
  Server, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Lock,
  Clock,
  Radio,
  FileText
} from 'lucide-react';
import heroDatacenterImg from '../assets/images/hero_cloud_datacenter_1790176164420.jpg';

interface HeroProps {
  onOpenGuideModal: () => void;
  onOpenCalculator: () => void;
  onOpenAssessment: () => void;
  onOpenNocTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGuideModal,
  onOpenCalculator,
  onOpenAssessment,
  onOpenNocTour
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      badge: 'Gartner Magic Quadrant Recognized • Business Continuity',
      badgeClass: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
      headline: 'Disasters might be inevitable, but data loss and downtime don’t have to be.',
      description: 'BIOS Middle East protects enterprise workloads with certified Disaster Recovery as a Service (DRaaS). Achieve sub-15 minute RPO and regular audit-ready failover drills without hardware CAPEX.',
      primaryBtnText: 'Download DRaaS Guide',
      primaryAction: onOpenGuideModal,
      primaryIcon: Download,
      secondaryBtnText: 'Calculate RPO / RTO',
      secondaryAction: onOpenCalculator,
      statNumber: '< 15 Mins',
      statLabel: 'Achieved Recovery Point Objective (RPO)'
    },
    {
      badge: '100% In-Country Data Residency • SAMA & CBUAE Compliant',
      badgeClass: 'text-rose-300 border-rose-500/30 bg-rose-500/10',
      headline: 'The Middle East’s Premier Sovereign In-Country Cloud.',
      description: 'High-performance single-tenant Private CloudHPT and Tier III data center co-location across Dubai, Abu Dhabi, and Riyadh. Zero egress fees, ultra-low latency, and sovereign governance.',
      primaryBtnText: 'Request Cloud Assessment',
      primaryAction: onOpenAssessment,
      primaryIcon: ArrowRight,
      secondaryBtnText: 'Explore Private Cloud',
      secondaryAction: () => {
        const el = document.getElementById('services-pillars');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
      statNumber: '100% GCC',
      statLabel: 'Sovereign In-Country Data Residency'
    },
    {
      badge: '24x7 NOC & SOC Operations • ITIL Aligned',
      badgeClass: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
      headline: '24x7 NOC & SOC Managed Operations — Zero Compromise.',
      description: 'Round-the-clock enterprise infrastructure administration, next-gen SIEM threat hunting, and bilingual service desk. Our regional certified engineers keep your mission-critical operations bulletproof.',
      primaryBtnText: 'Tour our NOC & SOC',
      primaryAction: onOpenNocTour,
      primaryIcon: ArrowRight,
      secondaryBtnText: 'Speak with an Engineer',
      secondaryAction: onOpenAssessment,
      statNumber: '99.995%',
      statLabel: 'Financial-Grade Availability SLA'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Dark Enterprise Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDatacenterImg} 
          alt="BIOS Middle East Tier III Data Center" 
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        
        {/* Subtle grid mesh */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category / Authority Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm transition-all duration-300">
              <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${slide.badgeClass}`}>
                {slide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] min-h-[120px] sm:min-h-[140px] flex items-center">
              {slide.headline}
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl min-h-[72px]">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={slide.primaryAction}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-lg shadow-rose-950/50 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.99] group cursor-pointer"
              >
                <span>{slide.primaryBtnText}</span>
                <slide.primaryIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={slide.secondaryAction}
                className="flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700 hover:border-slate-500 backdrop-blur-sm transition-all hover:bg-slate-850"
              >
                <span>{slide.secondaryBtnText}</span>
              </button>
            </div>

            {/* Live Slider Indicators & Controls */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? 'w-8 bg-blue-500 shadow-sm shadow-blue-500/50' 
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs text-slate-400 font-mono">
                0{currentSlide + 1} / 0{slides.length}
              </span>

              <div className="flex items-center gap-1.5 ml-auto">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live In-Country Sovereign Telemetry Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-6 shadow-2xl shadow-black/80 space-y-5">
              
              {/* Box Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Live GCC Sovereign Cloud Telemetry
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  ALL NODES HEALTHY
                </span>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Network Availability</div>
                  <div className="text-xl font-bold font-mono text-white tracking-tight">99.995%</div>
                  <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Tier III Financial SLA
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">DRaaS Tested RPO</div>
                  <div className="text-xl font-bold font-mono text-amber-400 tracking-tight">&lt; 15 Mins</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    Verified by Gartner
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Mean Time to Detect (MTTD)</div>
                  <div className="text-xl font-bold font-mono text-blue-400 tracking-tight">4.2 Mins</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <Radio className="w-3 h-3 text-blue-400" />
                    24x7 SOC SIEM Active
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Data Egress Penalties</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 tracking-tight">$0.00 / Free</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    Zero Hidden Bandwidth Tax
                  </div>
                </div>
              </div>

              {/* GCC Sovereign Nodes Mini Status */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                  <span>In-Country Data Center Nodes</span>
                  <span>Direct Peering</span>
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="font-medium text-slate-200">Dubai Internet City (DIC-01)</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">1.2 ms | Tier III</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="font-medium text-slate-200">Abu Dhabi (ADGM-01)</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">1.8 ms | Tier III</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="font-medium text-slate-200">Riyadh (KFD-01 SAMA Zone)</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">2.1 ms | Tier III</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Footer in Box */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <button
                  onClick={onOpenNocTour}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>Interactive 24x7 NOC/SOC Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-slate-400 text-[11px]">ISO 27001 Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
