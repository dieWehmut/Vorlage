import { ref } from 'vue'
import type { InfraEntry } from '../../types/content'

const initialInfra: InfraEntry[] = [
  { name: 'Template Demo', key: 'template-demo', url: 'https://diewehmut.github.io/Vorlage/', date: '2026-05-01' },
  { name: 'GitHub', key: 'github', url: 'https://github.com', date: '2026-05-01' },
]

initialInfra.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const infra = ref(initialInfra)

export default infra
