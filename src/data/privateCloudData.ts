export interface PrivateCloudSubOffering {
  id: string;
  name: string;
  officialUrl: string;
  tagline: string;
  shortDescription: string;
  badge: string;
  iconName: string;
  sla: string;
  compliance: string[];
  keyStats: { label: string; value: string }[];
  overviewParagraphs: string[];
  architecturePoints: { title: string; description: string; tag?: string }[];
  keyCapabilities: { title: string; description: string; iconName: string }[];
  useCases: { title: string; description: string; targetWorkloads: string }[];
}

export const PRIVATE_CLOUD_SUB_OFFERINGS: PrivateCloudSubOffering[] = [
  {
    id: 'private-cloudhpt',
    name: 'Private CloudHPT',
    officialUrl: 'https://www.biosme.com/private-cloud',
    tagline: 'Dedicated Sovereign Cloud Built on Cisco UCS & NetApp All-Flash',
    shortDescription: 'Total isolation, peak performance, and zero noisy neighbors. Bespoke private cloud hosted in UAE and KSA Tier-III datacenters.',
    badge: '100% Single-Tenant',
    iconName: 'Server',
    sla: '99.995% Financially Backed Uptime',
    compliance: ['UAE NESA', 'SAMA Framework', 'ISO 27001', 'PCI-DSS Tier 1', 'ISR Abu Dhabi'],
    keyStats: [
      { label: 'Compute Architecture', value: 'Dedicated Cisco UCS' },
      { label: 'Storage Fabric', value: 'NetApp NVMe All-Flash' },
      { label: 'Local Latency', value: '< 1.2ms GCC Transit' },
      { label: 'Network Uptime', value: '100% Guaranteed SLA' }
    ],
    overviewParagraphs: [
      'Private CloudHPT is an enterprise-grade private cloud solution engineered for maximum security, performance, and operational predictability. Built on world-class dedicated infrastructure, it provides organizations with the complete control of on-premises hardware without the capital expenditure and management headaches.',
      'Hosted from certified sovereign Tier-III datacenters in Dubai (Equinix Datamena), Abu Dhabi (Khazna), Riyadh, and Muscat, your data resides strictly within chosen geographic borders, guaranteeing 100% compliance with UAE NESA, CBUAE, and Saudi SAMA regulations.',
      'Unlike multi-tenant public environments, your Cisco UCS compute nodes and NetApp All-Flash SAN storage are completely isolated. You have zero risk of hypervisor contention or noisy neighbors, ensuring mission-critical ERPs, SAP HANA, and core banking transactions run at sustained peak throughput.'
    ],
    architecturePoints: [
      {
        title: 'Dedicated Cisco UCS Compute Pods',
        description: 'Single-tenant high-density blade compute with 10Gbps/40Gbps unified fabric interconnects and full support for hardware accelerators and third-party expansion cards.',
        tag: 'Hardware Contention: 0%'
      },
      {
        title: 'NetApp NVMe All-Flash Fabric',
        description: 'Dedicated enterprise SAN storage delivering sub-millisecond IOPS, deduplication, hardware-level AES-256 encryption, and instant snapshot capabilities.',
        tag: 'Sub-millisecond Latency'
      },
      {
        title: 'Dual Datacenter Live VM Migration',
        description: 'Active-active or active-passive cluster spanning two regional Tier-III facilities for real-time workload balancing and uninterrupted disaster resilience.',
        tag: 'Dual-Facility Redundancy'
      },
      {
        title: '24x7 SOC & SIEM Protection',
        description: 'Monitored around-the-clock by BIOS Security Operations Center in Dubai with integrated SIEM as a Service, anomaly threat detection, and automated containment.',
        tag: 'Round-the-clock SOC'
      }
    ],
    keyCapabilities: [
      {
        title: 'Full Console Control',
        description: 'Complete visibility through your dedicated VMware vCenter or Microsoft Hyper-V management console, allowing you to spin up, configure, and scale VMs on demand.',
        iconName: 'Cpu'
      },
      {
        title: 'Self-Service or Fully Managed',
        description: 'Choose between pure IaaS self-administration or leverage BIOS Assured managed services where our certified engineers manage OS patching, backups, and hypervisor maintenance.',
        iconName: 'Sliders'
      },
      {
        title: '100% In-Country Data Sovereignty',
        description: 'Zero data leaves the borders of the UAE or Saudi Arabia. Meet all local banking, insurance, healthcare, and governmental data privacy mandates.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Multi-Carrier Blended BGP Transit',
        description: 'Redundant high-speed connectivity via Etisalat by e&, du, and international Tier-1 transit backbones ensuring 100% network uptime.',
        iconName: 'Zap'
      }
    ],
    useCases: [
      {
        title: 'SAP HANA & Core ERP Workloads',
        description: 'Predictable high-IOPS compute and sub-millisecond flash storage for heavy transactional databases without public cloud throttling.',
        targetWorkloads: 'SAP, Oracle DB, Microsoft Dynamics, Infor'
      },
      {
        title: 'Regulated Banking & Financial Services',
        description: 'Air-gapped compute pods meeting Central Bank of the UAE and SAMA standards with dedicated encryption keys and comprehensive audit reports.',
        targetWorkloads: 'Core Banking, Payment Gateways, FinTech'
      },
      {
        title: 'High-Performance Graphic & AI Virtualization',
        description: 'Support for dedicated NVIDIA graphics processing units for CAD, BIM, 3D modeling, and local AI model inference workloads.',
        targetWorkloads: 'AutoCAD, Revit, AI Inference, Video Rendering'
      }
    ]
  },
  {
    id: 'hybrid-cloudhpt',
    name: 'Hybrid CloudHPT',
    officialUrl: 'https://www.biosme.com/hybrid-cloud',
    tagline: 'High-Performance Private Cloud Combined with Elastic Public Cloud',
    shortDescription: 'The ideal balance of performance, agility, and governance. Federate workloads seamlessly between Private CloudHPT, Azure, AWS, and OCI.',
    badge: 'Multi-Cloud Federation',
    iconName: 'Layers',
    sla: '99.99% Cross-Cloud Connectivity SLA',
    compliance: ['NESA Compliant', 'Azure ExpressRoute', 'AWS Direct Connect', 'ISO 27001'],
    keyStats: [
      { label: 'Public Cloud Interconnects', value: 'Direct Connect & ExpressRoute' },
      { label: 'Latency to Hyperscalers', value: '< 2ms Dedicated Fiber' },
      { label: 'Federation Support', value: 'AWS, Azure, OCI, Private' },
      { label: 'GPU Acceleration', value: 'NVIDIA Hardware Equipped' }
    ],
    overviewParagraphs: [
      'Hybrid CloudHPT unites the raw speed, total isolation, and data sovereignty of BIOS Private CloudHPT with the infinite elasticity and broad API ecosystem of hyperscale public clouds (Microsoft Azure, AWS, and Oracle Cloud).',
      'Modern enterprises no longer need to choose between security and agility. With Hybrid CloudHPT, you place latency-sensitive and compliance-bound core databases in sovereign UAE/KSA Private CloudHPT pods, while bursting stateless frontends, dev/test environments, and cloud-native services into public clouds.',
      'Our dedicated multi-cloud connectivity hub provides ultra-low latency private cross-connects (Azure ExpressRoute and AWS Direct Connect) from our Dubai and Abu Dhabi datacenters directly into hyperscaler regions.'
    ],
    architecturePoints: [
      {
        title: 'Single-Pane Management & Orchestration',
        description: 'Unified management layer allowing your IT teams or BIOS managed engineers to govern policies, access controls, and resource provisioning across hybrid environments.',
        tag: 'Unified Governance'
      },
      {
        title: 'Sub-2ms Hyperscaler Interconnects',
        description: 'Dedicated layer-2/layer-3 fiber links bypassing the public internet directly to Azure UAE North/Central and AWS UAE Region.',
        tag: 'Direct ExpressRoute & Direct Connect'
      },
      {
        title: 'Sovereign Workload Partitioning',
        description: 'Architectural separation: keep PII and sovereign records in Private CloudHPT pods while leveraging public cloud SaaS (such as Microsoft 365) without data leakage.',
        tag: 'Compliance Partitioning'
      },
      {
        title: 'GPU Compute Integration',
        description: 'Utilize Private CloudHPT equipped with dedicated NVIDIA GPU accelerators for graphic-intensive workloads and federate to global public clouds for web tiers.',
        tag: 'NVIDIA Hardware Equipped'
      }
    ],
    keyCapabilities: [
      {
        title: 'Dynamic Workload Placement',
        description: 'Move workloads between private and public clouds according to compliance, performance, and budget demands without code refactoring.',
        iconName: 'Sliders'
      },
      {
        title: 'Cost Optimization & Egress Minimization',
        description: 'Avoid punishing public cloud egress fees and unpredictable consumption bills by keeping persistent storage and core databases on predictable Private CloudHPT.',
        iconName: 'DollarSign'
      },
      {
        title: 'Centralized Security & SOC Visibility',
        description: 'Unified 24x7 SOC monitoring and SIEM telemetry spanning both your private infrastructure and your public cloud subscriptions.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Modern Cloud-Native Hybrid Integrations',
        description: 'Support for hybrid Kubernetes clusters, container registries, and CI/CD deployment pipelines bridged across private and public domains.',
        iconName: 'Cpu'
      }
    ],
    useCases: [
      {
        title: 'Enterprise Cloud Transformation',
        description: 'Gradual migration path enabling legacy monolithic apps to reside securely in Private CloudHPT while building modern microservices in Azure or AWS.',
        targetWorkloads: 'Enterprise Core, Cloud-Native APIs, CI/CD'
      },
      {
        title: 'Graphic-Intensive Engineering & CAD',
        description: 'Run heavy AutoCAD, 3D modeling, and GPU rendering on dedicated Private CloudHPT NVIDIA blades while hosting project collaboration files on Azure.',
        targetWorkloads: 'Autodesk, Revit, Bentley, SolidWorks'
      },
      {
        title: 'Disaster Recovery to Hybrid Cloud',
        description: 'Replicate on-premise workloads into CloudHPT private cloud with automated failover hooks into public cloud resources.',
        targetWorkloads: 'Active-Standby Hybrid DR, Multi-Cloud Backup'
      }
    ]
  },
  {
    id: 'datacenters',
    name: 'Datacenters',
    officialUrl: 'https://www.biosme.com/secure-datacenter-facility-uae-dubai',
    tagline: 'Tier III & Tier IV Sovereign Facilities in Dubai, Abu Dhabi & Riyadh',
    shortDescription: 'Physically hardened, carrier-neutral facilities with multi-factor biometric security, 2N power redundancy, and 100% network backbone availability.',
    badge: 'Tier-III Carrier-Neutral',
    iconName: 'Building2',
    sla: '100% Power & Network Availability',
    compliance: ['Tier III Certified', 'ISO 27001', 'PCI-DSS Tier 1', 'SAMA Compliant', 'NESA Standard'],
    keyStats: [
      { label: 'Primary Facilities', value: 'Equinix Datamena & Khazna' },
      { label: 'Facility Redundancy', value: '2N Power & N+1 Cooling' },
      { label: 'Physical Security', value: 'Biometric Mantraps & 24x7 CCTV' },
      { label: 'Regional Presence', value: 'Dubai, Abu Dhabi, Riyadh, Muscat' }
    ],
    overviewParagraphs: [
      'BIOS Middle East houses its sovereign cloud platforms in the most advanced, carrier-neutral Tier-III and Tier-IV datacenters in the Middle East. Our primary facilities are situated in Equinix Datamena (Dubai) and Khazna Data Centers (Abu Dhabi), with sovereign pods in Riyadh (Saudi Arabia) and Muscat (Oman).',
      'These facilities are purpose-built, physically hardened fortresses engineered specifically to protect critical enterprise IT assets against any environmental or unauthorized physical risk.',
      'Security is enforced through multi-tier biometric authorization, anti-passback mantraps, continuous CCTV surveillance storing thousands of hours of footage, and strict zone-based access policies with the principle of least privilege.'
    ],
    architecturePoints: [
      {
        title: 'World-Class Facility Partnership',
        description: 'Anchored in Equinix—the global gold standard in datacenter design—supplemented by state-owned telecommunications facilities for absolute national security.',
        tag: 'Equinix & Khazna Built'
      },
      {
        title: 'Fully Redundant 2N Power & Cooling',
        description: 'Dual-feed independent utility sub-stations, isolated UPS battery rooms, on-site fuel reserves for days of autonomous generator run-time, and precision N+1 HVAC systems.',
        tag: '2N Power Redundancy'
      },
      {
        title: 'Biometric & CCTV Security Fortress',
        description: 'Access restricted to pre-authorized personnel only via biometric scanners, coded entry, 24/7 onsite security guards, and unobtrusive unbranded facilities.',
        tag: 'Military-Grade Physical Defense'
      },
      {
        title: 'Multi-Carrier Neutral Meet-Me Rooms',
        description: 'Interconnect directly with Etisalat by e&, du, STC, Zain, Ooredoo, and global Tier-1 carriers with direct sub-millisecond cross-connect options.',
        tag: 'Carrier-Neutral Fabric'
      }
    ],
    keyCapabilities: [
      {
        title: 'Geographic Environmental Safety',
        description: 'Facilities are strategically situated on geologically stable ground away from flood plains, seismic fault lines, and hazardous chemical installations.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Strict Access Logs & Continuous Audits',
        description: 'Every physical entry is digitally recorded, timestamped, and retained for regulator inspection. Regular third-party physical penetration tests are conducted.',
        iconName: 'Lock'
      },
      {
        title: 'Secure Onsite Media Vaults',
        description: 'Climate-controlled, fireproof physical media vaults for safe cold storage of air-gapped backup tapes and mission-critical disaster recovery media.',
        iconName: 'HardDrive'
      },
      {
        title: 'Colocation & Cage Customization',
        description: 'Private caged suites, dedicated half/full server racks, and custom power density configurations up to 20kW+ per rack for high-performance computing.',
        iconName: 'Server'
      }
    ],
    useCases: [
      {
        title: 'Enterprise Colocation & Sovereign Hosting',
        description: 'House your owned enterprise hardware inside our world-class Tier-III facilities with 24x7 remote hands and blending with BIOS managed services.',
        targetWorkloads: 'Proprietary Hardware, Core Telecom Switches, Mainframes'
      },
      {
        title: 'Low-Latency Financial Hub Interconnects',
        description: 'Direct fiber cross-connects to financial exchange feeds, payment gateways, and regional cloud exchanges with microsecond precision.',
        targetWorkloads: 'High-Frequency Trading, Payment Processing'
      },
      {
        title: 'Dual-Region Disaster Recovery Pairing',
        description: 'Pair our Dubai and Abu Dhabi facilities or cross-border Dubai to Riyadh for geographical separation and zero-downtime failover.',
        targetWorkloads: 'Multi-Datacenter Clusters, Disaster Recovery Hub'
      }
    ]
  },
  {
    id: 'cloudhpt-iaas',
    name: 'CloudHPT IaaS',
    officialUrl: 'https://www.biosme.com/iaas-cloud-hosting-computing',
    tagline: 'Cisco Powered Infrastructure as a Service Cutting IT Costs by 50%',
    shortDescription: 'High-density, elastic cloud computing hosted in UAE/KSA. Eliminate hardware CAPEX with on-demand scalability and 24x7 managed wrap-around.',
    badge: 'Cisco Powered IaaS',
    iconName: 'Cpu',
    sla: '99.99% Uptime with 15-min Incident SLA',
    compliance: ['Cisco Powered Certified', 'ISO 27001', 'UAE NESA', 'SAMA Cloud Framework'],
    keyStats: [
      { label: 'TCO Reduction', value: 'Up to 50% vs On-Premises' },
      { label: 'Network Fabric', value: 'Cisco ACI Software-Defined' },
      { label: 'Compute Engine', value: 'Intel Xeon High-Frequency' },
      { label: 'Support Model', value: '24x7x365 In-Country Engineers' }
    ],
    overviewParagraphs: [
      'CloudHPT IaaS (Infrastructure as a Service) is BIOS Middle East’s flagship Cisco-powered cloud computing platform. Designed specifically for GCC organizations, it delivers elastic, high-performance cloud compute, memory, and storage hosted strictly inside the region’s best Tier-III datacenters.',
      'By transitioning from on-premises servers to CloudHPT IaaS, enterprises eliminate the crushing 3-to-5-year hardware CAPEX refresh cycles, power and cooling overhead, and costly datacenter leases, slashing total cost of ownership by up to 50%.',
      'The platform is built with Cisco Application Centric Infrastructure (ACI), providing automated software-defined microsegmentation, granular security policies, and rapid zero-downtime scaling as your business expands.'
    ],
    architecturePoints: [
      {
        title: 'Cisco Powered Architecture',
        description: 'Built exclusively on certified Cisco UCS B-Series blade servers and Cisco Nexus 9000 switches, ensuring carrier-grade reliability.',
        tag: 'Cisco Validated Design'
      },
      {
        title: 'Cisco ACI Microsegmentation',
        description: 'Hardware-enforced zero-trust network policies that isolate virtual machine workloads and prevent lateral malware movement.',
        tag: 'Software-Defined Security'
      },
      {
        title: 'Full Migration Wrap-Around',
        description: 'End-to-end workload assessment, migration planning, and live server cutover executed by BIOS cloud architects with zero data loss.',
        tag: 'Seamless Live Cutover'
      },
      {
        title: 'Enterprise Management Options',
        description: 'Access full administrative self-service via vCenter or delegate all OS patching, monitoring, and VM lifecycle to our 24x7 NOC team.',
        tag: 'Flexible Management'
      }
    ],
    keyCapabilities: [
      {
        title: 'Predictable Monthly OPEX',
        description: 'Transparent pay-for-what-you-need billing with no surprise ingress/egress charges or hidden API request fees.',
        iconName: 'DollarSign'
      },
      {
        title: 'Rapid Resource Provisioning',
        description: 'Spin up new virtual servers, add vCPUs, expand RAM, and scale All-Flash storage tiers in minutes through our intuitive self-service portal.',
        iconName: 'Zap'
      },
      {
        title: 'Comprehensive SLA Assurance',
        description: 'Financially backed 99.99% availability with business-focused SLAs and guaranteed 15-minute priority response times.',
        iconName: 'Award'
      },
      {
        title: 'Integrated Backup & Security Options',
        description: 'Easily bundle CloudHPT BaaS backup snapshots and SOC-managed SIEM threat monitoring with a single click.',
        iconName: 'ShieldCheck'
      }
    ],
    useCases: [
      {
        title: 'Datacenter Exit & Legacy Server Replacement',
        description: 'Retire aging on-premise server racks and migrate whole environments into CloudHPT IaaS without modifying existing application architectures.',
        targetWorkloads: 'Windows Server, Red Hat, Oracle Linux, Active Directory'
      },
      {
        title: 'Business-Critical Web & Application Hosting',
        description: 'High-availability load-balanced clusters with automatic failover and DDoS protection for regional e-commerce, portals, and SaaS platforms.',
        targetWorkloads: 'IIS, NGINX, Apache, Node.js, Enterprise Portals'
      },
      {
        title: 'Dev/Test & Rapid Prototyping Labs',
        description: 'Spin up isolated sandbox environments for developers with instant cloning and snapshot rollback capabilities.',
        targetWorkloads: 'DevOps, CI/CD, QA Testing, Staging'
      }
    ]
  },
  {
    id: 'cloudhpt-draas',
    name: 'CloudHPT DRaaS',
    officialUrl: 'https://www.biosme.com/draas-cloud-disaster-recovery-uae-dubai',
    tagline: 'Gartner-Recognized Disaster Recovery as a Service with RPO < 15 Mins',
    shortDescription: 'Zero-touch disaster recovery protecting against ransomware and site failure. Automated replication, non-disruptive sandbox testing, and sub-4-hour RTO.',
    badge: 'Gartner Recognized DRaaS',
    iconName: 'ShieldAlert',
    sla: 'RPO < 15 Mins • RTO < 4 Hours Guaranteed',
    compliance: ['Gartner Magic Quadrant', 'CBUAE DR Mandate', 'SAMA BCM Compliant', 'ISO 22301'],
    keyStats: [
      { label: 'Recovery Point Objective', value: 'RPO < 15 Minutes' },
      { label: 'Recovery Time Objective', value: 'RTO < 4 Hours' },
      { label: 'Gartner Recognition', value: 'Visionary DRaaS Provider' },
      { label: 'Testing Impact', value: 'Zero-Disruption Testing' }
    ],
    overviewParagraphs: [
      'CloudHPT DRaaS (Disaster Recovery as a Service) is the only Middle East-born solution recognized in the prestigious Gartner Magic Quadrant for Disaster Recovery as a Service. Built to protect critical business applications from catastrophic downtime, ransomware, and site failures.',
      'Our Cisco-powered DRaaS replicates workloads continuously from your on-premises datacenter or private cloud into an isolated, sovereign remote target in Dubai, Abu Dhabi, or Riyadh, maintaining industry-leading RPOs of under 15 minutes and RTOs of under 4 hours.',
      'Best of all, CloudHPT DRaaS is a fully managed "zero-touch" service: in the event of an outage or cyber incident, BIOS engineers execute pre-scripted failover runbooks to stand up your full application stack with verified data integrity.'
    ],
    architecturePoints: [
      {
        title: 'Hypervisor-Level Continuous Replication',
        description: 'Powered by Zerto and Veeam continuous data protection (CDP), capturing block changes in real time with virtually zero overhead on production VMs.',
        tag: 'Continuous Data Protection'
      },
      {
        title: 'Non-Disruptive Sandbox Failover Testing',
        description: 'Conduct full DR failover drills during regular business hours inside an isolated test bubble without impacting live production operations.',
        tag: 'Zero-Impact Auditing'
      },
      {
        title: 'One-Click Automated Orchestration',
        description: 'Custom runbooks automate boot sequencing, IP re-addressing, DNS failover, and dependency mapping for multi-tier enterprise systems.',
        tag: 'Automated Runbooks'
      },
      {
        title: 'Ransomware Rollback Journal',
        description: 'Rewind your entire environment to a point in time seconds prior to a ransomware infection, eliminating the need to pay ransom.',
        tag: 'Point-in-Time Rollback'
      }
    ],
    keyCapabilities: [
      {
        title: 'Complete "Zero-Touch" Recovery',
        description: 'BIOS engineers handle the entire failover and failback lifecycle, giving your team peace of mind during high-stress disaster scenarios.',
        iconName: 'CheckCircle2'
      },
      {
        title: 'Regulatory Audit Compliance',
        description: 'Generate automated DR test reports satisfying Central Bank of the UAE, SAMA, ISO 22301, and government business continuity auditors.',
        iconName: 'Award'
      },
      {
        title: 'Any-to-Cloud Compatibility',
        description: 'Replicate from VMware, Microsoft Hyper-V, physical hardware, or public cloud into sovereign CloudHPT with zero vendor lock-in.',
        iconName: 'Layers'
      },
      {
        title: 'Warm Standby Economics',
        description: 'Pay minimal storage reservation fees during standby mode and only activate full compute capacity when a disaster or drill occurs.',
        iconName: 'DollarSign'
      }
    ],
    useCases: [
      {
        title: 'Ransomware Attack Remediation',
        description: 'Instant recovery from cryptolocker attacks by rolling back virtual disks to minutes before malware execution occurred.',
        targetWorkloads: 'Enterprise File Servers, Active Directory, Databases'
      },
      {
        title: 'Mandatory Banking & Healthcare Continuity',
        description: 'Satisfy strict CBUAE and Department of Health disaster recovery compliance requirements with geographically separated sovereign pods.',
        targetWorkloads: 'EHR, Core Banking, Financial Records'
      },
      {
        title: 'On-Premises Datacenter DR Target',
        description: 'Eliminate the capital cost of maintaining a secondary physical disaster recovery datacenter by adopting CloudHPT as your offsite target.',
        targetWorkloads: 'All Production Virtual Machines'
      }
    ]
  },
  {
    id: 'cloudhpt-baas',
    name: 'CloudHPT BaaS',
    officialUrl: 'https://www.biosme.com/baas-cloud-backup-uae-dubai',
    tagline: 'Immutable Cloud Backup to Sovereign Tier-III Datacenters in UAE',
    shortDescription: 'Comprehensive Backup as a Service with air-gapped ransomware protection, local self-restore console, and transparent per-Terabyte pricing.',
    badge: 'Immutable Ransomware Vault',
    iconName: 'HardDrive',
    sla: '100% Backup Verification & 24/7 Restore Support',
    compliance: ['Immutable Storage (WORM)', 'ISO 27001', 'UAE Data Protection Law', 'NESA Security'],
    keyStats: [
      { label: 'Pricing Model', value: 'Predictable Per-Terabyte' },
      { label: 'Encryption Standard', value: 'AES-256 In-Transit & At-Rest' },
      { label: 'Retention Policy', value: 'Daily, Monthly, Yearly GFS' },
      { label: 'Target Datacenter', value: 'Tier III+ UAE Sovereign Vault' }
    ],
    overviewParagraphs: [
      'CloudHPT BaaS (Backup as a Service) is an all-in-one data protection solution safeguarding your company’s critical data residing on physical servers, virtual machines, databases, NAS shares, and Microsoft 365 / cloud workloads.',
      'Backups are securely transmitted over encrypted connections to our Tier-III+ sovereign datacenters in the UAE. With WORM (Write Once, Read Many) object lock and air-gapped immutable storage, your backups cannot be deleted, modified, or encrypted by ransomware even if administrative credentials are compromised.',
      'Organizations benefit from an intuitive self-service local management console for instant granular file or item-level restores, backed by full auditing, daily backup verification, and 24x7 support from BIOS backup engineers.'
    ],
    architecturePoints: [
      {
        title: 'Air-Gapped Immutable Storage',
        description: 'Hardened object repositories with time-based immutability locks that prevent ransomware from deleting or encrypting backup copies.',
        tag: 'WORM Immutability'
      },
      {
        title: 'Granular Item-Level Recovery',
        description: 'Restore individual emails, SharePoint documents, SQL database tables, or entire virtual machine disks within minutes.',
        tag: 'Granular Restore'
      },
      {
        title: 'End-to-End AES-256 Encryption',
        description: 'All backup data is encrypted at source, encrypted in transit across TLS 1.3 tunnels, and encrypted at rest with customer-controlled keys.',
        tag: 'AES-256 Zero-Knowledge'
      },
      {
        title: 'Microsoft 365 Cloud-to-Cloud Backup',
        description: 'Comprehensive backup protection for Exchange Online, Teams, OneDrive, and SharePoint with unlimited retention and search.',
        tag: 'Full M365 Protection'
      }
    ],
    keyCapabilities: [
      {
        title: 'Self-Service Restore Console',
        description: 'Empower your internal IT teams to browse snapshots and restore files locally without waiting for ticket turnaround.',
        iconName: 'CheckCircle2'
      },
      {
        title: 'Global WAN Acceleration & Deduplication',
        description: 'Proprietary source-side deduplication and compression that slashes bandwidth usage by up to 80% during nightly backup windows.',
        iconName: 'Zap'
      },
      {
        title: 'Daily Proactive Backup Auditing',
        description: 'BIOS engineers verify backup success every single morning, proactively remediating failed jobs before data risk arises.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Transparent Per-Terabyte Pricing',
        description: 'No licensing fees per socket or user. Simple, predictable pricing based purely on the storage capacity consumed in our vault.',
        iconName: 'DollarSign'
      }
    ],
    useCases: [
      {
        title: 'Ransomware-Proof 3-2-1 Backup Strategy',
        description: 'Complete the essential rule: 3 copies of data, 2 different media types, 1 sovereign offsite immutable copy in CloudHPT.',
        targetWorkloads: 'Enterprise Storage, Core Databases, VMs'
      },
      {
        title: 'Microsoft 365 Data Protection & Compliance',
        description: 'Protect against accidental deletion, malicious insiders, and departing employees with sovereign UAE backup for Teams and Exchange.',
        targetWorkloads: 'Exchange, OneDrive, SharePoint, Teams'
      },
      {
        title: 'Long-Term Regulatory Archival & Audits',
        description: 'Retain financial, legal, and patient records for 5, 7, or 10+ years in compliance with UAE national retention mandates.',
        targetWorkloads: 'Financial Records, Legal Contracts, Healthcare Scans'
      }
    ]
  }
];
