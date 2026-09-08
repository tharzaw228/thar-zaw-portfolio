import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import { IconIsoCube, projectIcons } from './SketchIcons'

const statusConfig = {
  deployed: { label: 'Deployed', text: 'text-pencil-slate' },
  active: { label: 'Active Pipeline', text: 'text-pencil-forest' },
} as const

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function DoorCottage() {
  return (
    <svg className="house-door-cottage" viewBox="0 0 64 72" aria-hidden="true">
      <path d="M10 64 L10 36 L32 16 L54 36 L54 64 Z" fill="#efe3c8" stroke="#2c261c" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 38 L32 14 L56 38" fill="none" stroke="#2c261c" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 14 L32 8 L40 8 L40 22" fill="#8b4a4a" stroke="#2c261c" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6 38 L32 12 L58 38 L54 40 L32 18 L10 40 Z" fill="#b25a38" stroke="#2c261c" strokeWidth="1.25" strokeLinejoin="round" />
      <rect x="26" y="44" width="12" height="20" fill="#8a6a28" stroke="#2c261c" strokeWidth="1.2" />
      <circle cx="35" cy="55" r="1.1" fill="#2c261c" />
      <rect x="14" y="42" width="9" height="9" fill="#d8ead8" stroke="#2c261c" strokeWidth="1.1" />
      <rect x="41" y="42" width="9" height="9" fill="#d8ead8" stroke="#2c261c" strokeWidth="1.1" />
      <path d="M14 46.5 H23 M18.5 42 V51 M41 46.5 H50 M45.5 42 V51" stroke="#2c261c" strokeWidth="0.7" />
    </svg>
  )
}

function DoorLeaf({
  side,
  onOpen,
  note,
}: {
  side: 'left' | 'right'
  onOpen?: () => void
  note?: ReactNode
}) {
  return (
    <div
      className={`house-door is-${side}`}
      aria-hidden={note ? undefined : true}
      onClick={onOpen}
    >
      <div className="house-door-face">
        <span className="house-door-window">
          <DoorCottage />
        </span>
        <span className="house-door-panel" />
        <span className="house-door-knob" />
        {note}
      </div>
    </div>
  )
}

function HouseColumn() {
  return (
    <div className="house-column" aria-hidden="true">
      <span className="house-column-cap" />
      <span className="house-column-shaft" />
      <span className="house-column-base" />
    </div>
  )
}

export function WorkDoorway() {
  const reduce = Boolean(useReducedMotion())
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const project = PROJECTS[index]
  const Icon = projectIcons[project.id] ?? IconIsoCube
  const status = statusConfig[project.status]

  async function openDoors() {
    if (busy || open) return
    if (reduce) {
      setOpen(true)
      return
    }
    setBusy(true)
    setOpen(true)
    await wait(720)
    setBusy(false)
  }

  async function closeDoors() {
    if (busy || !open) return
    if (reduce) {
      setOpen(false)
      return
    }
    setBusy(true)
    setOpen(false)
    await wait(620)
    setBusy(false)
  }

  async function go(next: number) {
    if (busy || next === index || next < 0 || next >= PROJECTS.length) return

    if (reduce) {
      setIndex(next)
      return
    }

    setBusy(true)
    setOpen(false)
    await wait(620)
    setIndex(next)
    await wait(80)
    setOpen(true)
    await wait(720)
    setBusy(false)
  }

  return (
    <section id="projects" className="work-house" aria-labelledby="projects-heading">
      <header className="work-house-head">
        <div className="sketch-heading">
          <p className="font-label text-xs text-muted">the front door · one job at a time</p>
          <h2 id="projects-heading" className="font-hand text-3xl font-semibold text-ink sm:text-4xl">
            Work
          </h2>
        </div>
      </header>

      <div className={`house-stage${open ? ' is-open' : ''}${busy ? ' is-busy' : ''}`}>
        <div className="house-facade">
          <div className="house-pediment" aria-hidden="true">
            <span className="house-pediment-outer" />
            <span className="house-pediment-inner" />
            <span className="house-pediment-beam" />
          </div>

          <div className="house-body">
            <HouseColumn />

            <div className="house-frame">
              <p className="house-transom">
                {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
              </p>

              <div className="house-room" aria-live="polite">
            <motion.article
              key={project.id}
              className="house-work"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: open ? 0.18 : 0 }}
            >
              <div className="house-work-top">
                <Icon className="h-12 w-12" title={project.title} />
                <div>
                  <p className="font-label text-sm text-muted">{project.tag}</p>
                  <h3 className="font-hand text-3xl font-semibold text-ink sm:text-4xl">
                    {project.title}
                  </h3>
                </div>
                <span
                  className={`sketch-chip inline-flex items-center gap-1.5 px-2.5 py-1 font-label text-xs ${status.text}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {status.label}
                </span>
              </div>

              <div className="house-work-copy">
                <div>
                  <p className="font-hand text-xl text-pencil-terra">Problem</p>
                  <p className="font-note text-graphite">{project.problem}</p>
                </div>
                <div>
                  <p className="font-hand text-xl text-pencil-forest">Solution</p>
                  <p className="font-note text-graphite">{project.solution}</p>
                </div>
              </div>
            </motion.article>

            {open ? (
              <nav className="house-nav" aria-label="Work experiences">
                <button
                  type="button"
                  className="sketch-btn house-nav-btn font-note text-base"
                  onClick={() => void go(index - 1)}
                  disabled={busy || index === 0}
                >
                  ← last room
                </button>
                <div className="house-dots">
                  {PROJECTS.map((item, itemIndex) => (
                    <button
                      key={item.id}
                      type="button"
                      className={itemIndex === index ? 'is-current' : undefined}
                      aria-label={`Open ${item.title}`}
                      aria-current={itemIndex === index ? 'true' : undefined}
                      onClick={() => void go(itemIndex)}
                      disabled={busy}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="sketch-btn house-nav-btn font-note text-base"
                  onClick={() => void closeDoors()}
                  disabled={busy}
                >
                  close door
                </button>
                <button
                  type="button"
                  className="sketch-btn house-nav-btn font-note text-base"
                  onClick={() => void go(index + 1)}
                  disabled={busy || index === PROJECTS.length - 1}
                >
                  next room →
                </button>
              </nav>
            ) : null}
          </div>

              <DoorLeaf
                side="left"
                onOpen={open ? undefined : () => void openDoors()}
                note={
                  !open ? (
                    <button
                      type="button"
                      className="house-knock font-hand"
                      onClick={(event) => {
                        event.stopPropagation()
                        void openDoors()
                      }}
                      disabled={busy}
                    >
                      <span className="house-knock-tape washi-tape" aria-hidden />
                      knock · open the door
                    </button>
                  ) : null
                }
              />
              <DoorLeaf side="right" onOpen={open ? undefined : () => void openDoors()} />
            </div>

            <HouseColumn />
          </div>
        </div>
      </div>
    </section>
  )
}
