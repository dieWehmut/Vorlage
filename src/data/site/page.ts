import { ref } from 'vue'
import type { WebsiteEntry } from '../../types/content'

// Sample websites — replace with your own projects.
export const pages = ref<WebsiteEntry[]>([
  {
    name: 'diesuwa-starter',
    displayName: 'diesuwa-starter',
    repoUrl: 'https://github.com/dieWehmut/diesuwa-starter',
    date: '2026-05-01',
    url: 'https://diewehmut.github.io/diesuwa-starter/',
  },
  // {
  //   name: 'your-site',
  //   displayName: 'your-site',
  //   repoUrl: 'https://github.com/your-username/your-repo',
  //   date: '2026-06-01',
  //   url: 'https://your-site.example.com',
  // },
])

export default pages
