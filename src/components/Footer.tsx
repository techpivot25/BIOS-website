import React from 'react';
import { Phone, Mail, MapPin, Server, Cloud, Cpu, ExternalLink } from 'lucide-react';
import { BiosLogo } from './BiosLogo';

interface FooterProps {
  onNavigate: (page: string, subId?: string) => void;
  onOpenAssessment: () => void;
  onOpenCalculator: () => void;
  onOpenGuideModal: () => void;
  onOpenNocTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAssessment,
  onOpenCalculator,
  onOpenGuideModal,
  onOpenNocTour
}) => {
  const handleNav = (page: string, subId?: string) => {
    onNavigate(page, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Pre-Footer Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Ready to modernize your GCC infrastructure with sovereign confidence?
            </h3>
            <p className="text-slate-400 mt-1">
              Speak directly with certified cloud architects and get a tailored Cloud Readiness & TCO Assessment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('calculator')}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
            >
              DR & Cloud Calculator
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="col-span-2 space-y-4">
            <button 
              onClick={() => handleNav('home')} 
              className="text-left group hover:opacity-95 transition-opacity"
              title="BIOS - A ZainTech Company"
            >
              <BiosLogo className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-200" />
            </button>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              The Middle East's local Managed Service And Cloud Provider. Delivering sovereign Private CloudHPT, GCC Public Cloud, Gartner-recognized DRaaS, and 24x7 NOC & SOC managed operations.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <a 
                href="tel:800246763" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>Toll Free (GCC): <strong className="text-white font-mono">800 BIOSME (246763)</strong></span>
              </a>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>International HQ: <span className="font-mono text-slate-200">+971 4 378 9000</span></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sales & Scoping: <span className="text-slate-200">sales@biosme.com</span></span>
              </div>
            </div>
          </div>

          {/* Col 2: Private Cloud (Matching Screenshot Footer) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              <span>PRIVATE CLOUD</span>
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => handleNav('private-cloud', 'private-cloudhpt')} className="hover:text-white transition-colors text-left">
                  Private CloudHPT
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('private-cloud', 'hybrid-cloudhpt')} className="hover:text-white transition-colors text-left">
                  Hybrid CloudHPT
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('private-cloud', 'datacenters')} className="hover:text-white transition-colors text-left">
                  Datacenters
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('private-cloud', 'cloudhpt-iaas')} className="hover:text-white transition-colors text-left">
                  CloudHPT IaaS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('private-cloud', 'cloudhpt-draas')} className="hover:text-white transition-colors text-left">
                  CloudHPT DRaaS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('private-cloud', 'cloudhpt-baas')} className="hover:text-white transition-colors text-left">
                  CloudHPT BaaS
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Public Cloud */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5" />
              <span>PUBLIC CLOUD</span>
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => handleNav('public-cloud', 'multi-cloud')} className="hover:text-white transition-colors text-left">
                  Multi-Cloud
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('public-cloud', 'azure')} className="hover:text-white transition-colors text-left">
                  Microsoft Azure
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('public-cloud', 'aws')} className="hover:text-white transition-colors text-left">
                  Amazon Web Services (AWS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-white transition-colors text-left text-blue-400 font-semibold">
                  DR & Cost Calculator
                </button>
              </li>
              <li>
                <a href="https://portal.cloudhpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Support Login</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Managed Solutions & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>MANAGED SOLUTIONS</span>
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => handleNav('managed-services')} className="hover:text-white transition-colors text-left">
                  BIOS Assured
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('managed-services')} className="hover:text-white transition-colors text-left">
                  BIOS Secured
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('managed-services')} className="hover:text-white transition-colors text-left">
                  BIOS Assist
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('noc-soc-tour')} className="hover:text-white transition-colors text-left text-emerald-400 font-medium">
                  NOC & SOC Tour
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources', 'all')} className="hover:text-white transition-colors text-left">
                  Resources & Whitepapers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources', 'case-studies')} className="hover:text-white transition-colors text-left text-rose-300">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources', 'compliance')} className="hover:text-white transition-colors text-left text-emerald-300">
                  Compliance & Governance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources', 'blogs')} className="hover:text-white transition-colors text-left text-indigo-300">
                  Tech Blogs & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regional Offices */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid sm:grid-cols-3 gap-6 text-xs">
          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Dubai Headquarters (UAE)</span>
            </div>
            <p className="text-slate-400">
              Building 3, Dubai Internet City, P.O. Box 500588, Dubai, United Arab Emirates
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Riyadh Office (Saudi Arabia)</span>
            </div>
            <p className="text-slate-400">
              King Fahd Road, Al Olaya District, P.O. Box 7183, Riyadh 12211, Kingdom of Saudi Arabia
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Abu Dhabi Office (UAE)</span>
            </div>
            <p className="text-slate-400">
              ADGM Square, Al Khatem Tower, Al Maryah Island, Abu Dhabi, UAE
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar matching the screenshot: "© 2026 BIOS Middle East Group. All Rights Reserved." */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 BIOS Middle East Group. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">ISO 27001 • ISO 22301 • SAMA & CBUAE Certified</span>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>|</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">
              Sitemap
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
