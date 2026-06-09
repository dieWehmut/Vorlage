import type { SiteConfig } from '../../types/content'

type CodeRunnerEnv = {
  VITE_CODE_RUNNER_MODE?: 'frontend' | 'backend'
  VITE_CODE_RUNNER_API_URL?: string
  VITE_CODE_RUNNER_API_TOKEN?: string
}

const viteEnv = (import.meta.env || {}) as CodeRunnerEnv
const processEnv = typeof process === 'undefined' ? {} : process.env
const configuredRunnerMode = viteEnv.VITE_CODE_RUNNER_MODE || processEnv.VITE_CODE_RUNNER_MODE

/**
 * Site-wide personal configuration.
 * All personal / private data is centralized here.
 * ⚠️  Modify this file to personalize your site.
 */

export const siteConfig: SiteConfig = {
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

  // --- Code Runner ---
  codeRunner: {
    mode: configuredRunnerMode === 'backend' ? 'backend' : 'frontend',
    backendApiUrl: viteEnv.VITE_CODE_RUNNER_API_URL || processEnv.VITE_CODE_RUNNER_API_URL || '',
    backendToken: viteEnv.VITE_CODE_RUNNER_API_TOKEN || processEnv.VITE_CODE_RUNNER_API_TOKEN || '',
  },

  // --- Social Links ---
  links: [
    { label: 'GitHub', url: 'https://github.com/your-github-username' },
    { label: 'Website', url: 'https://your-github-username.github.io/your-repo/' },
  ],
}

export default siteConfig
