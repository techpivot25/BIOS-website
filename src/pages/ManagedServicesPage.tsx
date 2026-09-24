import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Radio, 
  Users,
  Award,
  Phone,
  Maximize2,
  Sparkles,
  Shield,
  Layers,
  Cloud
} from 'lucide-react';
import nocSocImg from '../assets/images/noc_soc_control_center_1790176179214.jpg';
import integratedSolutionImg from '../assets/images/integrated_solution_m365.svg';
import m365ProtectionImg from '../assets/images/m365_data_protection_solution.svg';

interface ManagedServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const ManagedServicesPage: React.FC<ManagedServicesPageProps> = ({
  onNavigate,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'assured' | 'secured' | 'assist'>('assured');

  const services = {
    assured: {
      name: 'BIOS Assured',
      badge: '24x7 Infrastructure NOC',
      title: 'Proactive 24x7 Systems & Network Administration',
      description: 'Hand over the continuous operation, maintenance, and optimization of your core IT infrastructure to our team of certified regional engineers. We monitor health, apply firmware patches, manage capacity, and troubleshoot issues around the clock.',
      features: [
        '24/7/365 proactive Network Operations Center (NOC) monitoring',
        'Guaranteed 15-minute response SLA for critical priority incidents',
        'Automated patching, firmware updates, and capacity planning',
        'ITIL v4 aligned incident, change, and problem management frameworks',
        'Certified Cisco CCIE, VMware VCAP, and Linux systems administrators'
      ],
      metrics: [
        { label: 'Incident Response', value: '< 15 Mins' },
        { label: 'NOC Coverage', value: '24/7/365' },
        { label: 'Engineers', value: 'GCC-Based' },
        { label: 'Uptime Commitment', value: '99.995%' }
      ]
    },
    secured: {
      name: 'BIOS Secured',
      badge: '24x7 Managed SOC & SIEM',
      title: 'Elite Threat Hunting, SIEM & Automated EDR',
      description: 'Defend your enterprise against sophisticated cyberattacks, zero-day vulnerabilities, and ransomware. Our 24/7 Security Operations Center (SOC) continuously monitors network traffic, correlates security events, and isolates infected endpoints in minutes.',
      features: [
        '24/7 active SOC threat hunting and real-time alert correlation',
        'Endpoint Detection & Response (EDR) with automated malicious process isolation',
        'Continuous external and internal vulnerability scanning and attack surface mapping',
        'Dark web credential monitoring and executive VIP account protection',
        'Regulatory compliance packs aligned with SAMA, NESAC, and ISO 27001'
      ],
      metrics: [
        { label: 'Mean Time to Detect', value: '4.2 Mins' },
        { label: 'SOC Tier', value: '24x7 GCC SOC' },
        { label: 'Threat Surface Scan', value: 'Continuous' },
        { label: 'Compliance Audit', value: 'ISO 27001' }
      ]
    },
    assist: {
      name: 'BIOS Assist',
      badge: '24x7 Bilingual ITIL Desk',
      title: 'Empower Your Workforce with Prompt User Support',
      description: 'Deliver exceptional technical support to your executives and staff. Our bilingual (Arabic & English) service desk acts as an seamless extension of your company, resolving hardware, software, and access requests promptly.',
      features: [
        'Bilingual Arabic & English technical support specialists',
        'Multi-channel contact: Dedicated Toll-Free Phone, Client Portal, Email, and Chat',
        'First-contact resolution rate exceeding 85%',
        'Dedicated VIP executive support queue with priority escalation',
        'Customizable ticketing workflows integrated directly with your ITSM platforms'
      ],
      metrics: [
        { label: 'First-Contact Fix', value: '> 85%' },
        { label: 'Languages', value: 'Arabic & English' },
        { label: 'CSAT Score', value: '98.4%' },
        { label: 'Toll-Free Access', value: '800 BIOSME' }
      ]
    }
  };

  const current = services[activeTab];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400 font-medium">Managed Services</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">24x7 NOC & SOC Operations</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={nocSocImg} 
            alt="BIOS Managed NOC and SOC" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>24/7/365 Command Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-sans">
            MANAGED IT SERVICES & SOC
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 tracking-wider uppercase">
            OPERATIONAL RESILIENCE 24 HOURS A DAY
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
            Eliminate server firefighting, strengthen cyber defenses, and give your internal IT teams the freedom to drive strategic business value.
          </p>

          {/* ATTACHED IMAGE 1: OUR INTEGRATED SOLUTION (Under MANAGED IT SERVICES & SOC) */}
          <div className="pt-8 w-full max-w-5xl mx-auto text-left">
            <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border-2 border-teal-500/90 overflow-hidden space-y-3">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 font-mono">
                    Integrated Solution Blueprint: Office 365 Lifecycle
                  </span>
                </div>
                <span className="text-[11px] text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-bold">
                  Managed IT Services &amp; SOC Architecture
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl bg-white p-2">
                <img 
                  src={integratedSolutionImg} 
                  alt="Our Integrated Solution: Office 365 + Migration + Cloud Backup + Support + Security" 
                  className="w-full h-auto min-w-[760px] mx-auto select-none rounded-lg"
                  loading="eager"
                />
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
                <span>5-Pillar Enterprise Lifecycle: Plans Optimized • Seamless Migration • Unlimited Cloud Backup • 24x7 Support • Advanced Security</span>
                <span className="text-teal-600 font-bold font-mono">Managed by BIOS Middle East</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Managed Care for Enterprise IT
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From round-the-clock server administration and next-gen SIEM threat hunting to friendly, bilingual helpdesk support, BIOS Middle East delivers enterprise ITIL-aligned managed services tailored to the GCC market.
          </p>

          <div>
            <button
              onClick={() => onOpenContact('Managed IT & SOC Scoping')}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-lg shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* 3 Managed Offerings Tab Switcher */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-950/80 text-xs font-semibold">
            {[
              { id: 'assured', label: 'BIOS Assured (24x7 NOC)' },
              { id: 'secured', label: 'BIOS Secured (24x7 SOC)' },
              { id: 'assist', label: 'BIOS Assist (ITIL Desk)' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-3 text-center transition-all border-b-2 font-medium ${
                    isActive
                      ? 'border-emerald-500 text-white bg-slate-900 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-8 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                {current.name} — {current.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {current.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold font-mono text-white mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-2.5 pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Deliverables & Responsibilities
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {current.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Certified Engineering Credentials */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h4 className="text-base font-bold text-white">Certified GCC Engineering Staff</h4>
            </div>
            <span className="text-xs text-slate-400 font-mono">In-Country Operations</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Our operations centers in Dubai and Riyadh are staffed around the clock by seasoned, certified IT professionals holding the highest industry certifications:
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-2">
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">Cisco CCIE</span>
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">VMware VCAP</span>
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">Certified Ethical Hacker (CEH)</span>
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">CISSP</span>
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">Microsoft Certified Azure Expert</span>
            <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800">ITIL v4 Expert</span>
          </div>
        </div>

        {/* ATTACHED IMAGE 2: A SIMPLE AND EFFECTIVE SOLUTION (Under Certified GCC Engineering Staff) */}
        <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border-2 border-sky-400/90 overflow-hidden space-y-3">
          <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 font-mono">
                A Simple and Effective Solution: M365 Data Protection
              </span>
            </div>
            <span className="text-[11px] text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full font-bold">
              Complete Protection Across the Office 365 Tenant
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl bg-white p-2">
            <img 
              src={m365ProtectionImg} 
              alt="A Simple and Effective Solution: Market leading solution for M365 Data Protection across Exchange Online, SharePoint, OneDrive for Business, Office 365 Groups, Microsoft Teams" 
              className="w-full h-auto min-w-[760px] mx-auto select-none rounded-lg"
              loading="eager"
            />
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
            <span>Covering: Exchange Online • SharePoint • OneDrive for Business • Office 365 Groups • Microsoft Teams</span>
            <span className="text-sky-600 font-bold font-mono">Unlimited Storage &amp; Retention</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
          <p className="text-base text-slate-300 leading-relaxed">
            Let BIOS Middle East protect and manage your operations. Designed, built, and supported in the UAE and KSA.
          </p>

          <div>
            <button
              onClick={() => onOpenContact('Managed IT & Security Assessment')}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-lg shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
