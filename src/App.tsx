import { useCallback, useEffect, useState } from 'react'
import { BookViewer } from './components/BookViewer'
import { NavBar } from './components/NavBar'
import { PaperBackdrop } from './components/PaperBackdrop'
import {
  ContactPage,
  EducationPage,
  HomePage,
  ProjectsPage,
  SkillsPage,
} from './components/PortfolioPages'
import { BOOK_PAGES, type PageId } from './data/pages'

function isDesktopBook() {
  return window.matchMedia('(min-width: 1024px)').matches
}

function App() {
  const [pageId, setPageId] = useState<PageId>('home')
  const [direction, setDirection] = useState<1 | -1>(1)

  const goTo = useCallback((nextId: PageId) => {
    if (nextId === pageId) {
      if (!isDesktopBook()) {
        document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    const from = BOOK_PAGES.findIndex((page) => page.id === pageId)
    const to = BOOK_PAGES.findIndex((page) => page.id === nextId)
    setDirection(to > from ? 1 : -1)
    setPageId(nextId)

    if (isDesktopBook()) {
      window.history.replaceState(null, '', `#${nextId}`)
    } else {
      document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pageId])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageId
    if (BOOK_PAGES.some((page) => page.id === hash)) {
      setPageId(hash)
      if (!isDesktopBook()) {
        window.requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView()
        })
      }
    }
  }, [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!isDesktopBook()) return
      const index = BOOK_PAGES.findIndex((page) => page.id === pageId)
      if (event.key === 'ArrowRight' && index < BOOK_PAGES.length - 1) {
        goTo(BOOK_PAGES[index + 1].id)
      }
      if (event.key === 'ArrowLeft' && index > 0) {
        goTo(BOOK_PAGES[index - 1].id)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pageId, goTo])

  return (
    <div className="relative min-h-svh text-ink">
      <PaperBackdrop />
      <NavBar pageId={pageId} onNavigate={goTo} />

      <main className="relative mx-auto max-w-6xl space-y-5 px-4 py-8 sm:px-6 lg:hidden">
        <HomePage live={pageId === 'home'} />
        <SkillsPage />
        <ProjectsPage />
        <EducationPage />
        <ContactPage />
      </main>

      <BookViewer pageId={pageId} direction={direction} onNavigate={goTo} />
    </div>
  )
}

export default App
