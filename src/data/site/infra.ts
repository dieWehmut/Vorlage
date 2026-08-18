import { ref } from 'vue'
import type { InfraEntry } from '../../types/content'

// Sample endpoints — replace with your own services.
// Each entry is reported as online or offline via a binary reachability probe.
const initialInfra: InfraEntry[] = [
  { name: 'Demo Site', key: 'demo', url: 'https://diewehmut.github.io/diesuwa-starter/', date: '2026-05-01' },
  { name: 'GitHub', key: 'github', url: 'https://github.com', date: '2026-05-01' },
  // { name: 'Service Name', key: 'service', url: 'https://service.example.com', date: '2025-01-01' },
]

initialInfra.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const infra = ref(initialInfra)

export default infra
