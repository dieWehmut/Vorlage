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
    "date": "2026/10/11 18:50",
    "tags": [
      "devlog",
      "commit"
    ],
    "summary": "Development Log\nGenerated from source commit 470f3c1e386f3309b9a82f24ca49730e3cb02487.\n470f3c1 2026-10-11T18:50:27+08...",
    "wordCount": 6859,
    "readingMinutes": 18,
    "updated": "2026/10/11 18:50",
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
    "updated": "2026/10/11 18:50",
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
    "updated": "2026/10/11 18:50",
    "path": "./notes/sample-note.md"
  }
] as GeneratedDocMeta[]

export default generatedDocMeta
