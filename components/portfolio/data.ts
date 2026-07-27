export interface Job {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  current?: boolean;
}

export const jobs: Job[] = [
  {
    title: 'Professional Services Engineer',
    company: 'Enterprise Vision Technologies',
    dates: 'Apr 2023 — Present',
    current: true,
    bullets: [
      'Led an Azure migration of a 23-server on-prem environment in 5 months — a job a prior team spent 2 years failing to finish.',
      'Acted as frontend tech lead for a platform serving 800+ teams; scaled releases from 2/yr to 10 in ~10 months.',
      'Shipped an end-to-end Lambda-based IAM credential system and cut client page-load time 20×.',
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'StaffWise LLC',
    dates: 'Jul 2022 — Jul 2023',
    bullets: [
      'Built complex React/TypeScript SaaS workflows with Azure B2C OAuth; resolved critical production bugs across the stack.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'NetApp',
    dates: 'Jun 2022 — Sep 2022',
    bullets: [
      'Built a CLI tool automating Ansible boilerplate to streamline storage-system deployment across teams.',
    ],
  },
];

export const skills: string[] = [
  'TypeScript',
  'React · Redux',
  'Node.js',
  'Python',
  'AWS',
  'Azure',
  'Terraform',
  'Ansible',
  'Docker',
  'Linux',
  'GitLab CI',
];

export interface Certification {
  name: string;
  issuer: string;
  credlyUrl: string;
}

export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', credlyUrl: 'https://www.credly.com/badges/91654e0a-4f42-4697-a67e-7bb228101d93' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', credlyUrl: 'https://www.credly.com/badges/d68a42d2-63bb-416c-b3bb-3c6dbbf8b2eb' },
  { name: 'Red Hat Certified Specialist in Developing Automation with Ansible Automation Platform', issuer: 'Red Hat', credlyUrl: 'https://www.credly.com/badges/11ed070f-d740-4c39-9825-5946afc427a9' },
  { name: 'Red Hat Certified Engineer in Ansible', issuer: 'Red Hat', credlyUrl: 'https://www.credly.com/badges/76f2f551-7442-4a40-9641-8c5682175c8d' },
  { name: 'Red Hat Certified Engineer in Enterprise Linux', issuer: 'Red Hat', credlyUrl: 'https://www.credly.com/badges/63202245-465e-4967-8416-36da61bb7bd4' },
  { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat', credlyUrl: 'https://www.credly.com/badges/64e1029b-ea75-44a4-afc6-19b3af6eb406' },
  { name: 'Red Hat Certified Advanced System Administrator in Ansible', issuer: 'Red Hat', credlyUrl: 'https://www.credly.com/badges/0d4f11bc-2cb5-42aa-a851-48b7c779306c' },
];

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Cal Poly, San Luis Obispo',
  dates: '2019 — 2023',
};

export interface HeadlineStat {
  count: number;
  suffix?: string;
  label: string;
}

export const headlineStats: HeadlineStat[] = [
  { count: 20, suffix: '×', label: 'Faster page loads shipped' },
  { count: 800, suffix: '+', label: 'Teams served in production' },
  { count: 3, label: 'Fortune 100 Clients' },
];

export const secondaryStats = [
  { value: '10', label: 'releases/yr, up from 2' },
  { value: '7', label: 'certifications' },
  { value: '4', label: 'years owning production systems' },
];

export interface FunFact {
  title: string;
  body: string;
  glyph: 'baking' | 'japanese' | 'swimming';
}

export const funFacts: FunFact[] = [
  {
    glyph: 'japanese',
    title: 'Studying Japanese',
    body: 'As someone who is part Japanese, I am passionate about learning more of my culture.',
  },
  {
    glyph: 'baking',
    title: 'Enjoy baking',
    body: "Baking is applied science — so many variables shape a good sourdough loaf or batch of macarons. The challenge of making a bake just-right fascinates me.",
  },
  {
    glyph: 'swimming',
    title: 'D1 collegiate swimmer',
    body: 'Trained and competed at the Division I level — the discipline and appreciation of hard work has shaped who I am today.',
  },
];

export const socials = {
  github: 'https://github.com/noah415',
  linkedin: 'https://www.linkedin.com/in/noah-otsuka415/',
  x: 'https://x.com/noah_otsuka',
};

export const email = 'noah.otsuka04@gmail.com';

export const version = 'v2.0.0';
