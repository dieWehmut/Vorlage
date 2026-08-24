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
    "date": "2026/08/24 23:09",
    "tags": [
      "devlog",
      "commit"
    ],
    "summary": "Development Log\nGenerated from source commit 39bcdcd209279a5cc72e3a19a4f256c4045c22a9.\n39bcdcd 2026-08-24T23:09:09+08...",
    "wordCount": 6039,
    "readingMinutes": 16,
    "updated": "2026/08/24 23:09",
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
    "updated": "2026/08/24 23:09",
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
    "updated": "2026/08/24 23:09",
    "path": "./notes/sample-note.md"
  }
] as GeneratedDocMeta[]

export default generatedDocMeta
