import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Server, 
  TrendingDown, 
  Clock, 
  Download,
  AlertCircle
} from 'lucide-react';
import { CloudCalculatorState } from '../types';

interface CloudCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (summary: string) => void;
}

export const CloudCalculatorModal: React.FC<CloudCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  const [vms, setVms] = useState(25);
  const [storageTb, setStorageTb] = useState(15);
  const [targetRpo, setTargetRpo] = useState<'15min' | '1hour' | '4hours'>('15min');
  const [targetRto, setTargetRto] = useState<'1hour' | '4hours' | '24hours'>('1hour');
  const [region, setRegion] = useState<'UAE' | 'KSA' | 'Oman' | 'Bahrain' | 'Kuwait'>('UAE');
  const [complianceMandate, setComplianceMandate] = useState<string>('banking');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Real-time calculated recommendations
  const isMissionCritical = targetRpo === '15min' || complianceMandate === 'banking';
  const recommendedTier = isMissionCritical 
    ? 'Private CloudHPT + CloudHPT DRaaS'
    : 'CloudHPT Sovereign IaaS + BaaS';

  const estimatedSavings = Math.round(vms * 140 + storageTb * 32);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onOpenContact(
        `Calculated Architecture: ${recommendedTier} (${vms} VMs, ${storageTb} TB, RPO ${targetRpo}, Region: ${region})`
      );
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Sovereign Cloud & DRaaS Architecture Estimator
              </h3>
              <p className="text-xs text-slate-400">
                Model your GCC workload specifications to receive tailored architecture & recovery objectives.
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

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left Inputs */}
            <div className="space-y-4">
              
              {/* Region Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Target Sovereign Jurisdiction
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['UAE', 'KSA', 'Bahrain', 'Oman', 'Kuwait'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRegion(r)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                        region === r
                          ? 'bg-blue-600 border-blue-500 text-white font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Workload VMs Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Virtual Machines (Compute Nodes):</span>
                  <span className="font-mono text-blue-400 font-bold text-sm">{vms} VMs</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={vms}
                  onChange={(e) => setVms(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>5 VMs (Small)</span>
                  <span>100 VMs (Mid-Market)</span>
                  <span>200+ (Enterprise)</span>
                </div>
              </div>

              {/* Total Storage Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Total Storage Footprint:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">{storageTb} TB Flash</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="2"
                  value={storageTb}
                  onChange={(e) => setStorageTb(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>2 TB</span>
                  <span>50 TB</span>
                  <span>100+ TB</span>
                </div>
              </div>

              {/* RPO Objective */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Target Recovery Point Objective (RPO)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: '15min', label: '< 15 Mins (Gartner)' },
                    { val: '1hour', label: '< 1 Hour' },
                    { val: '4hours', label: '4-24 Hours' }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setTargetRpo(item.val as any)}
                      className={`p-2 rounded-lg text-xs border text-center transition-all ${
                        targetRpo === item.val
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Recommendation Summary Box */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Recommended Architecture
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Sovereign {region}
                  </span>
                </div>

                <div>
                  <div className="text-base font-bold text-white tracking-tight">
                    {recommendedTier}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Dedicated Cisco UCS compute fabric + Pure Storage NVMe, backed by Veeam continuous replication.
                  </div>
                </div>

                {/* Specs breakdown */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Data Residency:</span>
                    <span className="font-semibold text-emerald-400">100% In-Country ({region})</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Achieved RPO / RTO:</span>
                    <span className="font-semibold text-amber-300">&lt; 15 Mins / &lt; 1 Hour</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Availability SLA:</span>
                    <span className="font-semibold text-white">99.995% Financial Grade</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Data Egress Penalties:</span>
                    <span className="font-semibold text-emerald-400 font-mono">$0.00 (Zero Egress Tax)</span>
                  </div>
                </div>

                {/* Estimated Monthly FinOps Savings */}
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>Est. Savings vs Global Hyperscalers:</span>
                  </div>
                  <span className="font-bold font-mono text-white text-sm">~34%</span>
                </div>

              </div>

              {/* Instant Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  Send Full Bill of Materials & Scoping Blueprint:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email..."
                    value={submittedEmail}
                    onChange={(e) => setSubmittedEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                  >
                    {isSuccess ? 'Sent!' : 'Send Report'}
                  </button>
                </div>
              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
