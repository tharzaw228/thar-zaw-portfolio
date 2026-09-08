export const BOOK_PAGES = [
  { id: 'home', label: 'Cover' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Educations' },
  { id: 'contact', label: 'Contact' },
] as const

export type PageId = (typeof BOOK_PAGES)[number]['id']
