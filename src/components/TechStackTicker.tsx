import { TECH_STACK } from '../data/portfolio'
import { IconIsoCube } from './SketchIcons'

export function TechStackTicker() {
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <section
      className="sketch-card col-span-full py-5"
      aria-label="Technical stack"
    >
      <div className="relative z-0 mb-4 flex items-center gap-3 px-8 sm:px-10">
        <IconIsoCube className="h-10 w-10" />
        <div>
          <h2 className="font-hand text-2xl font-semibold text-ink">Tech Stack</h2>
          <p className="font-label text-xs text-muted">
            Core competencies &amp; toolchain
          </p>
        </div>
      </div>

      <div className="relative z-0 mx-5 overflow-hidden py-1 sm:mx-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-3 bg-paper-card" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-3 bg-paper-card" />
        <div className="pointer-events-none absolute inset-y-0 left-3 z-10 w-12 bg-gradient-to-r from-paper-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-3 z-10 w-12 bg-gradient-to-l from-paper-card to-transparent" />

        <div className="flex w-max animate-ticker gap-3">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="sketch-chip shrink-0 px-4 py-1.5 font-note text-sm text-graphite transition-colors duration-200 hover:text-pencil-terra"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
