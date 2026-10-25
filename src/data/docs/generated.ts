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
    "date": "2026/10/25 12:46",
    "tags": [
      "devlog",
      "commit"
    ],
    "summary": "Development Log\nGenerated from source commit 0c462361e225e5a74e1279dbec8f68cb475bfd7d.\n0c46236 2026-10-25T12:46:59+08...",
    "wordCount": 6890,
    "readingMinutes": 18,
    "updated": "2026/10/25 12:46",
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
    "updated": "2026/10/25 12:46",
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
    "updated": "2026/10/25 12:46",
    "path": "./notes/sample-note.md"
  }
] as GeneratedDocMeta[]

export default generatedDocMeta
