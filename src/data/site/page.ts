import { ref } from 'vue'
import type { WebsiteEntry } from '../../types/content'

export const pages = ref<WebsiteEntry[]>([
  {
    name: 'Vorlage',
    displayName: 'Vorlage',
    repoUrl: 'https://github.com/dieWehmut/Vorlage',
    date: '2026-05-01',
    url: 'https://diewehmut.github.io/Vorlage/',
  },
])

export default pages
