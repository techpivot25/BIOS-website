import React from 'react';
import { X, CheckCircle2, Shield, Zap, Server, ArrowRight, Download, Phone } from 'lucide-react';
import { PillarItem } from '../types';

interface PillarDetailModalProps {
  item: PillarItem | null;
  pillarTitle: string;
  pillarColor: string;
  onClose: () => void;
  onRequestQuote: (item: PillarItem) => void;
  onDownloadGuide: () => void;
}

export const PillarDetailModal: React.FC<PillarDetailModalProps> = ({
  item,
  pillarTitle,
  pillarColor,
  onClose,
  onRequestQuote,
  onDownloadGuide
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/50 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span 
                className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                style={{ 
                  borderColor: `${pillarColor}55`, 
                  backgroundColor: `${pillarColor}15`,
                  color: pillarColor 
                }}
              >
                {pillarTitle}
              </span>
              {item.highlight && (
                <span className="text-[11px] font-medium text-slate-400">
                  • {item.highlight}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {item.name}
            </h3>
            <p className="text-sm font-medium text-slate-300">
              {item.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview Paragraph */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Executive Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Key Metrics Banner */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              {item.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-bold font-mono text-white">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Core Technical Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Included Technical Capabilities & SLAs
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {item.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-200"
                >
                  <CheckCircle2 
                    className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: pillarColor }}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GCC Regulatory Alignment */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200 flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Sovereignty & Compliance Guaranteed: </span>
              Architected to satisfy Central Bank of UAE (CBUAE), Saudi Central Bank (SAMA), UAE National Electronic Security Authority (NESAC), and ISO 27001 regulatory requirements.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onDownloadGuide();
            }}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Solution Whitepaper</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="tel:800246763"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>800 BIOSME</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(item);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Request Scoping Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
