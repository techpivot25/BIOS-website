import React from 'react';
import { Phone, ShieldCheck, Server, ExternalLink, Lock } from 'lucide-react';

interface TopBarProps {
  onOpenCalculator: () => void;
  onOpenContact: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCalculator, onOpenContact }) => {
  return (
    <div className="hidden sm:block bg-slate-950 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Exact copy from user's screenshot */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-200 font-medium tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            The Middle East's local Managed Service And Cloud Provider
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden lg:flex items-center gap-1 text-slate-400">
            <Server className="w-3 h-3 text-blue-400" />
            Tier III Sovereign Cloud in UAE & KSA
          </span>
        </div>

        {/* Right: Exact buttons from screenshot */}
        <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('bios:open-chat'))}
            className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-semibold transition-colors cursor-pointer"
            title="Chat with Technical Agent & Support"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wider text-[11px]">LIVE SUPPORT</span>
          </button>

          <span className="text-slate-700">|</span>

          <a
            href="https://portal.cloudhpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold transition-colors"
          >
            <Lock className="w-3 h-3 text-blue-400" />
            <span>SUPPORT LOGIN</span>
          </a>

          <span className="text-slate-700">|</span>

          <a
            href="tel:800246763"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <Phone className="w-3 h-3 text-rose-500 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-slate-100 font-mono tracking-tight">800 BIOSME (246763)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
