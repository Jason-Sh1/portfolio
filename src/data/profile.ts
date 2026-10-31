// Single place to edit personal info shown on the site.
// Source of truth: the master résumé (recruiting repo) and public GitHub.
// By design: no graduation year and no GPA anywhere on the site.

export const profile = {
  name: 'Jason Shi',
  part: 'JS-1',
  descriptor: 'Full-stack software engineer who builds with AI',
  school: 'Computer Science, University of Maryland · Minor in General Business',
  email: 'jshi1213@umd.edu',
  siteUrl: 'https://jasonshi.vercel.app',
  description:
    'Jason Shi: computer science student at the University of Maryland building full-stack products and AI tools, with software in production at Leidos.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Jason-Sh1' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shi-j' },
    { label: 'Email', href: 'mailto:jshi1213@umd.edu' },
  ],
};

/** Revision stamp: the month this site was last built and deployed. */
export const revision = new Date().toISOString().slice(0, 7);

export const features = [
  'Full stack: Python, TypeScript, FastAPI, React, PostgreSQL',
  'Software in production at Leidos, used by 30+ people',
  '1,600+ automated tests running in CI on every push',
  'Builds with AI: Claude Code, the Claude API, agent harnesses and evals',
  '1st Place, AWS GenAI Innovation Hackathon',
];

export const applications = [
  'Full-stack product engineering',
  'Applied AI and LLM tooling',
  'Internal platforms and automation',
  'Backend services and data pipelines',
];

/** Pin configuration: an 8-pin DIP. Left pins 1–4 top to bottom, right pins 5–8 bottom to top. */
export const pins = [
  { n: 1, label: 'Work', href: '#work' },
  { n: 2, label: 'Results', href: '#results' },
  { n: 3, label: 'Experience', href: '#experience' },
  { n: 4, label: 'About', href: '#about' },
  { n: 5, label: 'Source', href: 'https://github.com/Jason-Sh1/portfolio' },
  { n: 6, label: 'LinkedIn', href: 'https://linkedin.com/in/shi-j' },
  { n: 7, label: 'GitHub', href: 'https://github.com/Jason-Sh1' },
  { n: 8, label: 'Email', href: 'mailto:jshi1213@umd.edu' },
];

/** Measured results from the Leidos portfolio tracker. */
export const characteristics = [
  { param: 'Active users', cond: 'Including PMO leadership', value: '30+', unit: 'people' },
  { param: 'Spreadsheet replaced', cond: 'Scripted ETL migration', value: '446', unit: 'formulas' },
  { param: 'Database queries per request', cond: 'After profiling', value: '−67', unit: '%' },
  { param: 'Desktop app startup time', cond: 'After profiling', value: '−80', unit: '%' },
  { param: 'Reminder emails', cond: 'Batched by owner across 8 workflows', value: '−51', unit: '%' },
  { param: 'Automated tests', cond: 'GitLab CI, every push', value: '1,600+', unit: 'tests' },
];

export const experience = [
  {
    period: 'May 2026 – now',
    role: 'Software Engineer Intern',
    org: 'Leidos',
    place: 'Reston, VA',
    notes: [
      'Built and launched a full-stack portfolio tracker (FastAPI, async SQLAlchemy, React, PostgreSQL) used by 30+ people including PMO leadership, replacing a 446-formula Excel workbook.',
      'Shipped to a private NIST 800-171 Azure environment with Microsoft Entra single sign-on and role-based access; ran a security audit that fixed an email HTML-injection flaw.',
      'Received a return offer and extended part-time through the school year; now building a multi-team version.',
    ],
  },
  {
    period: 'Sept 2025 – now',
    role: 'Co-founder & Director of External Affairs',
    org: 'Claude Builder Club at UMD',
    place: 'College Park, MD',
    notes: [
      'Grew the club to 1,500+ members with meetings of up to 250+, and taught its hands-on Claude Code workshop series.',
      'Brought in an Anthropic engineer for an MCP webinar, recruited judges and sponsors for two prompt-engineering hackathons (latest: 380+ participants), and judged 50+ AI/ML projects.',
    ],
  },
  {
    period: 'Sept 2025 – May 2026',
    role: 'Software Engineer → Technical Lead',
    org: 'Campus Coders Crew',
    place: 'College Park, MD',
    notes: [
      "Led 6 developers through a two-semester build of the Thai Student Association's website for its 700+ members: assigned components, reviewed pull requests, mentored newer developers, and launched on time.",
      'Built the landing and contact pages in React and TypeScript and set up the Vercel deployment.',
    ],
  },
  {
    period: '2023 – 2026',
    role: 'Museum Aid',
    org: 'National Air and Space Museum, Smithsonian',
    place: 'Washington, DC',
    notes: ['Presented interactive aerospace and science demonstrations to museum visitors.'],
  },
];

export const qualifications = [
  { result: '1st Place', event: 'AWS GenAI Innovation Hackathon', note: 'PrepSync AI' },
  { result: '2nd Place', event: 'Google Build With AI Hackathon', note: '' },
  { result: '4th Place', event: 'Bitcamp, Advanced Data Science track', note: 'PortPulse' },
  { result: 'Selected', event: 'Databricks Brickfest', note: 'Invite-only builder program' },
  { result: 'Selected', event: 'Humana Early Identification Program', note: 'IT track' },
  { result: 'Awarded', event: 'Presidential Scholar', note: 'University of Maryland' },
];

export const about = [
  "I study computer science at the University of Maryland, with a minor in general business. I like full-stack problems: systems that have to work end to end, from the database to the screen someone relies on every day.",
  "Most of what I build now uses AI, and I treat it like any other dependency: it gets tests, access control, and a security review before anyone depends on it. At Leidos that meant 1,600+ tests behind an app running in a NIST 800-171 environment. In my own projects it means things like an interview coach that adapts to how you actually practice, and a news reader that clusters coverage across many outlets so each briefing can cite its sources.",
];
