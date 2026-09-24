import React from 'react';
import { Hero } from '../components/Hero';
import { ThreePillars } from '../components/ThreePillars';
import { MultiCloudSection } from '../components/MultiCloudSection';
import { BuildTogether } from '../components/BuildTogether';
import { NocSocSection } from '../components/NocSocSection';
import { CustomerStories } from '../components/CustomerStories';
import { PartnersSection } from '../components/PartnersSection';
import { PillarItem, ServicePillar } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenGuideModal: () => void;
  onOpenCalculator: () => void;
  onOpenAssessment: () => void;
  onOpenNocTour: () => void;
  onSelectItem: (item: PillarItem, pillar: ServicePillar) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenGuideModal,
  onOpenCalculator,
  onOpenAssessment,
  onOpenNocTour,
  onSelectItem,
}) => {
  return (
    <div>
      {/* Hero Carousel with Live Telemetry */}
      <Hero 
        onOpenGuideModal={onOpenGuideModal}
        onOpenCalculator={onOpenCalculator}
        onOpenAssessment={onOpenAssessment}
        onOpenNocTour={onOpenNocTour}
      />

      {/* The 3 Core Pillars (Private Cloud, GCC Public Cloud, Managed Services) */}
      <ThreePillars 
        onSelectItem={onSelectItem}
        onOpenAssessment={onOpenAssessment}
        onNavigate={onNavigate}
      />

      {/* BIOS Multi-Cloud - "A Single Pane of Glass" */}
      <MultiCloudSection 
        onOpenGuideModal={onOpenGuideModal}
        onOpenAssessment={onOpenAssessment}
      />

      {/* "Let's build it together" - 4-Stage Cloud Migration Framework */}
      <BuildTogether 
        onOpenAssessment={onOpenAssessment}
        onOpenGuideModal={onOpenGuideModal}
      />

      {/* "Come in and See our NOC and SOC" */}
      <NocSocSection 
        onOpenNocTour={onOpenNocTour}
        onOpenAssessment={onOpenAssessment}
      />

      {/* "A Word From Our Customers" (Petrochem & Regional GCC Testimonials) */}
      <CustomerStories 
        onOpenAssessment={onOpenAssessment}
      />

      {/* Strategic Technology Alliances & Accreditations */}
      <PartnersSection />
    </div>
  );
};
