import React, { useState } from 'react';
import { Quote, CheckCircle2, Building2, Shield, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/biosContent';

interface CustomerStoriesProps {
  onOpenAssessment: () => void;
}

export const CustomerStories: React.FC<CustomerStoriesProps> = ({ onOpenAssessment }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const filtered = activeCategory === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  const current = filtered[selectedTestimonial] || filtered[0];

  return (
    <section id="customer-stories" className="py-20 lg:py-28 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Proven In Enterprise GCC Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Word From Our Customers
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            Real enterprise feedback from Chief Information Officers, Heads of Infrastructure, and IT Leaders who rely on BIOS Middle East to protect their critical operations.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {['All', 'DRaaS', 'Cloud Migration', 'Managed Services'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedTestimonial(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-rose-600 via-rose-700 to-blue-700 text-white shadow-md shadow-rose-950/40 border border-white/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Highlight (The Petrochem Hero Card from screenshot) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
            
            {/* Ambient Watermark Quote Icon */}
            <Quote className="absolute -top-4 -right-4 w-36 h-36 text-slate-800/30 rotate-12 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Top Banner with Company Logo & Category */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-extrabold font-mono text-sm tracking-wider text-white">
                    {current.logoText || current.company}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{current.company}</div>
                    <div className="text-xs text-slate-400">{current.industry}</div>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {current.category}
                </span>
              </div>

              {/* The Exact Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              {/* Author and Quantified Metric */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-base font-bold text-white">{current.author}</div>
                  <div className="text-xs text-slate-400">{current.role}</div>
                </div>

                {current.metric && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 sm:text-right">
                    <div className="text-xl font-bold font-mono text-emerald-400">
                      {current.metric}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {current.metricLabel}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Quick Selectors for Other Stories */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedTestimonial(idx)}
                className={`cursor-pointer p-4 rounded-xl border transition-all text-left ${
                  selectedTestimonial === idx
                    ? 'bg-slate-900 border-blue-500 shadow-md'
                    : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xs text-white">{item.company}</div>
                  <span className="text-[10px] text-slate-400 font-mono">{item.category}</span>
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2 mt-1.5">
                  "{item.quote}"
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
