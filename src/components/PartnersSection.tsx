import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { PARTNERS } from '../data/biosContent';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
            <Award className="w-3.5 h-3.5" />
            <span>Strategic Alliances & Industry Accreditations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Backed by the World's Premier Technology Leaders
          </h2>

          <p className="text-sm text-slate-400">
            BIOS Middle East holds the highest levels of partner certifications and regulatory compliance across the GCC.
          </p>
        </div>

        {/* Partners Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900 hover:shadow-xl group"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">
                    {partner.tier}
                  </div>
                </div>

                {partner.badge && (
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 shrink-0 text-center">
                    {partner.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {partner.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Active Tier
                </span>
                <span className="text-slate-400">GCC Regional Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Badges Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Regional Sovereign & Security Certifications:
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">ISO 27001 (Information Security)</span>
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">ISO 22301 (Business Continuity)</span>
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">ISO 9001 (Quality Management)</span>
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">Central Bank of UAE (CBUAE)</span>
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">SAMA Cyber Security Framework</span>
            <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700">NESAC Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};
