import React, { useState, useEffect, useMemo } from 'react';
import { 
  FileText, 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  Search,
  Filter,
  Layers,
  Award,
  Calendar,
  Clock,
  Building,
  Check,
  Share2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { 
  RESOURCES_DATA, 
  RESOURCE_CATEGORIES, 
  ResourceItem 
} from '../data/resourcesData';

interface ResourcesPageProps {
  onNavigate: (page: string, subId?: string) => void;
  onOpenContact: (subject?: string) => void;
  initialTab?: string;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onOpenContact,
  initialTab = 'all'
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<ResourceItem | null>(null);
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync when initialTab prop updates (e.g. from dropdown or URL)
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    RESOURCES_DATA.forEach(item => {
      item.tags.forEach(t => tagSet.add(t));
    });
    return Array.from(tagSet);
  }, []);

  // Filtered resources
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter(item => {
      // Tab filter
      if (activeTab === 'case-studies' && item.category !== 'case-study') return false;
      if (activeTab === 'compliance' && item.category !== 'compliance') return false;
      if (activeTab === 'blogs' && item.category !== 'blog') return false;
      if (activeTab === 'whitepapers' && item.category !== 'whitepaper') return false;

      // Tag filter
      if (selectedTag && !item.tags.includes(selectedTag)) return false;

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIndustry = item.industry?.toLowerCase().includes(query) || false;
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesIndustry && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, selectedTag, searchQuery]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedTag(null);
    if (tabId === 'all') {
      window.location.hash = 'resources';
    } else {
      window.location.hash = `resources/${tabId}`;
    }
  };

  const handleDownloadSimulation = (item: ResourceItem) => {
    setDownloadSuccessItem(item.title);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 4500);
  };

  const handleCopyShare = (item: ResourceItem) => {
    navigator.clipboard.writeText(item.officialUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button onClick={() => handleTabChange('all')} className="hover:text-white transition-colors cursor-pointer">
            Resources
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-semibold capitalize">
            {activeTab === 'all' ? 'All Knowledge Hub' : activeTab.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-14 sm:py-18 border-b border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 overflow-hidden">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            
            {/* ZainTech badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>BIOS Knowledge & Insights Hub</span>
              <span className="text-slate-500">|</span>
              <span className="text-blue-400">A ZainTech Company</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Resources, Case Studies & Compliance
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Explore how Middle Eastern enterprises achieve verified disaster recovery, regulatory compliance (CBUAE & SAMA), and optimized sovereign cloud operations.
            </p>

            {/* Official Website Direct Access Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-400">Official biosme.com hubs:</span>
              <a 
                href="https://www.biosme.com/resources" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 transition-colors"
              >
                <span>/resources</span>
                <ArrowUpRight className="w-3 h-3 text-blue-400" />
              </a>
              <a 
                href="https://www.biosme.com/case-studies" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 transition-colors"
              >
                <span>/case-studies</span>
                <ArrowUpRight className="w-3 h-3 text-rose-400" />
              </a>
              <a 
                href="https://www.biosme.com/compliance" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 transition-colors"
              >
                <span>/compliance</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </a>
              <a 
                href="https://www.biosme.com/blog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 transition-colors"
              >
                <span>/blog</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-white">100%</p>
              <p className="text-xs text-slate-400 mt-0.5">UAE & KSA In-Country Residency</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-rose-400">&lt; 15 Mins</p>
              <p className="text-xs text-slate-400 mt-0.5">Verified DRaaS RPO Benchmark</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-emerald-400">5+ ISO</p>
              <p className="text-xs text-slate-400 mt-0.5">Accreditations & CBUAE Aligned</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-blue-400">300+</p>
              <p className="text-xs text-slate-400 mt-0.5">GCC Enterprise Customers</p>
            </div>
          </div>

        </div>
      </section>

      {/* Navigation Tabs & Search Controls */}
      <section className="sticky top-[69px] z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 w-full lg:w-auto overflow-x-auto">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                All Resources ({RESOURCES_DATA.length})
              </button>

              <button
                onClick={() => handleTabChange('case-studies')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'case-studies'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Case Studies</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/30 font-mono">
                  {RESOURCES_DATA.filter(i => i.category === 'case-study').length}
                </span>
              </button>

              <button
                onClick={() => handleTabChange('compliance')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'compliance'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Compliance & Regulations</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/30 font-mono">
                  {RESOURCES_DATA.filter(i => i.category === 'compliance').length}
                </span>
              </button>

              <button
                onClick={() => handleTabChange('blogs')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'blogs'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Blogs & Insights</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/30 font-mono">
                  {RESOURCES_DATA.filter(i => i.category === 'blog').length}
                </span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources, topics, regulations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-900 overflow-x-auto text-[11px]">
            <span className="text-slate-500 shrink-0 font-medium">Quick Topics:</span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40 shrink-0 hover:bg-rose-500/30"
              >
                Reset Tag ✕
              </button>
            )}
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-2.5 py-0.5 rounded-md shrink-0 transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Alert Banner for Downloads */}
        {downloadSuccessItem && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/80 flex items-center justify-between text-xs text-emerald-200 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Document Prepared for Immediate Access</p>
                <p className="text-emerald-300 text-[11px]">{downloadSuccessItem} briefing package is ready.</p>
              </div>
            </div>
            <button
              onClick={() => setDownloadSuccessItem(null)}
              className="px-2.5 py-1 bg-emerald-900/60 hover:bg-emerald-800/80 rounded text-white font-medium transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Dynamic Category Description Banner */}
        <div className="mb-8 p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${
                activeTab === 'case-studies' ? 'bg-rose-500' :
                activeTab === 'compliance' ? 'bg-emerald-500' :
                activeTab === 'blogs' ? 'bg-indigo-500' : 'bg-blue-500'
              }`} />
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                {activeTab === 'all' && 'All Knowledge & Customer Evidence'}
                {activeTab === 'case-studies' && 'Client Case Studies & Field Proof'}
                {activeTab === 'compliance' && 'Regulatory Compliance, CBUAE & SAMA'}
                {activeTab === 'blogs' && 'Cloud Architecture & Cybersecurity Blogs'}
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              {activeTab === 'all' && 'Showing all whitepapers, customer case studies, compliance blueprints, and architecture articles.'}
              {activeTab === 'case-studies' && 'Real-world customer deployments in petrochemicals, GCC banking, regional healthcare, and enterprise retail.'}
              {activeTab === 'compliance' && 'Frameworks and technical attestations for Central Bank of UAE (CBUAE), SAMA Saudi Arabia, and ISO certifications.'}
              {activeTab === 'blogs' && 'Deep-dive technology articles written by BIOS cloud architects on sovereign cloud, DRaaS, and FinOps.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={
                activeTab === 'case-studies' ? 'https://www.biosme.com/case-studies' :
                activeTab === 'compliance' ? 'https://www.biosme.com/compliance' :
                activeTab === 'blogs' ? 'https://www.biosme.com/blog' : 'https://www.biosme.com/resources'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <span>View Official Live Page</span>
              <ExternalLink className="w-3 h-3 text-blue-400" />
            </a>

            <button
              onClick={() => onOpenContact('Resources & Consultation')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow"
            >
              Request Scoping Call
            </button>
          </div>
        </div>

        {/* No Results Fallback */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No matching resources found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              We couldn't find any resources matching your search query or tag filter. Try adjusting your search term or reset the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setActiveTab('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Resources Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.map((item) => {
            const isCaseStudy = item.category === 'case-study';
            const isCompliance = item.category === 'compliance';
            const isBlog = item.category === 'blog';

            return (
              <div 
                key={item.id}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-slate-700 shadow-xl flex flex-col justify-between space-y-5 transition-all hover:translate-y-[-2px]"
              >
                <div className="space-y-4">
                  
                  {/* Category Pill & Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                        isCaseStudy ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' :
                        isCompliance ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                        isBlog ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' :
                        'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}>
                        {item.categoryLabel}
                      </span>

                      {item.highlightBadge && (
                        <span className="text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {item.highlightBadge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{item.readTime || '5 min'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedItemForModal(item)}
                    className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  {/* Metadata Row (Industry / Date) */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    {item.industry && (
                      <div className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.industry}</span>
                      </div>
                    )}
                    {item.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights / Metrics Grid */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-center">
                          <p className="text-[10px] text-slate-400 font-medium truncate">{m.label}</p>
                          <p className="text-xs font-bold text-white mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map(t => (
                      <span 
                        key={t}
                        onClick={() => setSelectedTag(t)}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 cursor-pointer transition-colors"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedItemForModal(item)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Read Full Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => handleDownloadSimulation(item)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                      title="Download PDF briefing"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </button>
                  </div>

                  {/* Official URL link */}
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    title={`Open on ${item.officialUrl}`}
                  >
                    <span className="text-[11px] font-mono">biosme.com</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Detail Inspector Modal */}
      {selectedItemForModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedItemForModal(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {selectedItemForModal.categoryLabel}
                  </span>
                  {selectedItemForModal.highlightBadge && (
                    <span className="text-[11px] font-semibold text-emerald-400">
                      • {selectedItemForModal.highlightBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {selectedItemForModal.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold shrink-0 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <p className="text-slate-500 font-medium">Industry / Sector</p>
                <p className="text-white font-semibold mt-0.5">{selectedItemForModal.industry || 'Enterprise Cloud'}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium">Author / Entity</p>
                <p className="text-white font-semibold mt-0.5">{selectedItemForModal.clientOrAuthor || 'BIOS Middle East'}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium">Date & Validation</p>
                <p className="text-white font-semibold mt-0.5">{selectedItemForModal.date || 'Active Standard'}</p>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">
                Executive Overview:
              </p>
              <p>
                {selectedItemForModal.description}
              </p>
              {selectedItemForModal.contentSnippet && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 italic text-slate-300 leading-relaxed">
                  "{selectedItemForModal.contentSnippet}"
                </div>
              )}
            </div>

            {/* Metrics */}
            {selectedItemForModal.metrics && (
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Benchmarks & Deliverables
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedItemForModal.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <p className="text-xs text-slate-400">{m.label}</p>
                      <p className="text-base font-extrabold text-blue-400 mt-1">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            {selectedItemForModal.keyTakeaways && (
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Strategic & Architectural Takeaways
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedItemForModal.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={selectedItemForModal.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5"
                >
                  <span>Open Official Live Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyShare(selectedItemForModal)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copied URL!' : 'Share'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  const item = selectedItemForModal;
                  setSelectedItemForModal(null);
                  onOpenContact(`Resource Inquiry: ${item.title}`);
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                Discuss with Cloud Architect
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Enterprise Consultation Call to Action Section */}
      <section className="py-16 border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Need Custom Case Study or Regulatory Audit Documentation?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Schedule a Confidential Architecture & Compliance Review
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our certified cloud and compliance specialists can prepare targeted SAMA, CBUAE, or ISO audit packs and conduct a 48-hour DRaaS feasibility benchmark for your infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenContact('Compliance & Architecture Audit Request')}
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 hover:from-rose-500 hover:via-rose-600 hover:to-blue-600 shadow-xl shadow-rose-950/40 hover:shadow-rose-600/30 border border-white/20 transition-all uppercase tracking-wider cursor-pointer hover:scale-105"
            >
              Request Compliance Consultation
            </button>

            <button
              onClick={() => onNavigate('calculator')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
            >
              Calculate DR & Cloud TCO
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
