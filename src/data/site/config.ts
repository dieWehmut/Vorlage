/**
 * Site-wide personal configuration.
 * All personal / private data is centralized here.
 * ⚠️  Modify this file to personalize your site.
 */

export const siteConfig = {
  // --- Identity ---
  githubUser: 'your-github-username',
  githubRepo: 'your-github-username.github.io',
  owner: 'your-name',
  displayName: 'your-name',
  email: 'you@example.com',

  // --- Site Meta ---
  title: 'my-nexus',
  subtitle: 'my-nexus',
  description: 'Hi! This is my personal site.',
  siteUrl: 'https://your-github-username.github.io/your-repo/',
  startedAt: '2026-05-01T00:00:00+08:00',

  // --- External Services ---
  googleAnalyticsId: '',

  // --- ICP Filing (optional, set empty to hide) ---
  icpNumber: '',
  icpText: '',

  // --- Feature Flags (set false to hide page & nav entry) ---
  enableInfra: false,
  enableProject: false,

  // --- Social Links ---
  links: [
    { label: 'GitHub', url: 'https://github.com/your-github-username' },
    { label: 'Website', url: 'https://your-github-username.github.io/your-repo/' },
  ],
}

export default siteConfig
