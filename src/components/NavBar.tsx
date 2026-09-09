import { useEffect, useState } from 'react'
import { BOOK_PAGES, type PageId } from '../data/pages'

type NavBarProps = {
  pageId: PageId
  onNavigate: (id: PageId) => void
}

export function NavBar({ pageId, onNavigate }: NavBarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    function onChange() {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function go(id: PageId) {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <nav className="site-nav" aria-label="Portfolio pages">
      <div className="sketch-heading site-nav-card">
        <div className="site-nav-row">
          <button
            type="button"
            className="sketch-nav-brand font-hand text-2xl text-pencil-terra"
            onClick={() => go('home')}
          >
            Thar Zaw
          </button>

          <button
            type="button"
            className={`site-nav-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="site-nav-links"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul id="site-nav-links" className={`site-nav-links${open ? ' is-open' : ''}`}>
            {BOOK_PAGES.map((page) => {
              const active = page.id === pageId

              return (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => go(page.id)}
                    className={`sketch-nav-tab font-hand px-2.5 py-1 text-lg ${
                      active ? 'is-active' : ''
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {page.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
