import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Shield, 
  Server, 
  Cloud, 
  Cpu, 
  HardDrive, 
  Lock, 
  Headphones, 
  ArrowRight,
  Calculator,
  Radio,
  BookOpen,
  Phone,
  Layers,
  Building2,
  ShieldAlert,
  ExternalLink,
  Sparkles,
  Globe,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { BiosLogo } from './BiosLogo';
import { PRIVATE_CLOUD_SUB_OFFERINGS } from '../data/privateCloudData';
import { PUBLIC_CLOUD_SUB_OFFERINGS } from '../data/publicCloudData';
import { RESOURCE_CATEGORIES } from '../data/resourcesData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, subOfferingId?: string) => void;
  onOpenAssessment: () => void;
  onOpenCalculator: () => void;
  onSelectServiceItem?: (itemId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenAssessment, 
  onOpenCalculator,
  onSelectServiceItem 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states for Private Cloud
  const [privateCloudDropdownOpen, setPrivateCloudDropdownOpen] = useState(false);
  const [mobilePrivateCloudOpen, setMobilePrivateCloudOpen] = useState(false);
  const privateDropdownTimeoutRef = useRef<any>(null);

  // Dropdown states for Public Cloud
  const [publicCloudDropdownOpen, setPublicCloudDropdownOpen] = useState(false);
  const [mobilePublicCloudOpen, setMobilePublicCloudOpen] = useState(false);
  const publicDropdownTimeoutRef = useRef<any>(null);

  // Dropdown states for Resources
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesDropdownTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string, subOfferingId?: string) => {
    setPrivateCloudDropdownOpen(false);
    setPublicCloudDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobilePrivateCloudOpen(false);
    setMobilePublicCloudOpen(false);
    setMobileResourcesOpen(false);
    onNavigate(page, subOfferingId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Private Cloud Hover
  const handlePrivateMouseEnter = () => {
    if (privateDropdownTimeoutRef.current) clearTimeout(privateDropdownTimeoutRef.current);
    setPrivateCloudDropdownOpen(true);
  };
  const handlePrivateMouseLeave = () => {
    privateDropdownTimeoutRef.current = setTimeout(() => {
      setPrivateCloudDropdownOpen(false);
    }, 200);
  };

  // Public Cloud Hover
  const handlePublicMouseEnter = () => {
    if (publicDropdownTimeoutRef.current) clearTimeout(publicDropdownTimeoutRef.current);
    setPublicCloudDropdownOpen(true);
  };
  const handlePublicMouseLeave = () => {
    publicDropdownTimeoutRef.current = setTimeout(() => {
      setPublicCloudDropdownOpen(false);
    }, 200);
  };

  // Resources Hover
  const handleResourcesMouseEnter = () => {
    if (resourcesDropdownTimeoutRef.current) clearTimeout(resourcesDropdownTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };
  const handleResourcesMouseLeave = () => {
    resourcesDropdownTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 200);
  };

  const getPrivateSubIcon = (id: string) => {
    switch (id) {
      case 'private-cloudhpt': return <Server className="w-5 h-5 text-blue-400" />;
      case 'hybrid-cloudhpt': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'datacenters': return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'cloudhpt-iaas': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'cloudhpt-draas': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'cloudhpt-baas': return <HardDrive className="w-5 h-5 text-amber-400" />;
      default: return <Cloud className="w-5 h-5 text-blue-400" />;
    }
  };

  const getPublicSubIcon = (id: string) => {
    switch (id) {
      case 'multi-cloud': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'azure': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'aws': return <Server className="w-5 h-5 text-amber-400" />;
      default: return <Globe className="w-5 h-5 text-blue-400" />;
    }
  };

  const desktopNavLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'private-cloud', label: 'PRIVATE CLOUD', dropdownType: 'private' },
    { id: 'public-cloud', label: 'PUBLIC CLOUD', dropdownType: 'public' },
    { id: 'managed-services', label: 'MANAGED SERVICES' },
    { id: 'noc-soc-tour', label: 'NOC & SOC' },
    { id: 'resources', label: 'RESOURCES', dropdownType: 'resources' },
  ];

  const mobileNavLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'private-cloud', label: 'PRIVATE CLOUD', dropdownType: 'private' },
    { id: 'public-cloud', label: 'PUBLIC CLOUD', dropdownType: 'public' },
    { id: 'managed-services', label: 'MANAGED SERVICES' },
    { id: 'calculator', label: 'DR CALCULATOR' },
    { id: 'noc-soc-tour', label: 'NOC & SOC' },
    { id: 'resources', label: 'RESOURCES', dropdownType: 'resources' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40 py-3' 
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-[1560px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Official BIOS - A ZainTech Company Logo */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center shrink-0 group text-left hover:opacity-95 transition-opacity py-1"
            title="BIOS - A ZainTech Company"
          >
            <BiosLogo className="h-9 sm:h-11 w-auto group-hover:scale-105 transition-transform duration-200" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 text-xs font-bold tracking-wider text-slate-200 shrink-0">
            {desktopNavLinks.map((link) => {
              const isActive = currentPage === link.id;

              // Private Cloud Dropdown
              if (link.dropdownType === 'private') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handlePrivateMouseEnter}
                    onMouseLeave={handlePrivateMouseLeave}
                  >
                    <button
                      onClick={() => handleNav('private-cloud')}
                      className={`px-2.5 2xl:px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                        isActive || privateCloudDropdownOpen
                          ? 'text-white bg-slate-900 border border-slate-700'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${privateCloudDropdownOpen ? 'rotate-180 text-rose-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Mega Dropdown for Private Cloud Offerings */}
                    {privateCloudDropdownOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl bg-slate-950/98 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl p-5 text-left z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={handlePrivateMouseEnter}
                        onMouseLeave={handlePrivateMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center">
                              <Sparkles className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                                SOVEREIGN CLOUD INFRASTRUCTURE
                              </p>
                              <p className="text-[10px] text-slate-400 font-normal">
                                In-Country Tier-III Compute, Storage, DR & Backup in UAE & Saudi Arabia
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleNav('private-cloud')}
                            className="text-[11px] text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>View All Private Cloud</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 6 Sub-Offerings Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {PRIVATE_CLOUD_SUB_OFFERINGS.map((item) => (
                            <div
                              key={item.id}
                              className="group p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/40 transition-all flex items-start gap-3 cursor-pointer"
                              onClick={() => handleNav('private-cloud', item.id)}
                            >
                              <div className="w-9 h-9 rounded-lg bg-slate-800/90 group-hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center shrink-0 transition-colors">
                                {getPrivateSubIcon(item.id)}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                  <span className="text-xs font-bold text-slate-100 group-hover:text-white transition-colors truncate">
                                    {item.name}
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                  {item.shortDescription}
                                </p>
                                
                                <div className="mt-1.5 flex items-center gap-2 text-[10px]">
                                  <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-0.5">
                                    Showcase Specs & Architecture →
                                  </span>
                                  <a
                                    href={item.officialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                    title="Open official biosme.com page"
                                  >
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Tier-III Equinix Datamena (Dubai) & Khazna (Abu Dhabi) Active</span>
                          </div>
                          <button
                            onClick={() => window.dispatchEvent(new CustomEvent('bios:open-chat'))}
                            className="text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer"
                          >
                            <span>Speak to Cloud Architect</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Public Cloud Dropdown (Multi-Cloud, Azure, AWS)
              if (link.dropdownType === 'public') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handlePublicMouseEnter}
                    onMouseLeave={handlePublicMouseLeave}
                  >
                    <button
                      onClick={() => handleNav('public-cloud')}
                      className={`px-2.5 2xl:px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                        isActive || publicCloudDropdownOpen
                          ? 'text-white bg-slate-900 border border-slate-700'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${publicCloudDropdownOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Mega Dropdown for Public Cloud Offerings */}
                    {publicCloudDropdownOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl bg-slate-950/98 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl p-5 text-left z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={handlePublicMouseEnter}
                        onMouseLeave={handlePublicMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center">
                              <Globe className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                                MANAGED HYPERSCALE & MULTI-CLOUD
                              </p>
                              <p className="text-[10px] text-slate-400 font-normal">
                                Single-Pane Orchestration, Azure UAE Regions & Dedicated ExpressRoute Fiber
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleNav('public-cloud')}
                            className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>View All Public Cloud</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Sub-Offerings Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {PUBLIC_CLOUD_SUB_OFFERINGS.map((item) => (
                            <div
                              key={item.id}
                              className="group p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col justify-between cursor-pointer"
                              onClick={() => handleNav('public-cloud', item.id)}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-2">
                                  <div className="w-8 h-8 rounded-lg bg-slate-800/90 group-hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center shrink-0">
                                    {getPublicSubIcon(item.id)}
                                  </div>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/50 shrink-0">
                                    {item.badge}
                                  </span>
                                </div>

                                <h4 className="text-xs font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed mt-1 font-normal">
                                  {item.shortDescription}
                                </p>
                              </div>
                              
                              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                                <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-0.5">
                                  Showcase Specs →
                                </span>
                                <a
                                  href={item.officialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                  title={`Open ${item.officialUrl}`}
                                >
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                            <span>Azure ExpressRoute & Direct Connect 10G Interconnects Live</span>
                          </div>
                          <button
                            onClick={() => window.dispatchEvent(new CustomEvent('bios:open-chat'))}
                            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer"
                          >
                            <span>Speak to Cloud Architect</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Resources Mega Dropdown
              if (link.dropdownType === 'resources') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                  >
                    <button
                      onClick={() => handleNav('resources')}
                      className={`px-2.5 2xl:px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                        isActive || resourcesDropdownOpen
                          ? 'text-white bg-slate-900 border border-slate-700'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Resources Dropdown Menu */}
                    {resourcesDropdownOpen && (
                      <div
                        className="absolute top-full right-0 mt-2 w-[540px] rounded-2xl bg-slate-950/98 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl p-5 text-left z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={handleResourcesMouseEnter}
                        onMouseLeave={handleResourcesMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center">
                              <BookOpen className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                                BIOS KNOWLEDGE & EVIDENCE HUB
                              </p>
                              <p className="text-[10px] text-slate-400 font-normal">
                                Customer Transformations, CBUAE/SAMA Regulations & Cloud Engineering
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleNav('resources', 'all')}
                            className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>Browse All</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Dropdown 4 Core Channels Grid */}
                        <div className="grid grid-cols-2 gap-2.5">
                          
                          {/* 1. Resources Hub */}
                          <div 
                            onClick={() => handleNav('resources', 'all')}
                            className="group p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all cursor-pointer flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <div className="flex items-center gap-1.5">
                                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                                  <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                                    Resources Hub
                                  </h4>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold bg-blue-950 text-blue-300 border border-blue-800">
                                  Central
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                Research, executive disaster recovery blueprints, and downloadable whitepapers.
                              </p>
                            </div>

                            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                              <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-0.5">
                                Explore Whitepapers →
                              </span>
                              <a
                                href="https://www.biosme.com/resources"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                title="Open https://www.biosme.com/resources"
                              >
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </div>

                          {/* 2. Case Studies */}
                          <div 
                            onClick={() => handleNav('resources', 'case-studies')}
                            className="group p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-rose-500/40 transition-all cursor-pointer flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <div className="flex items-center gap-1.5">
                                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                                  <h4 className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">
                                    Case Studies
                                  </h4>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold bg-rose-950 text-rose-300 border border-rose-800">
                                  Field Proof
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                Real customer stories: Petrochem Middle East, GCC Banking, and Healthcare networks.
                              </p>
                            </div>

                            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                              <span className="text-rose-400 group-hover:text-rose-300 font-semibold flex items-center gap-0.5">
                                View Case Studies →
                              </span>
                              <a
                                href="https://www.biosme.com/case-studies"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                title="Open https://www.biosme.com/case-studies"
                              >
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </div>

                          {/* 3. Compliance */}
                          <div 
                            onClick={() => handleNav('resources', 'compliance')}
                            className="group p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <div className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                  <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    Compliance & Governance
                                  </h4>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                                  CBUAE / SAMA
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                ISO 27001/27017/22301, SAMA ECC, CBUAE Cloud Outsourcing, and UAE Data Sovereignty.
                              </p>
                            </div>

                            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                              <span className="text-emerald-400 group-hover:text-emerald-300 font-semibold flex items-center gap-0.5">
                                Review Accreditations →
                              </span>
                              <a
                                href="https://www.biosme.com/compliance"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                title="Open https://www.biosme.com/compliance"
                              >
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </div>

                          {/* 4. Blogs */}
                          <div 
                            onClick={() => handleNav('resources', 'blogs')}
                            className="group p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <div className="flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                  <h4 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    Tech Blogs & Insights
                                  </h4>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
                                  Articles
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                Sovereign Cloud vs Hyperscaler economics, Ransomware immutability, and FinOps tips.
                              </p>
                            </div>

                            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                              <span className="text-indigo-400 group-hover:text-indigo-300 font-semibold flex items-center gap-0.5">
                                Read Tech Articles →
                              </span>
                              <a
                                href="https://www.biosme.com/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-slate-300 flex items-center gap-0.5 transition-colors"
                                title="Open https://www.biosme.com/blog"
                              >
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </div>

                        </div>

                        {/* Dropdown Footer */}
                        <div className="mt-3.5 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Gartner Magic Quadrant & ZainTech Partner Network Verified</span>
                          </div>
                          <a
                            href="https://www.biosme.com/resources"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                          >
                            <span>biosme.com/resources</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-2.5 2xl:px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-white bg-slate-900 border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* DR TCO Calculator Tool */}
            <button
              onClick={onOpenCalculator}
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              title="Disaster Recovery TCO Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>DR Calculator</span>
            </button>

            {/* Quick Assessment CTA button (Wide 2xl screens) */}
            <button
              onClick={onOpenAssessment}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              title="Cloud & Security Readiness Assessment"
            >
              <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Assessment</span>
            </button>

            {/* Direct Phone Call Button (Wide 2xl screens) */}
            <a
              href="tel:800246763"
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-rose-300 bg-rose-950/40 hover:bg-rose-950/70 border border-rose-800/50 transition-colors shadow-sm whitespace-nowrap shrink-0"
              title="Toll Free UAE: 800 BIOSME (800 246763)"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>800 BIOSME</span>
            </a>

            {/* Primary Chatbot-style Gradient CONTACT US Button */}
            <button
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-md shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
            >
              CONTACT US
            </button>

            {/* Mobile Contact Button (< sm) */}
            <button
              onClick={() => handleNav('contact')}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 shadow-md shadow-rose-950/40 border border-white/20 whitespace-nowrap shrink-0"
            >
              CONTACT
            </button>

            {/* Mobile Menu Toggle Button (Strictly xl:hidden so it NEVER shows alongside desktop nav) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 py-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="grid gap-2">
            {mobileNavLinks.map((link) => {
              const isActive = currentPage === link.id;

              // Private Cloud in Mobile
              if (link.dropdownType === 'private') {
                return (
                  <div key={link.id} className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                    <button
                      onClick={() => setMobilePrivateCloudOpen(!mobilePrivateCloudOpen)}
                      className={`w-full text-left px-4 py-3 text-xs font-bold tracking-wider flex items-center justify-between transition-colors ${
                        isActive ? 'text-white bg-slate-900' : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobilePrivateCloudOpen ? 'rotate-180 text-rose-400' : 'text-slate-400'}`} />
                    </button>

                    {mobilePrivateCloudOpen && (
                      <div className="p-2 bg-slate-950 border-t border-slate-800 space-y-1">
                        <button
                          onClick={() => handleNav('private-cloud')}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-rose-400 hover:bg-slate-900 rounded-lg flex items-center justify-between"
                        >
                          <span>All Private Cloud Overview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        {PRIVATE_CLOUD_SUB_OFFERINGS.map((sub) => (
                          <div
                            key={sub.id}
                            className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2"
                            onClick={() => handleNav('private-cloud', sub.id)}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="shrink-0">
                                {getPrivateSubIcon(sub.id)}
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-white truncate">{sub.name}</p>
                                <p className="text-[10px] text-slate-400 truncate">{sub.tagline}</p>
                              </div>
                            </div>
                            <a
                              href={sub.officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-1.5 text-slate-400 hover:text-white"
                              title="Official Website"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Public Cloud in Mobile
              if (link.dropdownType === 'public') {
                return (
                  <div key={link.id} className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                    <button
                      onClick={() => setMobilePublicCloudOpen(!mobilePublicCloudOpen)}
                      className={`w-full text-left px-4 py-3 text-xs font-bold tracking-wider flex items-center justify-between transition-colors ${
                        isActive ? 'text-white bg-slate-900' : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobilePublicCloudOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                    </button>

                    {mobilePublicCloudOpen && (
                      <div className="p-2 bg-slate-950 border-t border-slate-800 space-y-1">
                        <button
                          onClick={() => handleNav('public-cloud')}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-blue-400 hover:bg-slate-900 rounded-lg flex items-center justify-between"
                        >
                          <span>All Public Cloud Overview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        {PUBLIC_CLOUD_SUB_OFFERINGS.map((sub) => (
                          <div
                            key={sub.id}
                            className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2"
                            onClick={() => handleNav('public-cloud', sub.id)}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="shrink-0">
                                {getPublicSubIcon(sub.id)}
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-white truncate">{sub.name}</p>
                                <p className="text-[10px] text-slate-400 truncate">{sub.tagline}</p>
                              </div>
                            </div>
                            <a
                              href={sub.officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-1.5 text-slate-400 hover:text-white"
                              title="Official Website"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Resources in Mobile
              if (link.dropdownType === 'resources') {
                return (
                  <div key={link.id} className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className={`w-full text-left px-4 py-3 text-xs font-bold tracking-wider flex items-center justify-between transition-colors ${
                        isActive ? 'text-white bg-slate-900' : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                    </button>

                    {mobileResourcesOpen && (
                      <div className="p-2 bg-slate-950 border-t border-slate-800 space-y-1">
                        <button
                          onClick={() => handleNav('resources', 'all')}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-blue-400 hover:bg-slate-900 rounded-lg flex items-center justify-between"
                        >
                          <span>All Resources & Knowledge Hub</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {/* 1. Resources central */}
                        <div
                          className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                          onClick={() => handleNav('resources', 'all')}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white truncate">Resources Hub</p>
                              <p className="text-[10px] text-slate-400 truncate">Whitepapers & DR Blueprints</p>
                            </div>
                          </div>
                          <a
                            href="https://www.biosme.com/resources"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 text-slate-400 hover:text-white"
                            title="Official Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* 2. Case Studies */}
                        <div
                          className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                          onClick={() => handleNav('resources', 'case-studies')}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText className="w-4 h-4 text-rose-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white truncate">Case Studies</p>
                              <p className="text-[10px] text-slate-400 truncate">Petrochem, Banking, Healthcare</p>
                            </div>
                          </div>
                          <a
                            href="https://www.biosme.com/case-studies"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 text-slate-400 hover:text-white"
                            title="Official Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* 3. Compliance */}
                        <div
                          className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                          onClick={() => handleNav('resources', 'compliance')}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white truncate">Compliance & Regulatory</p>
                              <p className="text-[10px] text-slate-400 truncate">CBUAE, SAMA ECC, ISO Standards</p>
                            </div>
                          </div>
                          <a
                            href="https://www.biosme.com/compliance"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 text-slate-400 hover:text-white"
                            title="Official Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* 4. Blogs */}
                        <div
                          className="p-2.5 rounded-lg hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                          onClick={() => handleNav('resources', 'blogs')}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white truncate">Tech Blogs & Insights</p>
                              <p className="text-[10px] text-slate-400 truncate">Cloud Strategy, DRaaS, FinOps</p>
                            </div>
                          </div>
                          <a
                            href="https://www.biosme.com/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 text-slate-400 hover:text-white"
                            title="Official Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isContact = link.id === 'contact';

              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-bold tracking-wider transition-all ${
                    isContact
                      ? 'bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 text-white font-bold shadow-md shadow-rose-950/40 border border-white/20 text-center'
                      : isActive
                        ? 'bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 text-white font-bold'
                        : 'bg-slate-900/60 text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-orange-400" />
              <span>DR Calculator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white cursor-pointer"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Assessment</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Toll Free: 800 BIOSME</span>
              <a href="tel:800246763" className="text-rose-400 font-bold font-mono hover:underline">
                800 246763
              </a>
            </div>
            <div className="flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('bios:open-chat'));
                }}
                className="text-slate-300 hover:text-white font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Live Support Chat</span>
              </button>
              <a
                href="https://portal.cloudhpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
              >
                <span>Support Login</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
