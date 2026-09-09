import { forwardRef, useEffect, useRef, useState, type ReactNode } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { BOOK_PAGES, type PageId } from '../data/pages'
import { useSoftMotion } from '../hooks/useSoftMotion'
import { HomePage, renderPage } from './PortfolioPages'

type BookViewerProps = {
  pageId: PageId
  direction: 1 | -1
  onNavigate: (id: PageId) => void
}

type FlipApi = {
  flip: (page: number, corner?: 'top' | 'bottom') => void
  flipNext: (corner?: 'top' | 'bottom') => void
  flipPrev: (corner?: 'top' | 'bottom') => void
  getCurrentPageIndex: () => number
}

type FlipBookHandle = {
  pageFlip: () => FlipApi
}

const BookPage = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function BookPage({ children }, ref) {
    return (
      <div ref={ref} className="book-html-page">
        {children}
      </div>
    )
  },
)

function getBookApi(bookRef: { current: FlipBookHandle | null }) {
  try {
    return bookRef.current?.pageFlip() ?? null
  } catch {
    return null
  }
}

function pageIndex(id: PageId) {
  return BOOK_PAGES.findIndex((page) => page.id === id)
}

function measureBook() {
  return {
    width: Math.min(1100, Math.max(720, window.innerWidth - 96)),
    height: Math.max(440, window.innerHeight - 196),
  }
}

export function BookViewer({ pageId, onNavigate }: BookViewerProps) {
  const cheap = useSoftMotion()
  const bookRef = useRef<FlipBookHandle | null>(null)
  const destRef = useRef<number | null>(null)
  const steppingRef = useRef(false)
  const pageIdRef = useRef(pageId)
  const [shownIndex, setShownIndex] = useState(pageIndex(pageId))
  const [size, setSize] = useState(measureBook)
  const startIndex = pageIndex(pageId)

  pageIdRef.current = pageId

  useEffect(() => {
    function onResize() {
      setSize(measureBook())
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function stepToward() {
    const api = getBookApi(bookRef)
    const dest = destRef.current
    if (!api || dest == null || steppingRef.current) return

    const current = api.getCurrentPageIndex()
    if (current === dest) {
      destRef.current = null
      steppingRef.current = false
      return
    }

    steppingRef.current = true
    if (current < dest) api.flipNext('top')
    else api.flipPrev('top')
  }

  useEffect(() => {
    if (cheap) {
      setShownIndex(pageIndex(pageId))
      return
    }

    destRef.current = pageIndex(pageId)
    steppingRef.current = false
    const timer = window.setTimeout(stepToward, 40)
    return () => window.clearTimeout(timer)
  }, [pageId, cheap])

  const canPrev = shownIndex > 0
  const canNext = shownIndex < BOOK_PAGES.length - 1

  if (cheap) {
    return (
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="book-controls mb-3 flex items-center justify-between px-2">
          <button
            type="button"
            className="sketch-btn font-hand text-lg text-graphite disabled:opacity-30"
            disabled={!canPrev}
            onClick={() => onNavigate(BOOK_PAGES[shownIndex - 1].id)}
          >
            ← turn back
          </button>
          <p className="font-label text-xs text-graphite">
            page {shownIndex + 1} / {BOOK_PAGES.length}
          </p>
          <button
            type="button"
            className="sketch-btn font-hand text-lg text-graphite disabled:opacity-30"
            disabled={!canNext}
            onClick={() => onNavigate(BOOK_PAGES[shownIndex + 1].id)}
          >
            turn page →
          </button>
        </div>

        <div className="book-stage">
          <div
            className="book-html-page"
            style={{ width: size.width, height: size.height, maxWidth: '100%' }}
          >
            {pageId === 'home' ? <HomePage live /> : renderPage(pageId)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <div className="book-controls mb-3 flex items-center justify-between px-2">
        <button
          type="button"
          className="sketch-btn font-hand text-lg text-graphite disabled:opacity-30"
          disabled={!canPrev}
          onClick={() => {
            destRef.current = null
            steppingRef.current = false
            getBookApi(bookRef)?.flipPrev('top')
          }}
        >
          ← turn back
        </button>
        <p className="font-label text-xs text-graphite">
          page {shownIndex + 1} / {BOOK_PAGES.length}
        </p>
        <button
          type="button"
          className="sketch-btn font-hand text-lg text-graphite disabled:opacity-30"
          disabled={!canNext}
          onClick={() => {
            destRef.current = null
            steppingRef.current = false
            getBookApi(bookRef)?.flipNext('top')
          }}
        >
          turn page →
        </button>
      </div>

      <div className="book-stage">
        <HTMLFlipBook
          ref={bookRef}
          className="sketch-book"
          style={{}}
          width={size.width}
          height={size.height}
          size="stretch"
          minWidth={640}
          maxWidth={1152}
          minHeight={440}
          maxHeight={1200}
          startPage={startIndex}
          drawShadow
          flippingTime={720}
          usePortrait
          startZIndex={1}
          autoSize
          maxShadowOpacity={0.45}
          showCover={false}
          mobileScrollSupport={false}
          clickEventForward
          useMouseEvents={false}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={false}
          onFlip={(event: { data: number }) => {
            const arrived = event.data
            setShownIndex(arrived)
            steppingRef.current = false

            const dest = destRef.current
            if (dest != null && arrived !== dest) {
              window.setTimeout(stepToward, 70)
              return
            }

            destRef.current = null
            const next = BOOK_PAGES[arrived]
            if (next && next.id !== pageIdRef.current) {
              onNavigate(next.id)
            }
          }}
        >
          {BOOK_PAGES.map((page) => (
            <BookPage key={page.id}>
              {page.id === 'home' ? (
                <HomePage live={pageId === 'home'} />
              ) : (
                renderPage(page.id)
              )}
            </BookPage>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  )
}
