export type GeneratedDocMeta = {
  id: string
  type: 'post' | 'note'
  title: string
  date: string
  tags: string[]
  summary: string
  wordCount: number
  readingMinutes: number
  updated: string
  codeRunner?: boolean
  path: string
}

export const generatedDocMeta: GeneratedDocMeta[] = [
  {
    "id": "development-log",
    "type": "post",
    "title": "Development Log",
    "date": "2026/09/24 11:02",
    "tags": [
      "devlog",
      "commit"
    ],
    "summary": "Development Log\nGenerated from source commit 469f79e76f0a54c75aad2421d12273d595acd6ea.\n469f79e 2026-09-24T11:02:06+08...",
    "wordCount": 6609,
    "readingMinutes": 17,
    "updated": "2026/09/24 11:02",
    "path": "./posts/development-log.md"
  },
  {
    "id": "hello-world",
    "type": "post",
    "title": "Hello World",
    "date": "2026-05-01",
    "tags": [
      "intro",
      "welcome"
    ],
    "summary": "Hello World\nWelcome to your new Vorlage site. Edit or replace this post to get started.\nThis template supports GitHub...",
    "wordCount": 38,
    "readingMinutes": 1,
    "updated": "2026/09/24 11:02",
    "path": "./posts/hello-world.md"
  },
  {
    "id": "sample-note",
    "type": "note",
    "title": "Sample Note",
    "date": "2026-05-01",
    "tags": [
      "note"
    ],
    "summary": "This is a sample note. Replace it with your own content.",
    "wordCount": 11,
    "readingMinutes": 1,
    "updated": "2026/09/24 11:02",
    "path": "./notes/sample-note.md"
  }
] as GeneratedDocMeta[]

export default generatedDocMeta
