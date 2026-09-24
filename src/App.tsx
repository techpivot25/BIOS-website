import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Full dedicated pages (converted from popups and expanded per user instruction)
import { HomePage } from './pages/HomePage';
import { PrivateCloudPage } from './pages/PrivateCloudPage';
import { PublicCloudPage } from './pages/PublicCloudPage';
import { ManagedServicesPage } from './pages/ManagedServicesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { NocSocTourPage } from './pages/NocSocTourPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

import { PillarDetailModal } from './components/PillarDetailModal';
import { GuideDownloadModal } from './components/GuideDownloadModal';
import { ChatBot } from './components/ChatBot';

import { PillarItem, ServicePillar } from './types';
import { SERVICE_PILLARS } from './data/biosContent';

export default function App() {
  // Navigation state supporting: 'home' | 'private-cloud' | 'public-cloud' | 'managed-services' | 'calculator' | 'noc-soc-tour' | 'resources' | 'contact'
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPrivateCloudSub, setSelectedPrivateCloudSub] = useState<string>('private-cloudhpt');
  const [selectedPublicCloudSub, setSelectedPublicCloudSub] = useState<string>('multi-cloud');
  const [selectedResourceTab, setSelectedResourceTab] = useState<string>('all');
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  // Detail Modal state for individual sub-offerings
  const [selectedPillarItem, setSelectedPillarItem] = useState<PillarItem | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar | null>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Sync with URL hash on load and hash change for clean browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      if (!fullHash) return;

      // Handle direct alias hashes: #case-studies, #compliance, #blogs
      if (['case-studies', 'compliance', 'blogs', 'blog'].includes(fullHash)) {
        setCurrentPage('resources');
        setSelectedResourceTab(fullHash === 'blog' ? 'blogs' : fullHash);
        return;
      }

      if (fullHash.startsWith('resources')) {
        setCurrentPage('resources');
        const parts = fullHash.split('/');
        if (parts.length > 1 && parts[1]) {
          setSelectedResourceTab(parts[1]);
        } else {
          setSelectedResourceTab('all');
        }
        return;
      }

      if (fullHash.startsWith('private-cloud')) {
        setCurrentPage('private-cloud');
        const parts = fullHash.split('/');
        if (parts.length > 1 && parts[1]) {
          setSelectedPrivateCloudSub(parts[1]);
        }
        return;
      }

      if (fullHash.startsWith('public-cloud')) {
        setCurrentPage('public-cloud');
        const parts = fullHash.split('/');
        if (parts.length > 1 && parts[1]) {
          setSelectedPublicCloudSub(parts[1]);
        }
        return;
      }

      if ([
        'home', 
        'private-cloud', 
        'public-cloud', 
        'managed-services', 
        'calculator', 
        'noc-soc-tour', 
        'resources', 
        'contact'
      ].includes(fullHash)) {
        setCurrentPage(fullHash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, subId?: string) => {
    setCurrentPage(page);
    if (page === 'private-cloud' && subId) {
      setSelectedPrivateCloudSub(subId);
      window.location.hash = `private-cloud/${subId}`;
    } else if (page === 'public-cloud' && subId) {
      setSelectedPublicCloudSub(subId);
      window.location.hash = `public-cloud/${subId}`;
    } else if (page === 'resources' && subId) {
      setSelectedResourceTab(subId);
      window.location.hash = `resources/${subId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject?: string) => {
    setContactSubject(subject);
    navigateTo('contact');
  };

  const handleSelectServiceItem = (itemId: string) => {
    for (const pillar of SERVICE_PILLARS) {
      const match = pillar.items.find((i) => i.id === itemId);
      if (match) {
        setSelectedPillarItem(match);
        setSelectedPillar(pillar);
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* Top Utility Bar */}
      <TopBar 
        onOpenCalculator={() => navigateTo('calculator')}
        onOpenContact={() => handleOpenContactWithSubject('General Inquiry')}
      />

      {/* Main Header with full page navigation */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAssessment={() => handleOpenContactWithSubject('Cloud Assessment')}
        onOpenCalculator={() => navigateTo('calculator')}
        onSelectServiceItem={handleSelectServiceItem}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo}
            onOpenGuideModal={() => setIsGuideModalOpen(true)}
            onOpenCalculator={() => navigateTo('calculator')}
            onOpenAssessment={() => handleOpenContactWithSubject('Cloud Readiness Assessment')}
            onOpenNocTour={() => navigateTo('noc-soc-tour')}
            onSelectItem={(item, pillar) => {
              setSelectedPillarItem(item);
              setSelectedPillar(pillar);
            }}
          />
        )}

        {currentPage === 'private-cloud' && (
          <PrivateCloudPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
            initialSubOfferingId={selectedPrivateCloudSub}
          />
        )}

        {currentPage === 'public-cloud' && (
          <PublicCloudPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
            initialSubOfferingId={selectedPublicCloudSub}
          />
        )}

        {currentPage === 'managed-services' && (
          <ManagedServicesPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
          />
        )}

        {currentPage === 'calculator' && (
          <CalculatorPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
          />
        )}

        {currentPage === 'noc-soc-tour' && (
          <NocSocTourPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage 
            onNavigate={navigateTo}
            onOpenContact={handleOpenContactWithSubject}
            initialTab={selectedResourceTab}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={navigateTo}
            defaultSubject={contactSubject}
          />
        )}
      </main>

      {/* Enterprise Footer */}
      <Footer 
        onNavigate={navigateTo}
        onOpenCalculator={() => navigateTo('calculator')}
        onOpenAssessment={() => handleOpenContactWithSubject('General Consultation')}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
        onOpenNocTour={() => navigateTo('noc-soc-tour')}
      />

      {/* Technical Spec Inspector for Sub-Items */}
      <PillarDetailModal 
        item={selectedPillarItem}
        pillarTitle={selectedPillar?.title || 'Cloud Offering'}
        pillarColor={selectedPillar?.colorScheme.accent || '#2563EB'}
        onClose={() => {
          setSelectedPillarItem(null);
          setSelectedPillar(null);
        }}
        onRequestQuote={(item) => {
          handleOpenContactWithSubject(`Quote: ${item.name} (${item.tagline})`);
        }}
        onDownloadGuide={() => setIsGuideModalOpen(true)}
      />

      {/* Quick Whitepaper Download Modal */}
      <GuideDownloadModal 
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

      {/* Floating AI Technical Support & Lead Inquiry Chatbot */}
      <ChatBot />

    </div>
  );
}
