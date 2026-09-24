export interface PublicCloudSubOffering {
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

export const PUBLIC_CLOUD_SUB_OFFERINGS: PublicCloudSubOffering[] = [
  {
    id: 'multi-cloud',
    name: 'Multi-Cloud',
    officialUrl: 'https://www.biosme.com/multi-cloud',
    tagline: 'Unified Orchestration, FinOps Governance & Seamless Workload Mobility',
    shortDescription: 'Break down cloud silos. Single-pane visibility, FinOps cost control, and security posture management across CloudHPT, Azure, AWS, and OCI.',
    badge: 'Cross-Cloud Governance',
    iconName: 'Layers',
    sla: '99.99% Cross-Cloud Connectivity & 24x7 NOC SLA',
    compliance: ['ISO 27001', 'UAE NESA', 'SAMA Cyber Framework', 'FinOps Foundation', 'PCI-DSS'],
    keyStats: [
      { label: 'FinOps Optimization', value: 'Up to 34% TCO Savings' },
      { label: 'Supported Clouds', value: 'Azure, AWS, OCI, CloudHPT' },
      { label: 'Management Model', value: 'Single Pane of Glass' },
      { label: 'Incident SLA', value: '15-Minute Priority Triage' }
    ],
    overviewParagraphs: [
      'Different cloud platforms excel at different workloads. Modern enterprises in the Middle East rarely rely on a single vendor; they harness the sovereign security of CloudHPT for core databases, the global SaaS scale of Microsoft Azure, and the cloud-native toolsets of AWS.',
      'However, managing multiple disconnected cloud providers often introduces operational chaos: fragmented security policies, runaway consumption bills, and blind spots. BIOS Multi-Cloud solves this by giving you a unified management layer with single-pane visibility across your entire multi-cloud estate.',
      'Our platform combines continuous FinOps governance—actively discovering idle instances, right-sizing resources, and purchasing reserved instances—with automated compliance drift detection and unified 24x7 NOC and SOC threat monitoring.'
    ],
    architecturePoints: [
      {
        title: 'Unified Multi-Cloud Dashboard',
        description: 'Aggregate telemetry, logs, uptime metrics, and resource inventories across Microsoft Azure, AWS, and sovereign CloudHPT in one centralized pane.',
        tag: 'Single-Pane Observability'
      },
      {
        title: 'FinOps Cost Intelligence & Waste Elimination',
        description: 'Machine learning algorithms continuously inspect compute, storage, and egress consumption, delivering actionable recommendations that reduce cloud waste by up to 34%.',
        tag: 'Cost Governance'
      },
      {
        title: 'Cloud Security Posture Management (CSPM)',
        description: 'Continuously assess multi-cloud infrastructure configurations against CIS benchmarks, ISO 27001, UAE NESA, and Saudi SAMA regulations to prevent configuration drift.',
        tag: 'Automated Compliance Drift'
      },
      {
        title: 'Seamless Workload Portability & DR',
        description: 'Cross-cloud replication and container orchestration frameworks that allow fluid migration of workloads between private sovereign pods and public hyperscalers.',
        tag: 'Zero Vendor Lock-In'
      }
    ],
    keyCapabilities: [
      {
        title: 'Consolidated Billing & Currency Predictability',
        description: 'Receive a single, transparent monthly invoice in local GCC currency, eliminating unexpected foreign exchange fluctuations and complex hyperscaler bills.',
        iconName: 'DollarSign'
      },
      {
        title: '24x7 Unified NOC & SOC Management',
        description: 'Certified cloud operations engineers in Dubai and Riyadh monitor alerts, resolve incidents, and manage cross-cloud network interconnects around the clock.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Multi-Cloud Transit Networking',
        description: 'High-speed, redundant layer-3 interconnects weaving together Azure ExpressRoute, AWS Direct Connect, and CloudHPT data fabrics with sub-millisecond switching.',
        iconName: 'Zap'
      },
      {
        title: 'DevOps & CI/CD Pipeline Automation',
        description: 'Standardize Infrastructure as Code (Terraform, Ansible) and continuous deployment pipelines across disparate cloud targets.',
        iconName: 'Cpu'
      }
    ],
    useCases: [
      {
        title: 'Hybrid Cloud Workload Splitting',
        description: 'Keep core transaction databases and sensitive personal data in sovereign CloudHPT pods while running customer-facing web and mobile APIs in Azure UAE.',
        targetWorkloads: 'FinTech, Core Banking, Healthcare Portals'
      },
      {
        title: 'Cross-Cloud Disaster Recovery',
        description: 'Replicate primary workloads running in Microsoft Azure UAE North into an isolated standby target in CloudHPT or AWS for true platform resilience.',
        targetWorkloads: 'Enterprise ERPs, E-Commerce, Identity Services'
      },
      {
        title: 'FinOps Cost Containment & Optimization',
        description: 'Consolidate multiple departmental cloud subscriptions into a governed framework with automated spend alerts and budget thresholds.',
        targetWorkloads: 'Enterprise Multi-Account Estates, Dev/QA Labs'
      }
    ]
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    officialUrl: 'https://www.biosme.com/en/cloud-microsoft-azure',
    tagline: 'Certified Microsoft Cloud Solutions Partner in UAE North & Central',
    shortDescription: 'Enterprise Azure architecture, sub-2ms ExpressRoute private fiber connectivity, Azure Virtual Desktop (AVD), and Sentinel SOC integration.',
    badge: 'Microsoft Cloud Partner',
    iconName: 'Cloud',
    sla: '99.99% Azure Infrastructure Availability',
    compliance: ['Microsoft Certified Partner', 'UAE NESA Standards', 'ISO 27001', 'PCI-DSS', 'Dubai ISR'],
    keyStats: [
      { label: 'Azure GCC Regions', value: 'UAE North & UAE Central' },
      { label: 'Interconnect Latency', value: '< 2ms via ExpressRoute' },
      { label: 'Support Tier', value: '24x7 Tier-3 Certified Engineers' },
      { label: 'Partner Status', value: 'Direct CSP Tier-1 Partner' }
    ],
    overviewParagraphs: [
      'Microsoft Azure provides unparalleled agility, enterprise application integration, and bleeding-edge AI capabilities. As an accredited Microsoft Cloud Solutions Partner in the Middle East, BIOS Middle East designs, migrates, secures, and optimizes enterprise Azure environments hosted in the local UAE regions (UAE North in Dubai and UAE Central in Abu Dhabi).',
      'We eliminate the complexity of cloud transformation by offering end-to-end managed Azure services: architectural assessment, workload lift-and-shift, cloud-native app refactoring, Azure Virtual Desktop (AVD) deployment, and unified cost management.',
      'Crucially, BIOS provides dedicated low-latency Azure ExpressRoute private fiber connections directly from our sovereign Dubai and Abu Dhabi datacenters, allowing your systems to communicate with Azure at gigabit speeds without traversing the public internet.'
    ],
    architecturePoints: [
      {
        title: 'Dedicated Azure ExpressRoute Private Interconnects',
        description: 'Direct high-bandwidth private circuits linking your on-premises datacenters or CloudHPT pods directly to Azure UAE regions with sub-2ms latency and zero public internet exposure.',
        tag: 'Sub-2ms ExpressRoute'
      },
      {
        title: 'Azure Virtual Desktop (AVD) & Modern Workplace',
        description: 'High-performance, secure digital workspaces enabling your workforce to access Windows 11 enterprise desktops and corporate applications from anywhere with zero data leakage.',
        tag: 'Secure Remote Work'
      },
      {
        title: 'Microsoft Sentinel & Defender 24x7 SOC',
        description: 'Native integration with Microsoft Sentinel cloud SIEM, ingested directly into the BIOS Dubai SOC for 24x7 AI-driven threat hunting and automated remediation.',
        tag: 'Managed Sentinel SOC'
      },
      {
        title: 'Azure FinOps & Reserved Instance Optimization',
        description: 'Proactive management of Azure Savings Plans, Reserved Virtual Machine Instances, and spot workloads to ensure maximum ROI and predictable monthly expenses.',
        tag: 'Up to 40% Compute Savings'
      }
    ],
    keyCapabilities: [
      {
        title: 'Comprehensive Cloud Adoption Framework (CAF)',
        description: 'Structured migration methodology adhering strictly to Microsoft best practices, ensuring governance, landing zone readiness, and zero business disruption.',
        iconName: 'Sliders'
      },
      {
        title: 'Hybrid Identity & Active Directory Sync',
        description: 'Seamless integration between on-premises Active Directory and Microsoft Entra ID (Azure AD), with conditional access, MFA, and privileged identity management.',
        iconName: 'Lock'
      },
      {
        title: 'Enterprise Database Migration & Modernization',
        description: 'Seamless migration of SQL Server, Oracle, and PostgreSQL workloads into Azure SQL Managed Instances with automated backups and high availability.',
        iconName: 'Database'
      },
      {
        title: '24x7 Proactive Azure Operations & Monitoring',
        description: 'Round-the-clock monitoring of Azure VM health, storage utilization, network latency, and application performance by certified Azure architects.',
        iconName: 'Activity'
      }
    ],
    useCases: [
      {
        title: 'Datacenter Modernization to Azure UAE',
        description: 'Migrate on-premise Windows and Linux server fleets into Microsoft Azure UAE North, reducing hardware refresh overhead and achieving instant scalability.',
        targetWorkloads: 'Windows Server, Red Hat, SQL Server, .NET Apps'
      },
      {
        title: 'Secure Remote Work via Azure Virtual Desktop',
        description: 'Deliver GPU-accelerated or standard enterprise virtual desktops with localized low latency across the UAE, Saudi Arabia, and GCC countries.',
        targetWorkloads: 'Remote Employees, Contractors, Branch Offices'
      },
      {
        title: 'Cloud-Native App & AI Modernization',
        description: 'Leverage Azure Kubernetes Service (AKS), Azure OpenAI, and serverless compute to build the next generation of intelligent digital services.',
        targetWorkloads: 'Microservices, AI Agents, Mobile Backends'
      }
    ]
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    officialUrl: 'https://www.biosme.com/multi-cloud',
    tagline: 'Enterprise AWS Architecture, Direct Connect & Cloud-Native Engineering',
    shortDescription: 'Scalable AWS cloud hosting in the UAE region. Managed DevOps, AWS Direct Connect interconnects, and 24x7 infrastructure governance.',
    badge: 'AWS Advanced Practice',
    iconName: 'Server',
    sla: '99.99% AWS Regional Uptime',
    compliance: ['AWS Well-Architected', 'ISO 27001', 'UAE NESA', 'PCI-DSS Tier 1'],
    keyStats: [
      { label: 'AWS Regional Hub', value: 'AWS UAE Region' },
      { label: 'Private Connect', value: 'AWS Direct Connect 10G' },
      { label: 'DevOps Support', value: 'Full CI/CD & Terraform' },
      { label: 'Security Wrap', value: '24x7 BIOS Managed SOC' }
    ],
    overviewParagraphs: [
      'Amazon Web Services (AWS) powers many of the world’s most dynamic cloud-native applications. BIOS Middle East acts as your regional AWS partner, helping enterprises in the UAE and GCC architect, deploy, and manage production-grade AWS environments.',
      'From building resilient microservices on Amazon EKS to provisioning dedicated AWS Direct Connect fiber links from our Dubai and Abu Dhabi facilities, we ensure your AWS workloads operate with peak reliability and full regulatory compliance.',
      'Our managed services wrap around your AWS accounts, providing 24x7 incident response, proactive patch management, and continuous cost optimization to curb unnecessary sprawl.'
    ],
    architecturePoints: [
      {
        title: 'AWS Direct Connect Dedicated Circuits',
        description: 'Low-latency private networking bypassing the public internet between on-premise networks and AWS UAE Region virtual private clouds (VPCs).',
        tag: 'Dedicated AWS Fiber'
      },
      {
        title: 'AWS Well-Architected Framework Audits',
        description: 'Rigorous architectural assessments evaluating your AWS workload against operational excellence, security, reliability, performance, and cost.',
        tag: 'Well-Architected Reviews'
      },
      {
        title: 'Kubernetes & Container Orchestration (EKS)',
        description: 'Production-ready Amazon EKS deployment, container security, automated horizontal pod scaling, and continuous deployment automation.',
        tag: 'Managed Containers'
      },
      {
        title: 'Managed AWS Security & GuardDuty Monitoring',
        description: 'Integration of AWS Security Hub, CloudTrail, and GuardDuty telemetry with BIOS Dubai SOC for real-time anomaly detection.',
        tag: '24x7 Cloud Defense'
      }
    ],
    keyCapabilities: [
      {
        title: 'Cloud-Native Modernization',
        description: 'Refactor monolithic applications into microservices, serverless Lambda functions, and managed database services (Amazon RDS & DynamoDB).',
        iconName: 'Cpu'
      },
      {
        title: 'Infrastructure as Code Automation',
        description: 'End-to-end automation with Terraform and AWS CloudFormation for reproducible, compliant infrastructure deployments.',
        iconName: 'Sliders'
      },
      {
        title: 'Automated Backup & Disaster Recovery',
        description: 'Automate cross-region AWS snapshot lifecycle policies and configure warm standby replication into CloudHPT sovereign datacenters.',
        iconName: 'HardDrive'
      },
      {
        title: 'Cost Allocation & Savings Plans',
        description: 'Optimize AWS spending through proactive Compute Savings Plans, Reserved Instances, and right-sizing analysis.',
        iconName: 'DollarSign'
      }
    ],
    useCases: [
      {
        title: 'Cloud-Native Digital Products & SaaS',
        description: 'Deploy fast-scaling web applications, mobile platforms, and analytics engines leveraging the vast AWS ecosystem.',
        targetWorkloads: 'SaaS Platforms, Mobile Apps, Analytics'
      },
      {
        title: 'Cross-Cloud Disaster Recovery Target',
        description: 'Establish AWS as a secondary failover site for on-premises or private cloud systems with minimal standby expenditure.',
        targetWorkloads: 'Disaster Recovery, Warm Standby'
      },
      {
        title: 'Big Data & Machine Learning Pipelines',
        description: 'Run distributed data processing and machine learning workflows using Amazon EMR, Athena, and SageMaker.',
        targetWorkloads: 'Data Lakes, Business Intelligence, ML'
      }
    ]
  }
];
