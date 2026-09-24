import { ServicePillar, Testimonial, Partner } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'private-cloud',
    title: 'Private Cloud',
    subtitle: 'High-performance dedicated infrastructure built for sovereignty, security, and low latency.',
    colorScheme: {
      accent: '#E11D48', // Crimson Red from screenshot
      border: 'border-rose-500/30',
      bgGlow: 'from-rose-950/40 to-transparent',
      badgeBg: 'bg-rose-500/10 border-rose-500/30',
      badgeText: 'text-rose-400',
    },
    summary: 'Dedicated computing and storage engineered in tier III local GCC datacenters with zero shared-tenant overhead.',
    icon: 'ShieldServer',
    items: [
      {
        id: 'private-cloudhpt',
        name: 'Private CloudHPT',
        tagline: 'Fast Cloud - Dedicated Enterprise Infrastructure',
        description: 'Single-tenant, sovereign private cloud built on enterprise Cisco UCS and high-throughput NVMe flash storage. Engineered for mission-critical enterprise databases, ERPs, and compliance-sensitive workloads.',
        features: [
          '100% Dedicated Compute & Flash NVMe Storage',
          'Sub-millisecond local latency across UAE & KSA',
          'Zero noisy-neighbor interference or shared hypervisor risk',
          'Custom hypervisor tuning (VMware vSphere Enterprise Plus)',
          '99.995% High Availability Financial-Grade SLA'
        ],
        metrics: [
          { label: 'Network Latency', value: '< 2 ms' },
          { label: 'Uptime SLA', value: '99.995%' },
          { label: 'Data Residency', value: '100% In-Country' }
        ],
        highlight: 'Fast In-Country Cloud',
        isPopular: true
      },
      {
        id: 'hybrid-cloudhpt',
        name: 'Hybrid CloudHPT',
        tagline: 'Flexible Cloud - Bridge On-Premises & GCC Cloud',
        description: 'Seamlessly extend your existing on-premises data center or legacy hardware into CloudHPT using dedicated layer-2 dark fiber interconnects and software-defined WAN.',
        features: [
          'Direct Layer-2 low latency interconnect (MPLS/Dark Fiber)',
          'Unified single-pane management across physical and cloud',
          'Dynamic burst capacity for seasonal GCC retail & finance spikes',
          'Consistent security policies across local and cloud environments',
          'Phased migration with zero forklift disruption'
        ],
        metrics: [
          { label: 'Direct Connect', value: '10 Gbps+' },
          { label: 'Hybrid Mesh', value: 'Cisco ACI' },
          { label: 'Workload Portability', value: 'Instant' }
        ],
        highlight: 'Flexible Cloud'
      },
      {
        id: 'datacenters-colocation',
        name: 'Datacenters',
        tagline: 'In Country Co-Location - Tier III Facilities',
        description: 'Carrier-neutral Tier III certified facilities located in Dubai Internet City, Abu Dhabi, and Riyadh. Built with N+1 redundant power, cooling, and biometric multi-factor physical defense.',
        features: [
          'Tier III Uptime Institute Design & Facility Certified',
          'Dual redundant electrical feeds with 72-hour fuel backup',
          'Carrier-neutral cross-connects (Etisalat, du, STC, Zain)',
          '24/7/365 CCTV, biometric iris scanners, and mantraps',
          'Local regulatory compliance with CBUAE, SAMA, and NESAC'
        ],
        metrics: [
          { label: 'Facility Tier', value: 'Tier III' },
          { label: 'Power Redundancy', value: '2N + 1' },
          { label: 'GCC Locations', value: 'UAE & KSA' }
        ],
        highlight: 'In-Country Co-Location'
      }
    ]
  },
  {
    id: 'public-cloud',
    title: 'GCC Public Cloud',
    subtitle: 'Sovereign multi-tenant cloud and Gartner-recognized business continuity solutions.',
    colorScheme: {
      accent: '#2563EB', // Sapphire / Cobalt Blue from screenshot
      border: 'border-blue-500/30',
      bgGlow: 'from-blue-950/40 to-transparent',
      badgeBg: 'bg-blue-500/10 border-blue-500/30',
      badgeText: 'text-blue-400',
    },
    summary: 'The Middle East’s leading sovereign cloud: IaaS, Gartner Magic Quadrant DRaaS, and immutable BaaS with zero egress penalties.',
    icon: 'CloudLightning',
    items: [
      {
        id: 'multi-cloud-managed',
        name: 'Multi-Cloud',
        tagline: 'Managed Services Across Clouds',
        description: 'Centralized governance, cloud optimization, and unified 24x7 monitoring across CloudHPT, Microsoft Azure, Amazon Web Services (AWS), and Google Cloud.',
        features: [
          'Unified Single-Pane-of-Glass monitoring and telemetry',
          'FinOps cost governance & cloud spend optimization',
          'Automated security compliance guardrails & drift detection',
          'Hybrid workload orchestration and policy synchronization',
          'Multi-cloud certified architects (Azure, AWS, VMware)'
        ],
        metrics: [
          { label: 'Cost Reduction', value: 'Up to 34%' },
          { label: 'Clouds Supported', value: 'CloudHPT, Azure, AWS' },
          { label: 'Governance SLA', value: '24x7' }
        ],
        highlight: 'Single-Pane-of-Glass',
        isPopular: true
      },
      {
        id: 'cloudhpt-iaas',
        name: 'CloudHPT IaaS',
        tagline: 'In Country Infrastructure as a Service',
        description: 'High-availability public cloud located inside the borders of the UAE and Saudi Arabia. Guaranteed sovereign data residency with predictable billing and zero egress fees.',
        features: [
          'Predictable fixed OPEX without unpredictable egress charges',
          'Instant self-service provisioning or fully BIOS-managed',
          'High-performance all-flash enterprise SAN storage',
          'Local peering with GCC internet exchanges for sub-5ms roundtrips',
          'Full API automation and Terraform / Ansible integrations'
        ],
        metrics: [
          { label: 'Data Egress Cost', value: '$0.00 / Free' },
          { label: 'Regional Nodes', value: 'Dubai, Riyadh, DXB' },
          { label: 'Provisioning', value: '< 5 Mins' }
        ],
        highlight: 'In Country Cloud'
      },
      {
        id: 'cloudhpt-draas',
        name: 'CloudHPT DRaaS',
        tagline: 'Disaster Recovery as a Service (Gartner Recognized)',
        description: 'BIOS Middle East is recognized by Gartner in the Magic Quadrant for Disaster Recovery as a Service. Protect mission-critical enterprise data with sub-15 minute RPO and tested failovers.',
        features: [
          'Recognized in Gartner Magic Quadrant for DRaaS',
          'RPO < 15 minutes, RTO < 1 hour with automated one-click failover',
          'Regular non-disruptive disaster recovery testing & audit reports',
          'Continuous real-time block-level replication (Veeam / Zerto)',
          'End-to-end runbook development by certified disaster recovery engineers'
        ],
        metrics: [
          { label: 'Target RPO', value: '< 15 Mins' },
          { label: 'Target RTO', value: '< 60 Mins' },
          { label: 'Gartner Status', value: 'Magic Quadrant' }
        ],
        highlight: 'Gartner Recognized DRaaS',
        isPopular: true
      },
      {
        id: 'cloudhpt-baas',
        name: 'CloudHPT BaaS',
        tagline: 'Backup as a Service - Ransomware-Proof',
        description: 'Air-gapped, immutable cloud backups safeguarding your enterprise against sophisticated ransomware attacks, data corruption, and accidental deletion.',
        features: [
          'Immutable WORM storage preventing ransomware alteration',
          'Air-gapped secondary copy isolated in sovereign GCC vault',
          'Granular item-level recovery for SQL, Exchange, M365 & SAP',
          'End-to-end AES 256-bit encryption in-transit and at-rest',
          'Proactive daily backup verification and integrity audits'
        ],
        metrics: [
          { label: 'Encryption', value: 'AES-256' },
          { label: 'Ransomware Shield', value: 'Air-Gapped' },
          { label: 'Success Rate', value: '99.98%' }
        ],
        highlight: 'Ransomware-Proof'
      }
    ]
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    subtitle: '24x7 NOC & SOC operations delivering total resilience, cybersecurity, and expert support.',
    colorScheme: {
      accent: '#10B981', // Emerald Green from screenshot
      border: 'border-emerald-500/30',
      bgGlow: 'from-emerald-950/40 to-transparent',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      badgeText: 'text-emerald-400',
    },
    summary: 'Around-the-clock infrastructure, cybersecurity, and end-user support backed by regional certified engineers.',
    icon: 'CpuShield',
    items: [
      {
        id: 'bios-assured',
        name: 'BIOS Assured',
        tagline: '24x7 Fully Managed IT Infrastructure',
        description: 'Complete hands-on management of your servers, storage, virtualization, and enterprise networking. Our GCC-based NOC team monitors health, applies patches, and resolves alerts 24x7.',
        features: [
          '24/7/365 proactive Network Operations Center (NOC) monitoring',
          'Automated patching, firmware updates, and capacity planning',
          'Certified Cisco, VMware, Microsoft, and Linux administrators',
          'ITIL-aligned incident, problem, and change management',
          'Guaranteed 15-minute response SLA for critical priority incidents'
        ],
        metrics: [
          { label: 'Response SLA', value: '< 15 Mins' },
          { label: 'NOC Coverage', value: '24/7/365' },
          { label: 'Engineers', value: 'In-Region' }
        ],
        highlight: 'Fully Managed IT',
        isPopular: true
      },
      {
        id: 'bios-secured',
        name: 'BIOS Secured',
        tagline: '24x7 Fully Managed IT Security & SIEM',
        description: 'Elite 24/7 Security Operations Center (SOC) equipped with next-gen SIEM, automated EDR threat hunting, vulnerability scanning, and dark web intelligence.',
        features: [
          '24/7 active SOC threat hunting and real-time alert triage',
          'Managed SIEM with customized threat correlation rules',
          'Endpoint Detection & Response (EDR) with automated isolation',
          'Continuous vulnerability scanning & threat surface mapping',
          'Compliance reporting aligned with ISO 27001, NESAC, and SAMA'
        ],
        metrics: [
          { label: 'Mean Time to Detect', value: '4.2 Mins' },
          { label: 'SOC Tier', value: '24x7 GCC SOC' },
          { label: 'Threat Intelligence', value: 'Global + Regional' }
        ],
        highlight: 'Managed SOC & SIEM'
      },
      {
        id: 'bios-assist',
        name: 'BIOS Assist',
        tagline: '24x7 User Support & Service Desk',
        description: 'Empower your workforce with friendly, certified bilingual (Arabic & English) ITIL service desk support. Prompt resolution of user issues, access requests, and software troubleshooting.',
        features: [
          'Bilingual Arabic & English technical support specialists',
          'Multi-channel assistance: Phone, Portal, Email, and Chat',
          'First-contact resolution rate exceeding 85%',
          'Executive VIP support tier with dedicated contact queue',
          'Customizable ticketing workflows integrated with your tools'
        ],
        metrics: [
          { label: 'First-Contact Fix', value: '> 85%' },
          { label: 'Languages', value: 'Arabic & English' },
          { label: 'Satisfaction', value: '98.4% CSAT' }
        ],
        highlight: 'User Support & Helpdesk'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'petrochem',
    quote: "Unlike the previous solutions we used, with DRaaS we don't have to worry that it won't work a year from now. We have confidence it will work when required and we can test this whenever we need which makes compliance easy.",
    author: 'Chief Information Officer',
    role: 'CIO & Head of Digital Transformation',
    company: 'Petrochem Middle East',
    industry: 'Chemicals & Energy Distribution',
    logoText: 'PETROCHEM',
    metric: '< 12 Mins',
    metricLabel: 'Achieved Replication RPO',
    category: 'DRaaS'
  },
  {
    id: 'gcc-finance',
    quote: "Ensuring our banking records remain strictly within sovereign UAE and Saudi borders without compromising on cloud scalability was our top mandate. CloudHPT delivered sovereign compliance coupled with 99.995% uptime.",
    author: 'Tariq Al-Mansoor',
    role: 'VP of Infrastructure & Security',
    company: 'Leading GCC Commercial Bank',
    industry: 'Banking & Financial Services',
    logoText: 'GCC BANK',
    metric: '100%',
    metricLabel: 'SAMA / CBUAE In-Country Compliance',
    category: 'Cloud Migration'
  },
  {
    id: 'healthcare-group',
    quote: "BIOS Assured and Secured completely relieved our internal IT staff of round-the-clock server firefighting. The 24/7 SOC intercepted ransomware threats before they could touch our hospital hospital EHR systems.",
    author: 'Dr. Zaid Haddad',
    role: 'Group IT Director',
    company: 'Emirates Healthcare Network',
    industry: 'Healthcare & Life Sciences',
    logoText: 'EHN HEALTH',
    metric: '4.2 Mins',
    metricLabel: 'Average Threat Containment Time',
    category: 'Managed Services'
  }
];

export const PARTNERS: Partner[] = [
  {
    name: 'SolarWinds',
    tier: 'Elite Partner',
    description: 'The ONLY Elite Partner in the Middle East region with top-tier certified network engineers.',
    badge: 'Only Elite Partner in Middle East'
  },
  {
    name: 'VMware / Broadcom',
    tier: 'Enterprise Cloud Partner',
    description: 'Premier Sovereign Cloud Provider offering vSphere Enterprise Plus and multi-tenant isolation.',
    badge: 'Sovereign Cloud Provider'
  },
  {
    name: 'Cisco',
    tier: 'Cloud & Managed Services',
    description: 'Recognized as Cisco Cloud and Managed Services Partner of the Year for enterprise architecture.',
    badge: 'Partner of the Year'
  },
  {
    name: 'Gartner',
    tier: 'Magic Quadrant Recognition',
    description: 'Recognized in the Gartner Magic Quadrant for Disaster Recovery as a Service (DRaaS).',
    badge: 'Magic Quadrant for DRaaS'
  },
  {
    name: 'Veeam',
    tier: 'Platinum Cloud Provider',
    description: 'Leading VCSP partner powering real-time VM replication and immutable ransomware defense.',
    badge: 'Veeam Cloud & Service Provider'
  },
  {
    name: 'Microsoft',
    tier: 'Tier-1 Cloud Solution Provider (CSP)',
    description: 'Gold certified Azure partner delivering unified multi-cloud architecture and enterprise licensing.',
    badge: 'Microsoft Cloud Solution Provider'
  }
];

export const NOC_SOC_METRICS = {
  activeIncidents: 0,
  networkAvailability: '99.995%',
  meanTimeToDetect: '4.2 mins',
  activeMonitoredSensors: '14,280+',
  draasRpoVerified: '9.4 mins',
  dataCenters: [
    { city: 'Dubai', country: 'UAE', status: 'Operational', latency: '1.2ms', facility: 'Tier III DIC-01' },
    { city: 'Abu Dhabi', country: 'UAE', status: 'Operational', latency: '1.8ms', facility: 'Tier III ADGM-01' },
    { city: 'Riyadh', country: 'Saudi Arabia', status: 'Operational', latency: '2.1ms', facility: 'Tier III KFD-01' },
    { city: 'Jeddah', country: 'Saudi Arabia', status: 'Operational', latency: '2.4ms', facility: 'Tier III JED-01' },
    { city: 'Manama', country: 'Bahrain', status: 'Operational', latency: '3.1ms', facility: 'Tier III BAH-01' },
    { city: 'Kuwait City', country: 'Kuwait', status: 'Operational', latency: '3.5ms', facility: 'Tier III KWT-01' },
  ]
};

export const MIGRATION_STEPS = [
  {
    step: '01',
    title: 'Cloud Readiness & TCO Assessment',
    description: 'Comprehensive audit of your existing compute, storage, dependencies, and licensing. We map data sovereignty obligations (CBUAE, SAMA, NESAC) and project 3-year TCO savings.',
    deliverable: 'Cloud Readiness Report & Architecture Blueprint'
  },
  {
    step: '02',
    title: 'Architecture & DR Topology Design',
    description: 'Certified enterprise architects design your target landing zone—private dedicated, hybrid mesh, or sovereign public cloud—with sub-15 minute DR replication paths.',
    deliverable: 'Detailed Design Document & Disaster Recovery Runbook'
  },
  {
    step: '03',
    title: 'Zero-Downtime Migration & Seeding',
    description: 'Non-disruptive block-level data seeding over dedicated high-bandwidth pipes. Live workload cutover executed during low-traffic windows with instant fallback safety net.',
    deliverable: 'Workload Cutover & Validation Sign-Off'
  },
  {
    step: '04',
    title: '24x7 NOC & SOC Managed Operations',
    description: 'Seamless handover into BIOS Assured & Secured. Our round-the-clock operations team continuously monitors uptime, remediates threats, and optimizes cloud consumption.',
    deliverable: '24x7 SLA Guarantee & Monthly Executive Dashboard'
  }
];
