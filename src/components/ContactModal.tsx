import React, { useState } from 'react';
import { X, Phone, Mail, Send, CheckCircle2, Shield, Calendar, Clock, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSubject
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceFocus, setServiceFocus] = useState(defaultSubject || 'Private CloudHPT');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Request Cloud Assessment & Scoping
              </h3>
              <p className="text-xs text-slate-400">
                Connect directly with a Senior Sovereign Cloud Architect in Dubai or Riyadh
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

        {/* Toll Free Direct Contact Banner */}
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Prefer an immediate conversation?</span>
          <a
            href="tel:800246763"
            className="flex items-center gap-1.5 font-bold font-mono text-rose-400 hover:text-rose-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>800 BIOSME (246763)</span>
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">Assessment Request Received</h4>
                <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. A dedicated BIOS Middle East enterprise cloud specialist has been assigned to <strong>{company}</strong> and will reach out within 2 hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-left space-y-1.5 max-w-sm mx-auto">
                <div className="text-slate-400">Assigned Region: <strong className="text-white">GCC Operations Center</strong></div>
                <div className="text-slate-400">Direct Desk: <strong className="text-white">+971 4 378 9000</strong></div>
                <div className="text-slate-400">Priority: <strong className="text-emerald-400 font-mono">HIGH / ENTERPRISE</strong></div>
              </div>

              <button
                onClick={onClose}
                className="w-full max-w-sm mx-auto py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 border border-white/20 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Mansoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Petrochem Middle East"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={serviceFocus}
                  onChange={(e) => setServiceFocus(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Private CloudHPT">Private CloudHPT (Dedicated Sovereign In-Country Cloud)</option>
                  <option value="CloudHPT DRaaS">CloudHPT DRaaS (Gartner-Recognized Disaster Recovery)</option>
                  <option value="Multi-Cloud">Multi-Cloud Single Pane of Glass (AWS / Azure / CloudHPT)</option>
                  <option value="BIOS Assured & Secured">24x7 NOC & SOC Managed Services (ITIL + SIEM)</option>
                  <option value="Datacenter Colocation">Tier III In-Country Datacenter Co-Location</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Brief Project Requirements or Workload Summary (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Number of servers, target RPO/RTO, compliance mandates (SAMA, CBUAE)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  NDA & Confidentiality Guaranteed
                </span>
                <span>Response SLA: &lt; 2 Hours</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Assessment Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
