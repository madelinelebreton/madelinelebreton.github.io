// Single source for sidebar, home intro, footer and meta tags. Edit here, not in components.
export const profile = {
  name: 'Madeline LeBreton',
  descriptor: 'Mechatronics engineering · Robotics · Data · Research',
  tagline: 'Madeline LeBreton',
  // DRAFT copy for approval: built only from facts in the Notion pages and CV.
  bio: [
    'I am a Mechatronics Engineering student in my final year at McMaster University.',
    // The second home-page paragraph (with links to three work pages) is written in src/pages/index.astro.
  ],
  education: 'B.Eng. Mechatronics Engineering, McMaster University (final year)',
  email: 'lebretom@mcmaster.ca', // kept for now, per Madeline
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/madeline-lebreton/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=U0L2UEkAAAAJ' },
    { label: 'GitHub', href: 'https://github.com/madelinelebreton' },
  ],
};

export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'Leadership & Awards', href: '/leadership-awards/' },
  { label: 'Exploring!', href: '/explore/' },
  { label: 'Media', href: '/media/' },
  { label: 'CV', href: '/cv/' },
];
