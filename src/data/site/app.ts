import { ref } from 'vue'
import type { SiteProjectGroup } from '../../types/content'

export const apps = ref<SiteProjectGroup[]>([
  {
    name: 'Apps',
    autoLoad: true,
    description: 'Static apps list',
    manualItems: [],
  },
])

export default apps
