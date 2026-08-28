/**
 * Central content configuration for the CASEP GROUP website.
 * All site copy lives here so it can later be replaced by a CMS/database.
 */

export const company = {
  name: "CASEP GROUP",
  tagline: "Transforming Organizations Through Technology.",
  founder: "Caleb Agyei Sey",
  email: "casepgroup0@gmail.com",
  phone: "+233 245 720 660",
  location: "Accra, Ghana",
  hours: "Monday – Friday, 9:00 – 17:00 GMT",
};

/**
 * Social links rendered as icons in the footer.
 * `icon` maps to a component in @/components/site/SocialIcon.
 * WhatsApp uses a wa.me deep link built from the company phone number.
 */
export const socialLinks = [
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/casep-group-cg",
  },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/caleb.agyeisey",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/podiumtrump?igsh=MThoaGYydDU0NHplMg==",
  },
  {
    label: "X",
    icon: "x",
    href: "https://x.com/PodiumTrump1",
  },
  {
    label: "WhatsApp",
    icon: "whatsapp",
    href: "https://wa.me/233245720660",
  },
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  hero: string;
  problem: string;
  solution: string;
  capabilities: string[];
  benefits: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    icon: "Code2",
    title: "Software Development",
    short:
      "Custom web applications, business systems, SaaS platforms, and specialized digital solutions designed around organizational needs.",
    hero: "Software built around how your organization actually works.",
    problem:
      "Off-the-shelf tools rarely match the way an organization operates. Teams end up bending their processes around software, maintaining spreadsheets on the side, and losing visibility over critical information.",
    solution:
      "We design and build custom applications around your real workflows — from internal business systems to multi-tenant SaaS platforms — with clean architecture, documented code, and room to grow.",
    capabilities: [
      "Custom web application development",
      "Internal business and operations systems",
      "Multi-tenant SaaS platforms",
      "API design and third-party integrations",
      "Database design and data modelling",
      "Testing, deployment and maintenance",
    ],
    benefits: [
      "Systems that match your processes instead of forcing workarounds",
      "A single source of truth for operational data",
      "Lower manual effort across daily administration",
      "A codebase you can extend as requirements evolve",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Git/GitHub"],
    faqs: [
      {
        q: "How long does a custom system take to build?",
        a: "It depends on scope. A focused internal tool can ship in weeks, while a full platform is usually delivered in phases so you see working software early.",
      },
      {
        q: "Do we own the source code?",
        a: "Yes. Ownership and handover terms are agreed before development begins.",
      },
      {
        q: "Can you improve an existing system?",
        a: "Yes. We regularly review, extend, and modernise existing applications rather than rebuilding from scratch.",
      },
    ],
  },
  {
    slug: "website-development",
    icon: "Globe",
    title: "Website Development",
    short:
      "Professional corporate websites, institutional websites, landing pages, and high-performance digital experiences.",
    hero: "A digital presence that reflects the organization behind it.",
    problem:
      "Many organizations rely on outdated websites that load slowly, are difficult to update, and do not communicate credibility to the people they want to reach.",
    solution:
      "We build fast, accessible, search-friendly websites with clear structure and content that is straightforward to maintain.",
    capabilities: [
      "Corporate and institutional websites",
      "School and organization portals",
      "Campaign and product landing pages",
      "Content structure and CMS readiness",
      "Technical SEO and analytics setup",
      "Accessibility and performance tuning",
    ],
    benefits: [
      "Credible first impression for partners and clients",
      "Strong performance on mobile networks",
      "Search visibility built in from the start",
      "Content you can update without a developer",
    ],
    technologies: ["React", "TypeScript", "Modern Web Technologies", "Cloud Hosting", "Analytics"],
    faqs: [
      {
        q: "Can you redesign our existing website?",
        a: "Yes. We can rebuild the experience while preserving your existing URLs and search rankings.",
      },
      {
        q: "Will we be able to edit content ourselves?",
        a: "Content is structured so it can be connected to a CMS or admin interface when you need it.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    icon: "Cloud",
    title: "Cloud Solutions",
    short:
      "Cloud infrastructure, deployment, scalability, reliability, and modern cloud architecture.",
    hero: "Reliable infrastructure that scales with demand.",
    problem:
      "Systems hosted on ageing servers are expensive to maintain, difficult to recover, and struggle during peak periods such as admissions or end-of-month processing.",
    solution:
      "We design and implement cloud environments with automated deployment, monitoring, backups, and sensible cost control.",
    capabilities: [
      "Cloud architecture and migration planning",
      "Deployment pipelines and environments",
      "Backups, recovery and monitoring",
      "Performance and cost optimisation",
      "Access control and security hardening",
    ],
    benefits: [
      "Predictable uptime during peak usage",
      "Faster, safer releases",
      "Clear visibility into system health",
      "Infrastructure costs matched to actual usage",
    ],
    technologies: ["AWS", "Cloud Infrastructure", "CI/CD", "PostgreSQL", "Monitoring"],
    faqs: [
      {
        q: "Do you support migrations from on-premise servers?",
        a: "Yes. Migrations are planned in stages to avoid disrupting daily operations.",
      },
      {
        q: "Can you work with our existing cloud account?",
        a: "Yes. We can build within infrastructure you already own and control.",
      },
    ],
  },
  {
    slug: "business-automation",
    icon: "Workflow",
    title: "Business Process Automation",
    short:
      "Automate repetitive workflows and reduce manual processes using intelligent digital systems.",
    hero: "Remove the manual work that slows your team down.",
    problem:
      "Repetitive tasks — re-entering data, chasing approvals, compiling reports by hand — consume hours every week and introduce avoidable errors.",
    solution:
      "We map your workflows, identify what should be automated, and implement digital processes that run reliably in the background.",
    capabilities: [
      "Workflow mapping and process review",
      "Automated approvals and notifications",
      "Document, invoice and receipt generation",
      "Scheduled reporting and data synchronisation",
      "System-to-system integrations",
    ],
    benefits: [
      "Hours returned to your team each week",
      "Fewer manual errors and omissions",
      "Consistent, auditable processes",
      "Faster turnaround for internal requests",
    ],
    technologies: ["Automation Technologies", "REST APIs", "Node.js", "Database Systems"],
    faqs: [
      {
        q: "Where should we start with automation?",
        a: "Usually with the highest-frequency manual task. We review your processes and recommend a sequence based on effort and impact.",
      },
      {
        q: "Will automation replace staff?",
        a: "The goal is to remove repetitive work so staff can focus on higher-value responsibilities.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    icon: "Rocket",
    title: "Digital Transformation",
    short:
      "Help organizations transition from traditional processes to efficient, technology-driven operations.",
    hero: "A structured path from paper-based to digital operations.",
    problem:
      "Transformation efforts stall when technology is introduced without a plan for people, processes, and data.",
    solution:
      "We deliver transformation in phases — assessment, roadmap, implementation, adoption — so each step produces visible improvement.",
    capabilities: [
      "Digital readiness assessment",
      "Transformation roadmap and prioritisation",
      "Data migration from paper and spreadsheets",
      "Staff onboarding and documentation",
      "Change management support",
    ],
    benefits: [
      "A clear, sequenced plan instead of scattered tools",
      "Measurable improvement at each phase",
      "Higher adoption across teams",
      "Reliable, centralised organisational data",
    ],
    technologies: ["Cloud Infrastructure", "Database Systems", "Modern Web Technologies"],
    faqs: [
      {
        q: "How do you measure success?",
        a: "We agree indicators up front — processing time, error rates, adoption, reporting turnaround — and review them at each phase.",
      },
      {
        q: "Can this happen without pausing operations?",
        a: "Yes. Phased rollouts allow existing processes to run alongside new systems during transition.",
      },
    ],
  },
  {
    slug: "technology-consulting",
    icon: "Compass",
    title: "Technology Consulting",
    short:
      "Strategic technology guidance to help organizations identify opportunities, choose appropriate technologies, and implement effective solutions.",
    hero: "Clear technology decisions, grounded in business reality.",
    problem:
      "Choosing between platforms, vendors, and build-versus-buy options is difficult without independent technical perspective.",
    solution:
      "We assess your current systems, clarify options and trade-offs, and provide practical recommendations you can act on.",
    capabilities: [
      "Systems and architecture review",
      "Technology selection and vendor evaluation",
      "Build-versus-buy analysis",
      "Security and reliability assessment",
      "Implementation planning and budgeting",
    ],
    benefits: [
      "Confident, well-documented decisions",
      "Reduced risk of costly rework",
      "Realistic budgets and timelines",
      "An independent technical perspective",
    ],
    technologies: ["Cloud Infrastructure", "Database Systems", "REST APIs", "Security Practices"],
    faqs: [
      {
        q: "Do you only recommend systems you build?",
        a: "No. Where an existing platform is the better fit, we say so and help you implement it well.",
      },
      {
        q: "Can consulting be a standalone engagement?",
        a: "Yes. Many organizations start with an assessment before committing to development.",
      },
    ],
  },
];

export const solutions = [
  {
    icon: "GraduationCap",
    title: "School Management",
    description:
      "Digitize student records, academic administration, fees, payments, communication, reporting, and day-to-day school operations.",
  },
  {
    icon: "Building2",
    title: "Business Management",
    description:
      "Technology solutions that help businesses manage operations, finances, employees, customers, and workflows in one place.",
  },
  {
    icon: "Wallet",
    title: "Financial Management",
    description:
      "Digital tools for payments, accounting workflows, reporting, financial visibility, and operational control.",
  },
  {
    icon: "Users",
    title: "HR & Workforce Solutions",
    description:
      "Systems that help organizations manage employees, payroll, attendance, records, and HR processes.",
  },
  {
    icon: "Boxes",
    title: "Custom Enterprise Solutions",
    description:
      "Purpose-built applications designed around unique organizational requirements and existing systems.",
  },
];

export const whyCasep = [
  {
    icon: "Target",
    title: "Business-First Thinking",
    description: "We focus on solving organizational problems, not simply delivering technology.",
  },
  {
    icon: "Puzzle",
    title: "Tailored Solutions",
    description: "We design solutions around the unique needs of each organization.",
  },
  {
    icon: "Cpu",
    title: "Modern Technology",
    description:
      "We use modern development practices and cloud technologies to build scalable solutions.",
  },
  {
    icon: "ShieldCheck",
    title: "Security & Reliability",
    description:
      "Security, reliability, and maintainability are considered throughout the technology lifecycle.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Architecture",
    description: "Solutions are designed to grow with your organization.",
  },
  {
    icon: "Handshake",
    title: "Long-Term Partnership",
    description:
      "We aim to build lasting relationships rather than simply complete projects and disappear.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your organization, challenges, objectives, and requirements.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Define the right technology strategy and solution architecture.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive user experiences and system designs.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop, integrate, test, and refine the solution.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Launch the solution using reliable infrastructure.",
  },
  {
    number: "06",
    title: "Support & Scale",
    description: "Provide ongoing improvements, maintenance, optimization, and scalability.",
  },
];

export const industries = [
  {
    icon: "GraduationCap",
    title: "Education",
    description:
      "Centralised administration, academic records, fees, and parent communication for schools and training institutions.",
  },
  {
    icon: "Store",
    title: "Small & Medium Businesses",
    description:
      "Affordable systems for sales, inventory, invoicing, and customer records that grow with the business.",
  },
  {
    icon: "Building2",
    title: "Corporate Organizations",
    description:
      "Internal platforms, integrations, and reporting that connect departments and improve operational visibility.",
  },
  {
    icon: "Landmark",
    title: "Financial Services",
    description:
      "Secure workflows for payments, reconciliation, reporting, and controlled access to sensitive data.",
  },
  {
    icon: "HeartHandshake",
    title: "NGOs & Nonprofits",
    description:
      "Programme tracking, beneficiary records, and donor reporting built for accountability and transparency.",
  },
  {
    icon: "Briefcase",
    title: "Professional Services",
    description:
      "Client management, scheduling, document workflows, and billing for practices and consultancies.",
  },
  {
    icon: "Rocket",
    title: "Startups",
    description:
      "Product development from first version to scalable platform, with cloud foundations from day one.",
  },
  {
    icon: "Library",
    title: "Institutions",
    description:
      "Structured digital processes, records management, and reporting for institutional operations.",
  },
];

export const technologies = [
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "REST APIs",
  "AWS",
  "Cloud Infrastructure",
  "Git/GitHub",
  "Modern Web Technologies",
  "Database Systems",
  "Automation Technologies",
];

export type Product = {
  slug: string;
  name: string;
  status: string;
  description: string;
  features: string[];
  audience: string;
};

export const products: Product[] = [
  {
    slug: "school-management-system",
    name: "School Management System",
    status: "In development",
    description:
      "A comprehensive platform designed to help schools manage academic and financial operations from one centralized system.",
    features: [
      "Student Management",
      "Staff Management",
      "Class Management",
      "Academic Years & Terms",
      "Fee Management",
      "Invoicing",
      "Receipt Generation",
      "Financial Reporting",
      "Parent Portal & Communication",
      "Email & SMS Notifications",
      "Administrative Reporting",
    ],
    audience: "Basic schools, secondary schools, private schools, and training institutions",
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  placeholder: boolean;
};

/** Placeholder case studies — replace with real engagements when available. */
export const caseStudies: CaseStudy[] = [
  {
    title: "School Management Platform",
    industry: "Education",
    challenge:
      "Schools need centralized systems to manage administration and financial operations.",
    solution: "A multi-tenant school management platform designed to centralize school operations.",
    impact:
      "Improved visibility, reduced manual processes, and streamlined administrative workflows.",
    placeholder: true,
  },
  {
    title: "Business Operations Portal",
    industry: "Small & Medium Business",
    challenge: "Operational data spread across spreadsheets makes reporting slow and unreliable.",
    solution:
      "A single operations portal covering sales records, invoicing, and management reporting.",
    impact: "Consistent records and reporting available without manual consolidation.",
    placeholder: true,
  },
  {
    title: "Workflow Automation Programme",
    industry: "Professional Services",
    challenge: "Approval and document processes depend on manual follow-up between teams.",
    solution: "Automated approval routing, document generation, and status notifications.",
    impact: "Shorter turnaround times and a clear audit trail for every request.",
    placeholder: true,
  },
];

/** Placeholder testimonials — replace with genuine, attributed client feedback. */
export const testimonials = [
  {
    quote:
      "Placeholder testimonial. This space is reserved for verified feedback from an organization CASEP GROUP has worked with.",
    role: "School Administrator",
    context: "Education",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial. Client feedback will be published here once formally provided and approved.",
    role: "Operations Manager",
    context: "Small & Medium Business",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial. Reserved for a partner organization's account of working with CASEP GROUP.",
    role: "Executive Director",
    context: "Nonprofit",
    placeholder: true,
  },
];

/** Capability statements used in place of fabricated statistics. */
export const capabilityStats = [
  { label: "Projects Delivered", value: "11" },
  { label: "Organizations Served", value: "7" },
  {
    label: "Solution Areas",
    value: "6",
    note: "Software, web, cloud, automation, transformation, consulting",
  },
  { label: "Products In Development", value: "1", note: "School Management System" },
];

/** Draft article outlines — not published CASEP GROUP articles. */
export const insights = [
  {
    slug: "schools-digital-management-systems",
    category: "Education Technology",
    title: "Why Schools Are Moving Toward Digital Management Systems",
    excerpt:
      "An outline of the administrative pressures pushing schools from paper records toward centralized digital platforms.",
    draft: true,
  },
  {
    slug: "automation-operational-costs",
    category: "Business Automation",
    title: "How Business Automation Reduces Operational Costs",
    excerpt:
      "Where repetitive manual work typically hides, and how organizations quantify the cost of leaving it in place.",
    draft: true,
  },
  {
    slug: "cloud-future-of-business",
    category: "Cloud",
    title: "Cloud Technology and the Future of Modern Businesses",
    excerpt:
      "A practical look at what moving to cloud infrastructure changes for reliability, cost, and scale.",
    draft: true,
  },
  {
    slug: "digital-transformation-first-steps",
    category: "Digital Transformation",
    title: "First Steps in a Realistic Digital Transformation Plan",
    excerpt:
      "How to sequence a transformation programme so each phase delivers visible improvement.",
    draft: true,
  },
  {
    slug: "security-basics-for-organizations",
    category: "Cybersecurity",
    title: "Security Basics Every Organization Should Have in Place",
    excerpt: "Access control, backups, and monitoring — the foundations before anything else.",
    draft: true,
  },
  {
    slug: "building-software-that-lasts",
    category: "Software Development",
    title: "Building Software That Lasts Beyond the First Release",
    excerpt: "Why maintainability decisions made early determine the cost of every later change.",
    draft: true,
  },
];

export const values = [
  "Innovation",
  "Integrity",
  "Excellence",
  "Service",
  "Continuous Learning",
  "Reliability",
];
