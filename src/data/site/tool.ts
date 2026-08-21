import { ref } from 'vue'
import type { SiteProjectGroup } from '../../types/content'
import { siteConfig } from './config'

export const tools = ref<SiteProjectGroup[]>([
  {
    name: 'Tools',
    autoLoad: true,
    owner: siteConfig.githubUser,
    repo: '',
    description: 'Static tools list',
    manualItems: [],
  },
])

export default tools
