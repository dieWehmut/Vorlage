import { ref } from 'vue'
import type { SiteProjectGroup } from '../../types/content'

export const games = ref<SiteProjectGroup[]>([
  {
    name: 'Games',
    autoLoad: true,
    description: 'Static games list',
    manualItems: [],
  },
])

export default games
