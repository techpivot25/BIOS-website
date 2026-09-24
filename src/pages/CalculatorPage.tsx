import React, { useState } from 'react';
import { 
  Calculator, 
  ChevronRight, 
  CheckCircle2, 
  TrendingDown, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Send,
  Server,
  Download
} from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onOpenContact
}) => {
  const [vms, setVms] = useState(35);
  const [storageTb, setStorageTb] = useState(20);
  const [targetRpo, setTargetRpo] = useState<'15min' | '1hour' | '4hours'>('15min');
  const [targetRto, setTargetRto] = useState<'1hour' | '4hours' | '24hours'>('1hour');
  const [region, setRegion] = useState<'UAE' | 'KSA' | 'Oman' | 'Bahrain' | 'Kuwait'>('UAE');
  const [complianceMandate, setComplianceMandate] = useState<string>('banking');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const isMissionCritical = targetRpo === '15min' || complianceMandate === 'banking';
  const recommendedTier = isMissionCritical 
    ? 'Private CloudHPT + CloudHPT DRaaS' 
    : 'CloudHPT Sovereign IaaS + BaaS';

  const estimatedSavings = Math.round(vms * 140 + storageTb * 32);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium">Resources & Tools</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">Sovereign Cloud & DR Calculator</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Enterprise Sizing Tool</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sovereign Cloud & DRaaS Architecture Estimator
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Model your GCC compute workloads, storage footprints, and recovery objectives to receive instant architectural sizing, compliance mapping, and estimated TCO savings.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 space-y-6 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              <span>1. Specify Workload Parameters</span>
            </h2>

            {/* Jurisdiction */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Target Sovereign Jurisdiction:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['UAE', 'KSA', 'Bahrain', 'Oman', 'Kuwait'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                      region === r
                        ? 'bg-blue-600 border-blue-500 text-white font-semibold shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* VMs Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-200">
                <span>Compute Virtual Machines (VMs):</span>
                <span className="font-mono text-blue-400 font-bold text-sm">{vms} VMs</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={vms}
                onChange={(e) => setVms(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>5 VMs</span>
                <span>100 VMs</span>
                <span>250+ VMs</span>
              </div>
            </div>

            {/* Storage Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-200">
                <span>All-Flash Storage Footprint:</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">{storageTb} TB Flash</span>
              </div>
              <input
                type="range"
                min="2"
                max="150"
                step="2"
                value={storageTb}
                onChange={(e) => setStorageTb(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>2 TB</span>
                <span>75 TB</span>
                <span>150+ TB</span>
              </div>
            </div>

            {/* Target RPO */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Recovery Point Objective (RPO):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '15min', label: '< 15 Mins (Gartner)' },
                  { id: '1hour', label: '< 1 Hour' },
                  { id: '4hours', label: '4-24 Hours' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTargetRpo(item.id as any)}
                    className={`p-2 rounded-lg text-xs border text-center transition-all ${
                      targetRpo === item.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Compliance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Industry & Regulatory Profile:
              </label>
              <select
                value={complianceMandate}
                onChange={(e) => setComplianceMandate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="banking">Banking & Financial Services (CBUAE / SAMA)</option>
                <option value="government">Government & Public Sector (NESAC / Sovereign)</option>
                <option value="healthcare">Healthcare & Life Sciences (DHA / MOH)</option>
                <option value="enterprise">Commercial Enterprise & Logistics</option>
              </select>
            </div>

          </div>

          {/* Right Column: Tailored Recommendation Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tailored Architecture Blueprint
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {region} SOVEREIGN
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {recommendedTier}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Dedicated Cisco UCS blades + Pure Storage NVMe arrays backed by Veeam continuous replication into our Tier III sovereign GCC data centers.
                </p>
              </div>

              {/* Architecture Specifications */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Data Residency:</span>
                  <span className="font-semibold text-emerald-400">100% In-Country ({region})</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Tested RPO / RTO SLA:</span>
                  <span className="font-semibold text-amber-300">&lt; 15 Mins / &lt; 1 Hour</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Data Egress Bandwidth Fees:</span>
                  <span className="font-mono text-emerald-400 font-bold">$0.00 / Free (No Egress Penalty)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">High Availability SLA:</span>
                  <span className="font-semibold text-white">99.995% Financial-Grade</span>
                </div>
              </div>

              {/* FinOps TCO Comparison */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <TrendingDown className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white">Estimated Monthly TCO Savings:</div>
                    <div className="text-[11px] text-slate-400">Versus Hyperscaler Egress & Compute Surcharges</div>
                  </div>
                </div>
                <span className="text-xl font-bold font-mono text-white">~34%</span>
              </div>

              {/* Submission Form */}
              <div className="pt-2 border-t border-slate-800">
                {isSuccess ? (
                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-sm font-bold text-white">Architecture Blueprint Dispatched!</div>
                    <p className="text-xs text-slate-300">
                      We have emailed the complete bill of materials and topology diagram to <span className="text-blue-400">{submittedEmail}</span>.
                    </p>
                    <button
                      onClick={() => onOpenContact(`Calculator Architecture: ${recommendedTier}`)}
                      className="mt-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
                    >
                      Schedule Scoping Call with Architect &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-300">
                      Receive Complete Bill of Materials (BOM) & Pricing Schedule:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="corporate.email@company.ae"
                        value={submittedEmail}
                        onChange={(e) => setSubmittedEmail(e.target.value)}
                        className="flex-1 px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                      >
                        Email Blueprint
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
