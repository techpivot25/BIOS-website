import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Compass, 
  RefreshCw, 
  ShieldAlert,
  Server,
  Download,
  Users
} from 'lucide-react';
import boardroomImg from '../assets/images/executive_boardroom_meeting_1790176212220.jpg';
import { MIGRATION_STEPS } from '../data/biosContent';

interface BuildTogetherProps {
  onOpenAssessment: () => void;
  onOpenGuideModal: () => void;
}

export const BuildTogether: React.FC<BuildTogetherProps> = ({
  onOpenAssessment,
  onOpenGuideModal
}) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const stepIcons = [
    <FileCheck className="w-5 h-5 text-blue-400" />,
    <Compass className="w-5 h-5 text-purple-400" />,
    <RefreshCw className="w-5 h-5 text-emerald-400" />,
    <Server className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="migration-framework" className="py-20 lg:py-28 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
            <Users className="w-3.5 h-3.5" />
            <span>Proven Enterprise Program of Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's build it together.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Accelerate towards a successful cloud deployment with our proven program of works. Our industry leading cloud readiness assessments lay the foundation for a predictable, risk-free transformation.
          </p>
        </div>

        {/* Interactive 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Interactive 4-Stage Roadmap List */}
          <div className="lg:col-span-6 space-y-3.5">
            {MIGRATION_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 text-left ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500/60 shadow-lg shadow-blue-950/40 translate-x-1'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border shrink-0 ${
                      isSelected 
                        ? 'bg-blue-600/15 border-blue-500/30' 
                        : 'bg-slate-900 border-slate-800'
                    }`}>
                      {stepIcons[idx]}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-400">
                          STAGE {step.step}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            Active Focus
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-white tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {step.description}
                      </p>

                      <div className="pt-2 text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                        <span className="text-slate-400 font-normal">Primary Deliverable:</span>
                        <strong className="text-white">{step.deliverable}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAssessment}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Cloud Readiness Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGuideModal}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Methodology PDF</span>
              </button>
            </div>
          </div>

          {/* Right: Rich Visual & Executive Assurance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src={boardroomImg} 
                alt="Executive Cloud Strategy Boardroom Session" 
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Over 500+ Enterprise Migrations Completed Across GCC</span>
                </div>
                <div className="text-lg font-bold text-white leading-snug">
                  "Predictable, risk-free execution backed by ZainTech's regional enterprise footprint."
                </div>
              </div>
            </div>

            {/* Quick Guarantees Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-bold font-mono text-blue-400">Zero</div>
                <div className="text-xs font-semibold text-white mt-0.5">Unplanned Downtime</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Replication data seeded continuously with immediate rollback capability.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs font-semibold text-white mt-0.5">Regulatory Compliance</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Full alignment with CBUAE, SAMA, and National Cybersecurity standards.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
