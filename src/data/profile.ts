// Single place to edit personal info shown on the site.
// Note: no graduation year appears anywhere, by design.

export const profile = {
  name: 'Jason Shi',
  tagline: 'I build tools that replace spreadsheets and busywork.',
  email: 'jshi1213@umd.edu',
  siteUrl: 'https://jasonshi.vercel.app',
  description:
    'Jason Shi — computer science student at the University of Maryland building practical software: data pipelines, internal tools, and ML-powered dashboards.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Jason-Sh1' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shi-j' },
    { label: 'Email', href: 'mailto:jshi1213@umd.edu' },
  ],
};

export const experience = [
  {
    period: 'Summer 2026',
    role: 'Business Analytics & Automation Intern',
    org: 'Leidos',
    line: 'Building a full-stack project-portfolio tracker (FastAPI, React, PostgreSQL on Azure) that replaces four manual spreadsheets for 50+ projects, and an LLM-powered CLI that scans 39 U.S. electric utilities for rate changes.',
  },
  {
    period: '2025 —',
    role: 'Software Engineer & Technical Lead',
    org: 'Campus Coders Crew',
    line: 'Leading student teams through full project lifecycles, from scoping to shipped software.',
  },
  {
    period: '2025 —',
    role: 'Co-founder & Director of External Affairs',
    org: 'Claude Builder Club at UMD',
    line: 'Co-founded the campus community for building with AI tools; run partnerships and outreach.',
  },
];

export const about = [
  'I study computer science at the University of Maryland, with a minor in general business. I like the unglamorous kind of software problem: a process held together by spreadsheets and email, waiting for someone to automate it properly.',
  "I was selected for Humana's Early Identification Program (IT track), and I spend my summers building production tools — with the tests, access control, and security review that make them trustworthy, not just functional.",
];
