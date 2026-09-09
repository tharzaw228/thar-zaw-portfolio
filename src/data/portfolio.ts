export const TYPEWRITER_PHRASES = [
  'Enterprise Java Systems',
  'Custom ERP Modules',
] as const

export const TECH_STACK = [
  'Java',
  'Spring Boot',
  'Angular',
  'Ionic',
  'Odoo ERP',
  'Jenkins CI/CD',
  'Linux / Windows Servers',
  'Cursor AI Workflows',
  'React',
  'SQL',
  'Git',
  'Pentaho',
] as const

export const PROJECTS = [
  {
    id: 'insurance',
    title: 'Life Insurance Project',
    tag: 'Hybrid Mobile',
    status: 'deployed' as const,
    problem:
      'Insurance field agents required reliable access to client proposals and policy data across inconsistent network conditions, while a major production rebranding demanded new business logic without compromising legacy database records.',
    solution:
      'Engineered hybrid mobile applications with Ionic and Angular, implementing robust offline-first sync patterns. Led production change requests for complete system rebranding and product configuration, preserving absolute database integrity throughout migration.',
  },
  {
    id: 'microfinance',
    title: 'Core Microfinance Platforms',
    tag: 'Enterprise Banking',
    status: 'active' as const,
    problem:
      'Multiple microfinance institutions needed scalable loan processing, savings management, and interest calculation at enterprise volume—with zero tolerance for data inconsistency across 4–5 production platforms.',
    solution:
      'Developed and optimized automated loan approval workflows, customer savings modules, daily interest accrual engines, and background schedulers. Maintained full-cycle ownership across SIT, UAT, and production tiers with Jenkins CI/CD pipelines.',
  },
  {
    id: 'odoo',
    title: 'Custom Odoo ERP Customizations',
    tag: 'ERP Architecture',
    status: 'active' as const,
    problem:
      'Enterprise clients required bespoke operational workflows beyond stock Odoo modules—custom reporting, PDF generation, and cross-module business automations aligned to regional compliance.',
    solution:
      'Architected custom enterprise modules and workflow automations on Odoo ERP, integrating PDF Make reporting and SQL-backed data models. Delivered modular extensions that scale with client operational growth.',
  },
] as const

export const EXPERIENCE_HIGHLIGHTS = [
  'Software Engineer',
  'Core Microfinance Platforms'
   
] as const

export const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:tharzaw228354@gmail.com',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thar-zaw-a8867226a/',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/tharzaw228/',
    external: true,
  },
] as const

export const EDUCATION = [
  {
    id: 'java-bootcamp',
    institution: 'Java Developer Class',
    focus: 'Full Stack Development',
    period: 'May 2024 – Sep 2024',
    detail:
      'Enterprise backend with Java, Spring Boot, REST APIs; frontend with JavaScript, React, and Angular.',
  },
  {
    id: 'ace',
    institution: 'ACE Inspiration',
    focus: 'Professional Web Development',
    period: 'Feb 2024 – Jul 2024',
    detail:
      'Inventory Management Project from data modeling through Apache Tomcat deployment using Jakarta EE, Spring MVC, and JSP.',
  },
  {
    id: 'cs50',
    institution: 'HarvardX',
    focus: "CS50's Introduction to Programming with Python",
    period: 'Dec 2022 – Jan 2023',
    detail: 'OOP, pytest, data I/O, and API integration with a capstone project.',
  },
  {
    id: 'english',
    institution: 'International House Yangon-Mandalay',
    focus: 'General English',
    period: 'Aug 2023 – Oct 2024',
    detail: 'Professional working proficiency.',
  },
] as const

export const SKILL_CATEGORIES = [
  {
    id: 'backend',
    title: 'Enterprise Backend',
    accent: 'cyan' as const,
    skills: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Framework',
      'Jakarta EE',
      'JSP',
      'REST APIs',
      'SQL',
      'MySQL',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    accent: 'cyan' as const,
    skills: ['Angular', 'AngularJS', 'React', 'Ionic', 'JavaScript', 'Offline-First UX'],
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    accent: 'emerald' as const,
    skills: [
      'Jenkins CI/CD',
      'Git',
      'Linux Servers',
      'Windows Servers',
      'Apache Tomcat',
      'Deployments',
    ],
  },
  {
    id: 'erp',
    title: 'ERP, Reporting & Data',
    accent: 'emerald' as const,
    skills: ['Odoo ERP', 'Pentaho', 'PDF Make', 'SQL Database Design', 'Legacy Data Migration'],
  },
  {
    id: 'engineering',
    title: 'Engineering Practices',
    accent: 'cyan' as const,
    skills: [
      'Cursor AI Workflows',
      'Problem Solving',
      'Full-Cycle Maintenance',
      'Log Diagnostics',
      'Agile / SDLC',
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    accent: 'emerald' as const,
    skills: ['Teamwork', 'Communication', 'Presentations', 'Technical Documentation'],
  },
] as const

export const LANGUAGES = [
  {
    id: 'english',
    name: 'English',
    level: 'Professional working proficiency',
    context: 'International House Yangon-Mandalay · Business & technical communication',
  },
  {
    id: 'myanmar',
    name: 'Myanmar (Burmese)',
    level: 'Native / Full professional proficiency',
    context: 'Primary language · Client & team collaboration in Myanmar',
  },
] as const

export const CERTIFICATIONS = [
  {
    name: 'Legacy JavaScript Algorithms and Data Structures V7',
    issuer: 'freeCodeCamp',
    date: 'Nov 2023',
  },
  {
    name: "CS50's Introduction to Programming with Python",
    issuer: 'HarvardX',
    date: 'Jan 2023',
  },
] as const
