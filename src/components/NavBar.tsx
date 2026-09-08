import { BOOK_PAGES, type PageId } from '../data/pages'

type NavBarProps = {
  pageId: PageId
  onNavigate: (id: PageId) => void
}

export function NavBar({ pageId, onNavigate }: NavBarProps) {
  return (
    <nav
      className="relative z-50 mx-auto mt-4 max-w-6xl px-4 sm:px-6"
      aria-label="Portfolio pages"
    >
      <div className="sketch-heading flex w-full max-w-none flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
        <button
          type="button"
          className="sketch-nav-brand font-hand text-2xl text-pencil-terra"
          onClick={() => onNavigate('home')}
        >
          Thar Zaw
        </button>

        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {BOOK_PAGES.map((page) => {
            const active = page.id === pageId

            return (
              <li key={page.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(page.id)}
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
    </nav>
  )
}
