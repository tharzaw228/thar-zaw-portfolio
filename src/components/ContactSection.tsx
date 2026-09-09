import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSoftMotion } from '../hooks/useSoftMotion'
import { CONTACT_LINKS } from '../data/portfolio'
import { Footer } from './Footer'
import { contactIcons, IconIsoEnvelope } from './SketchIcons'

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

export function ContactSection() {
  const reduce = useSoftMotion()
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)

  async function toggleBox() {
    if (busy) return
    if (reduce) {
      setOpen((current) => !current)
      return
    }
    setBusy(true)
    setOpen((current) => !current)
    await wait(open ? 520 : 780)
    setBusy(false)
  }

  const email = CONTACT_LINKS.find((link) => link.id === 'email')
  const cards = CONTACT_LINKS.filter((link) => link.id !== 'email')

  return (
    <section
      id="contact"
      className={`letter-desk${open ? ' is-open' : ''}${busy ? ' is-busy' : ''}`}
      aria-labelledby="contact-heading"
    >
      <header className="letter-desk-head">
        <div className="sketch-heading">
          <p className="font-label text-xs text-muted">the letter box · write back</p>
          <h2 id="contact-heading" className="font-hand text-2xl font-normal text-ink lg:text-4xl lg:font-semibold">
            Contact
          </h2>
        </div>
      </header>

      <div className="letter-stage">
        <div className="letter-box">
          <div id="letter-tray" className="letter-tray">
            <div className="letter-tray-well">
              <motion.a
                href={email?.href}
                className="letter-sheet"
                initial={false}
                animate={
                  open
                    ? { opacity: 1, y: 0, rotate: -1.6 }
                    : { opacity: 0, y: 28, rotate: -1.6 }
                }
                transition={{ duration: reduce ? 0 : 0.38, delay: open ? 0.28 : 0 }}
              >
                <span className="letter-sheet-rule" aria-hidden />
                <p className="letter-sheet-meta">Yangon · to the desk</p>
                <p className="letter-sheet-dear">Dear visitor,</p>
                <p className="letter-sheet-body">
                  Open to enterprise engineering roles and technical collaborations.
                </p>
                <p className="letter-sheet-sign">
                  — Thar Zaw
                  {email ? (
                    <span>
                      <IconIsoEnvelope className="h-8 w-8" />
                      {email.label}
                    </span>
                  ) : null}
                </p>
              </motion.a>

              <div className="letter-cards">
                {cards.map((link, index) => {
                  const Icon = contactIcons[link.id] ?? IconIsoEnvelope

                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className={`letter-card is-${link.id}`}
                      initial={false}
                      animate={
                        open
                          ? { opacity: 1, y: 0, rotate: index === 0 ? -3.4 : 2.8 }
                          : { opacity: 0, y: 18, rotate: index === 0 ? -3.4 : 2.8 }
                      }
                      transition={{
                        duration: reduce ? 0 : 0.32,
                        delay: open ? 0.4 + index * 0.08 : 0,
                      }}
                    >
                      <Icon className="h-10 w-10" />
                      <span>
                        <em>{link.label}</em>
                        {link.external ? <small>↗</small> : null}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="letter-tray-front">
              {open ? (
                <button
                  type="button"
                  className="letter-close font-hand"
                  onClick={() => void toggleBox()}
                  disabled={busy}
                >
                  close the box
                </button>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            className="letter-lid"
            onClick={() => void toggleBox()}
            disabled={busy}
            aria-expanded={open}
            aria-controls="letter-tray"
          >
            <span className="letter-lid-face">
              <svg className="letter-lid-triangle" viewBox="0 0 200 118" aria-hidden="true">
                <polygon
                  points="6,5 194,5 100,113"
                  fill="none"
                  stroke="#2c261c"
                  strokeWidth="1.45"
                  strokeLinejoin="round"
                />
                <polygon
                  points="12,9 188,9 100,106"
                  fill="none"
                  stroke="#2c261c"
                  strokeWidth="0.7"
                  opacity="0.28"
                />
              </svg>
              <span className="letter-lid-plate">letters</span>
              <span className="letter-seal" aria-hidden>
                TZ
              </span>
              {!open ? <span className="letter-lid-hint">open the box</span> : null}
            </span>
            <span className="letter-lid-back" aria-hidden />
            <span className="letter-lid-rim" aria-hidden />
          </button>
        </div>
      </div>

      <div className="letter-colophon">
        <Footer />
      </div>
    </section>
  )
}
