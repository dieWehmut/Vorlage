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
    "date": "2026/09/25 19:21",
    "tags": [
      "devlog",
      "commit"
    ],
    "summary": "Development Log\nGenerated from source commit 9b0d7807770bb144d9208c82a9277c9d645f3bfb.\n9b0d780 2026-09-25T19:21:40+08...",
    "wordCount": 6719,
    "readingMinutes": 17,
    "updated": "2026/09/25 19:21",
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
    "updated": "2026/09/25 19:21",
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
    "updated": "2026/09/25 19:21",
    "path": "./notes/sample-note.md"
  }
] as GeneratedDocMeta[]

export default generatedDocMeta
