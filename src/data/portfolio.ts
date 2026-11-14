/**
 * Central Portfolio Configuration
 * ---------------------------------------------------------------------------
 * Update this single file to customize all personal details, biography,
 * projects, skills, timeline entries, and contact information across the site.
 */

import heroPortraitImg from '../assets/images/hero_developer_portrait_1794647030866.jpg';
import infraLedgerImg from '../assets/images/project_ledger_analytics_1794647031551.jpg';
import meridianSystemImg from '../assets/images/project_design_system_1794647032197.jpg';
import latticeCanvasImg from '../assets/images/project_collab_canvas_1794647031750.jpg';
import auraCommerceImg from '../assets/images/project_commerce_platform_1794647032245.jpg';

export type ProjectCategory = 'Full-Stack' | 'Design Systems' | 'Developer Tools';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  achievements: string[];
  architectureNotes: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  previewKind: 'telemetry' | 'design-system' | 'architecture' | 'commerce';
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: {
    name: string;
    context: string;
  }[];
}

export type TimelineCategory = 'Experience' | 'Education' | 'Certifications';

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  period: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  platform: 'github' | 'linkedin' | 'x' | 'dribbble';
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: 'Claire Mercer',
    shortName: 'Claire Mercer',
    headline: 'Designing and engineering resilient web platforms.',
    roleTitle: 'Senior Full-Stack Engineer & Product Designer',
    location: 'Seattle, WA · Open to Remote & Hybrid',
    availability: 'Available for select advisory & staff engineering roles',
    email: 'hello@clairemercer.dev',
    portrait: heroPortraitImg,
    portraitAlt:
      'Portrait of Claire Mercer, Senior Full-Stack Engineer and Product Designer, seated at a minimalist studio desk.',
    heroIntro:
      'I bridge systems architecture and editorial interface craft—turning complex data workflows, design systems, and distributed backends into calm, dependable software.',
    metrics: [
      { value: '12+', label: 'Years Engineering & Design' },
      { value: '38', label: 'Production Launches' },
      { value: '14M+', label: 'End-User Sessions Monthly' },
      { value: '99.98%', label: 'Core Platform Uptime' },
    ],
  },

  about: {
    title: 'Engineering rigor paired with measured interface craft.',
    paragraphs: [
      'Over the past twelve years, I have worked at the intersection of full-stack software architecture and human-centered product design. Beginning my career building high-throughput financial dashboards and later leading front-end platform teams, I learned that the best technical systems are defined by how effortlessly people can reason about them.',
      'My work focuses on end-to-end ownership: shaping clear domain models in PostgreSQL and TypeScript, designing accessible component foundations, and optimizing runtime performance down to the network waterfall and render frame.',
      'I thrive alongside founders, product leaders, and multidisciplinary engineering teams tackling technically demanding products—from cloud observability consoles to multi-brand design systems. Outside of shipping software, I mentor mid-level engineers on interface architecture and write about web performance and typography.',
    ],
    principles: [
      {
        index: '01',
        title: 'Clarity before ornamentation',
        detail:
          'Every layout decision exists to reduce cognitive load, establish clear typographic hierarchy, and keep primary user actions unmistakable.',
      },
      {
        index: '02',
        title: 'End-to-end systems thinking',
        detail:
          'Schema design, API latency, state synchronization, and UI responsiveness are treated as one continuous engineering surface.',
      },
      {
        index: '03',
        title: 'Accessible by construction',
        detail:
          'Semantic HTML, keyboard navigation, contrast discipline, and reduced-motion support are baked into every component primitive.',
      },
    ],
  },

  socials: [
    {
      label: 'GitHub',
      handle: '@clairemercer',
      href: 'https://github.com/clairemercer',
      platform: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'in/clairemercer',
      href: 'https://linkedin.com/in/clairemercer',
      platform: 'linkedin',
    },
    {
      label: 'X (Twitter)',
      handle: '@clairemercer',
      href: 'https://x.com/clairemercer',
      platform: 'x',
    },
    {
      label: 'Dribbble',
      handle: 'clairemercer',
      href: 'https://dribbble.com/clairemercer',
      platform: 'dribbble',
    },
  ] as SocialLink[],

  projects: [
    {
      id: 'infra-ledger',
      title: 'InfraLedger Cloud Telemetry',
      category: 'Full-Stack',
      year: '2026',
      role: 'Lead Architect & Product Designer',
      summary:
        'Real-time cloud spend attribution and latency observability platform built for multi-region Kubernetes teams.',
      description:
        'Designed and engineered a unified observability workspace that correlates distributed trace latency with per-tenant infrastructure cost in sub-second query windows.',
      image: infraLedgerImg,
      imageAlt: 'InfraLedger Cloud Telemetry interface displayed on a matte-black laptop on a concrete desk.',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'ClickHouse', 'Tailwind CSS'],
      achievements: [
        'Reduced P95 dashboard query latency from 2.4s to 180ms via materialized rollups and streaming chunks.',
        'Adopted across 42 enterprise engineering teams managing $18M+ in annualized cloud spend.',
        'Built zero-layout-shift virtualized log and trace timelines capable of rendering 100k+ events smoothly.',
      ],
      architectureNotes:
        'Event ingestion runs through a partitioned worker pool writing columnar rollups into ClickHouse, while PostgreSQL stores tenant RBAC policies and billing rules. The React client leverages worker-offloaded data transformations and deterministic canvas rendering.',
      liveUrl: 'https://infraledger.clairemercer.dev',
      githubUrl: 'https://github.com/clairemercer/infraledger-telemetry',
      featured: true,
      previewKind: 'telemetry',
    },
    {
      id: 'meridian-design-system',
      title: 'Meridian Design System & Token Engine',
      category: 'Design Systems',
      year: '2025',
      role: 'Staff Frontend & Design Systems Lead',
      summary:
        'Accessible, theme-aware React component architecture and automated W3C design token pipeline.',
      description:
        'Created a multi-brand UI foundation uniting 48 accessible primitives, Figma token synchronization, and automated visual regression gates across 9 product squads.',
      image: meridianSystemImg,
      imageAlt: 'Meridian Design System documentation and component grid on a studio desktop monitor.',
      technologies: ['TypeScript', 'React', 'Radix Primitives', 'Tailwind CSS', 'Storybook', 'Playwright'],
      achievements: [
        'Cut front-end UI defect rates by 54% and reduced new feature delivery cycles by 35%.',
        'Achieved 100% WCAG 2.2 AA compliance across keyboard navigation, focus traps, and color contrast.',
        'Automated token compilation from Figma variables directly to CSS custom properties and npm releases.',
      ],
      architectureNotes:
        'Components expose composable headless state hooks paired with zero-runtime CSS custom property bindings. Every release undergoes automated axe-core accessibility audits and Playwright visual snapshot checks in CI.',
      liveUrl: 'https://meridian.clairemercer.dev',
      githubUrl: 'https://github.com/clairemercer/meridian-ui',
      featured: true,
      previewKind: 'design-system',
    },
    {
      id: 'lattice-collab',
      title: 'Lattice Architecture Canvas',
      category: 'Developer Tools',
      year: '2025',
      role: 'Co-Creator & Principal Engineer',
      summary:
        'Multiplayer system modeling workspace that syncs architecture diagrams with live repository infrastructure.',
      description:
        'Engineered a CRDT-backed collaborative diagramming and code-sync tool allowing platform teams to inspect service dependencies alongside Terraform and OpenAPI specs.',
      image: latticeCanvasImg,
      imageAlt: 'Lattice Architecture Canvas showing microservice diagrams alongside a code editor.',
      technologies: ['TypeScript', 'React', 'WebSockets', 'Yjs CRDT', 'Go', 'Docker'],
      achievements: [
        'Supported 120+ concurrent editors per canvas with sub-35ms presence synchronization.',
        'Open-source CLI parser starred by 4,800+ developers for automated service graph extraction.',
        'Designed conflict-free undo/redo stacks and offline-first IndexedDB state recovery.',
      ],
      architectureNotes:
        'A lightweight Go WebSocket relay coordinates Yjs binary state updates while persisting periodic snapshots to object storage. The frontend canvas renders crisp SVG edges with spatial quadtree hit-testing.',
      liveUrl: 'https://lattice.clairemercer.dev',
      githubUrl: 'https://github.com/clairemercer/lattice-canvas',
      previewKind: 'architecture',
    },
    {
      id: 'aura-headless-commerce',
      title: 'Aura Editorial Storefront Engine',
      category: 'Full-Stack',
      year: '2024',
      role: 'Full-Stack Engineer & UX Architect',
      summary:
        'High-conversion headless commerce platform featuring instant edge-cached catalog filtering and streamlined checkout.',
      description:
        'Architected a globally distributed storefront and inventory synchronization layer for a boutique home-goods collective, prioritizing Core Web Vitals and tactile visual storytelling.',
      image: auraCommerceImg,
      imageAlt: 'Aura Editorial Storefront interface displayed on a digital tablet on travertine stone.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Redis', 'Tailwind CSS'],
      achievements: [
        'Maintained 99/100 Lighthouse Performance and 0.01 CLS across mobile and desktop viewports.',
        'Lifted mobile checkout completion rate by 28% after redesigning address and payment flows.',
        'Implemented idempotent webhook processing and real-time warehouse stock reservations.',
      ],
      architectureNotes:
        'Product catalogs are statically revalidated at the edge via tag-based invalidation, while cart mutations and Stripe PaymentIntents run through rate-limited server routes backed by PostgreSQL transactions.',
      liveUrl: 'https://aura.clairemercer.dev',
      githubUrl: 'https://github.com/clairemercer/aura-commerce',
      previewKind: 'commerce',
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      id: 'languages',
      title: 'Programming Languages',
      summary: 'Type-safe application logic, systems scripting, and relational querying.',
      items: [
        { name: 'TypeScript', context: 'Strict static typing across client & server' },
        { name: 'JavaScript (ES2024)', context: 'Browser runtimes, Workers & Node.js' },
        { name: 'SQL (PostgreSQL)', context: 'Relational modeling, CTEs & indexing' },
        { name: 'Python', context: 'Data pipelines & automation tooling' },
        { name: 'Go', context: 'Concurrent services & WebSocket relays' },
        { name: 'HTML5 & CSS3', context: 'Semantic markup & modern layout specs' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      summary: 'Responsive interfaces, state orchestration, and rendering performance.',
      items: [
        { name: 'React 19', context: 'Hooks, concurrent rendering & composition' },
        { name: 'Next.js & Vite', context: 'SSR, hybrid routing & bundle optimization' },
        { name: 'Tailwind CSS', context: 'Design tokens, theming & responsive grids' },
        { name: 'Motion & Web Animations', context: 'GPU-composited transitions & reduced motion' },
        { name: 'Accessibility (WCAG 2.2)', context: 'ARIA patterns, focus & keyboard flows' },
        { name: 'State & Data Fetching', context: 'Optimistic updates & cache invalidation' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      summary: 'Dependable APIs, real-time messaging, and persistent data architecture.',
      items: [
        { name: 'Node.js & Express', context: 'REST APIs, middleware & streaming' },
        { name: 'PostgreSQL & Redis', context: 'ACID transactions, caching & rate limits' },
        { name: 'REST & GraphQL APIs', context: 'Contract-first schemas & validation' },
        { name: 'WebSockets & CRDTs', context: 'Real-time collaboration & presence sync' },
        { name: 'Auth & Security', context: 'OAuth 2.0, JWT, RBAC & OWASP hardening' },
        { name: 'Stripe & Billing Flows', context: 'Idempotent webhooks & checkout state' },
      ],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      summary: 'Editorial visual hierarchy, interactive prototyping, and reusable systems.',
      items: [
        { name: 'Design Systems', context: 'Component APIs, governance & documentation' },
        { name: 'Figma', context: 'Auto-layout, variables & interactive prototypes' },
        { name: 'Information Architecture', context: 'User flows, navigation & content hierarchy' },
        { name: 'Typographic Systems', context: 'Fluid scales, readability & tabular layouts' },
        { name: 'Usability Testing', context: 'Task benchmarks & qualitative feedback' },
        { name: 'Responsive Craft', context: 'Desktop, tablet & mobile parity' },
      ],
    },
    {
      id: 'tools',
      title: 'Software & Development Tools',
      summary: 'Automated verification, containerization, and continuous delivery.',
      items: [
        { name: 'Git & GitHub Actions', context: 'CI/CD pipelines & release automation' },
        { name: 'Playwright & Vitest', context: 'End-to-end, visual & unit testing' },
        { name: 'Docker', context: 'Reproducible local & production containers' },
        { name: 'Storybook', context: 'Isolated component development & docs' },
        { name: 'Linux & Cloud Run', context: 'Container hosting & observability' },
        { name: 'Lighthouse & Profiling', context: 'Core Web Vitals & memory diagnostics' },
      ],
    },
  ] as SkillCategory[],

  timeline: [
    {
      id: 'exp-1',
      category: 'Experience',
      period: '2023 — Present',
      title: 'Principal Full-Stack Engineer & Design Architect',
      organization: 'Vespera Cloud Systems',
      location: 'Seattle, WA (Hybrid)',
      summary:
        'Leading platform architecture and interface standards for enterprise cloud telemetry and developer analytics products.',
      highlights: [
        'Architected InfraLedger telemetry workspace serving 14M+ monthly user sessions with 99.98% uptime.',
        'Unified 9 product teams around the Meridian Design System, cutting UI regression defects by 54%.',
        'Mentored 15 senior and mid-level engineers through design reviews, RFCs, and accessibility audits.',
      ],
    },
    {
      id: 'exp-2',
      category: 'Experience',
      period: '2019 — 2023',
      title: 'Senior Full-Stack Software Engineer',
      organization: 'Northstar Financial Technologies',
      location: 'San Francisco, CA',
      summary:
        'Designed and built real-time portfolio reporting, multi-currency reconciliation, and client onboarding portals.',
      highlights: [
        'Re-engineered legacy reporting workflows in TypeScript, React, and PostgreSQL, reducing load times by 68%.',
        'Partnered directly with institutional clients to streamline multi-step compliance onboarding flows.',
        'Established automated Playwright and Vitest quality gates across core monorepo packages.',
      ],
    },
    {
      id: 'exp-3',
      category: 'Experience',
      period: '2015 — 2019',
      title: 'Frontend Engineer & UI Designer',
      organization: 'Kestrel Interactive Studio',
      location: 'Portland, OR',
      summary:
        'Delivered bespoke web applications, interactive data stories, and e-commerce platforms for growth-stage startups.',
      highlights: [
        'Shipped 20+ production client engagements spanning SaaS dashboards, editorial sites, and storefronts.',
        'Owned end-to-end UX wireframing in Figma alongside responsive React and Node.js implementation.',
      ],
    },
    {
      id: 'edu-1',
      category: 'Education',
      period: '2011 — 2015',
      title: 'B.S. in Computer Science & Human-Computer Interaction',
      organization: 'University of Washington',
      location: 'Seattle, WA',
      summary:
        'Focused on distributed systems, software engineering, and cognitive ergonomics in interactive interfaces.',
      highlights: [
        'Graduated Magna Cum Laude; Undergraduate Research Assistant in the Interactive Data Lab.',
        'Capstone: Real-time collaborative browser visualizer for hierarchical network topologies.',
      ],
    },
    {
      id: 'cert-1',
      category: 'Certifications',
      period: '2024',
      title: 'W3C Web Accessibility Specialist (WAS) Preparation & Audit Credential',
      organization: 'IAAP / Deque University',
      location: 'Verified Credential',
      summary:
        'Comprehensive technical mastery of WCAG 2.2 AA/AAA criteria, ARIA authoring patterns, and assistive technology testing.',
      highlights: [
        'Applied directly to enterprise component library audits and keyboard navigation architecture.',
      ],
    },
    {
      id: 'cert-2',
      category: 'Certifications',
      period: '2023',
      title: 'Google Cloud Professional Cloud Architect',
      organization: 'Google Cloud',
      location: 'Verified Credential',
      summary:
        'Designing, developing, and managing robust, secure, scalable, and dynamic cloud infrastructure.',
      highlights: [
        'Specialized in Cloud Run, Cloud SQL (PostgreSQL), IAM least-privilege boundaries, and CDN edge caching.',
      ],
    },
  ] as TimelineEntry[],
};
