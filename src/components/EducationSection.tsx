import { motion } from 'framer-motion'
import { CERTIFICATIONS, EDUCATION } from '../data/portfolio'

const LEFT_SCHOOLS = EDUCATION.slice(0, 3)
const RIGHT_SCHOOLS = EDUCATION.slice(3)

function Prompt() {
  return <span className="term-prompt">tharzaw:~/educations $</span>
}

function Cursor() {
  return <span className="term-cursor" aria-hidden />
}

function TermDots() {
  return (
    <span className="term-dots" aria-hidden>
      <i className="is-terra" />
      <i className="is-ochre" />
      <i className="is-forest" />
    </span>
  )
}

function SchoolCard({
  entry,
  index,
  showCursor,
}: {
  entry: (typeof EDUCATION)[number]
  index: number
  showCursor?: boolean
}) {
  return (
    <motion.article
      className="term-window"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
    >
      <header className="term-chrome">
        <TermDots />
        <h3 className="term-title">{entry.institution}</h3>
      </header>
      <div className="term-screen">
        <p className="term-focus">{entry.focus}</p>
        <p className="term-when">{entry.period}</p>
        <p className="term-note">{entry.detail}</p>
        <p className="term-line">
          <Prompt />
          {showCursor ? <Cursor /> : null}
        </p>
      </div>
    </motion.article>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="education-lab" aria-labelledby="education-heading">
      <header className="education-lab-head">
        <div className="sketch-heading">
          <p className="font-label text-xs text-muted">the command line · school records</p>
          <h2
            id="education-heading"
            className="font-hand text-3xl font-semibold text-ink sm:text-4xl"
          >
            Educations
          </h2>
        </div>
      </header>

      <div className="education-grid">
        <div className="education-stack">
          {LEFT_SCHOOLS.map((entry, index) => (
            <SchoolCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        <div className="education-stack is-side">
          <motion.aside
            className="term-window is-credentials"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.08 }}
          >
            <header className="term-chrome">
              <TermDots />
              <h3 className="term-title">Credentials</h3>
            </header>
            <div className="term-screen">
              {CERTIFICATIONS.map((cert) => (
                <p key={cert.name} className="term-cert">
                  {cert.name}
                  <small>
                    {cert.issuer} · {cert.date}
                  </small>
                </p>
              ))}
              <p className="term-line">
                <Prompt />
                <Cursor />
              </p>
            </div>
          </motion.aside>

          {RIGHT_SCHOOLS.map((entry, index) => (
            <SchoolCard
              key={entry.id}
              entry={entry}
              index={index + LEFT_SCHOOLS.length}
              showCursor
            />
          ))}
        </div>
      </div>
    </section>
  )
}
