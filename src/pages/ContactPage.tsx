import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Server,
  Building2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  defaultSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  defaultSubject
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceFocus, setServiceFocus] = useState(defaultSubject || 'Private CloudHPT');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
          <span className="text-orange-400 font-medium">Contact</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">Connect with Cloud Architects</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our Cloud & Security Specialists
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Schedule a confidential scoping consultation, request a Cloud Readiness & TCO Assessment, or reach our 24x7 GCC operations desk.
          </p>
        </div>
      </section>

      {/* Main Content Form & Regional Offices */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Request Scoping Call or Cloud Assessment
            </h2>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You, {name}</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-blue-400">{serviceFocus}</strong> has been routed directly to a senior cloud architect in Dubai / Riyadh. We will contact you within 2 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={serviceFocus}
                    onChange={(e) => setServiceFocus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Private CloudHPT">Private CloudHPT (Dedicated Sovereign In-Country Cloud)</option>
                    <option value="Hybrid CloudHPT">Hybrid CloudHPT (Cisco UCS + On-Premise Integration)</option>
                    <option value="CloudHPT DRaaS">CloudHPT DRaaS (Gartner Recognized Disaster Recovery)</option>
                    <option value="CloudHPT IaaS">CloudHPT IaaS (Sovereign In-Country Compute with Zero Egress)</option>
                    <option value="BIOS Assured">BIOS Assured (24x7 Infrastructure NOC Management)</option>
                    <option value="BIOS Secured">BIOS Secured (24x7 SOC, Next-Gen SIEM & EDR)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Scope or Workload Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as approximate VM count, current hypervisor, target RPO/RTO, or compliance jurisdiction..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    Strict Sovereign Confidentiality & NDA
                  </span>
                  <span>Response SLA: &lt; 2 Hours</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-lg shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  SUBMIT ASSESSMENT REQUEST
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Hotlines & Office Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Toll-Free Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border border-rose-900/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Direct Toll-Free Hotline</span>
              </div>
              <div className="text-2xl font-black font-mono text-white">
                800 BIOSME (246763)
              </div>
              <p className="text-xs text-slate-300">
                Call our bilingual engineers directly for immediate escalation or live architecture consultation.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-1">
                International: +971 4 378 9000
              </div>
            </div>

            {/* Regional Offices */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Regional Headquarters</span>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-white">Dubai Headquarters (UAE)</div>
                <p className="text-slate-400">
                  Building 3, Dubai Internet City, P.O. Box 500588, Dubai, United Arab Emirates
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <div className="font-bold text-white">Riyadh Office (Saudi Arabia)</div>
                <p className="text-slate-400">
                  King Fahd Road, Al Olaya District, P.O. Box 7183, Riyadh 12211, Kingdom of Saudi Arabia
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <div className="font-bold text-white">Abu Dhabi Office (UAE)</div>
                <p className="text-slate-400">
                  ADGM Square, Al Khatem Tower, Al Maryah Island, Abu Dhabi, United Arab Emirates
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
