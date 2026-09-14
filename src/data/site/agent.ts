import { ref } from 'vue'
import type { SiteProjectGroup } from '../../types/content'

export const agents = ref<SiteProjectGroup[]>([
  {
    name: 'Agents',
    autoLoad: true,
    description: 'Static agents list',
    manualItems: [],
  },
])

export default agents
