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
import { detectSoftMotion } from './lib/motion'

function isDesktopBook() {
  return window.matchMedia('(min-width: 1024px)').matches
}

function App() {
  const [pageId, setPageId] = useState<PageId>('home')
  const [direction, setDirection] = useState<1 | -1>(1)
  const [desktop, setDesktop] = useState(isDesktopBook)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    function onChange() {
      setDesktop(media.matches)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (desktop) return

    const timer = window.setTimeout(() => {
      document.getElementById(pageId)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, 40)

    return () => window.clearTimeout(timer)
  }, [desktop, pageId])

  const goTo = useCallback(
    (nextId: PageId) => {
      if (nextId === pageId) {
        if (!isDesktopBook()) {
          document.getElementById(nextId)?.scrollIntoView({
            behavior: detectSoftMotion() ? 'instant' : 'smooth',
          })
        }
        return
      }

      const from = BOOK_PAGES.findIndex((page) => page.id === pageId)
      const to = BOOK_PAGES.findIndex((page) => page.id === nextId)
      setDirection(to > from ? 1 : -1)
      setPageId(nextId)

      if (!isDesktopBook()) {
        document.getElementById(nextId)?.scrollIntoView({
          behavior: detectSoftMotion() ? 'instant' : 'smooth',
        })
      }
    },
    [pageId],
  )

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

      <main className="relative mx-auto max-w-6xl space-y-5 px-4 py-4 sm:px-6 lg:hidden">
        <HomePage live={pageId === 'home'} />
        <SkillsPage />
        <ProjectsPage />
        <EducationPage />
        <ContactPage />
      </main>

      {desktop ? (
        <BookViewer pageId={pageId} direction={direction} onNavigate={goTo} />
      ) : null}
    </div>
  )
}

export default App
