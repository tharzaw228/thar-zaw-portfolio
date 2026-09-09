import { motion } from 'framer-motion'
import { useSoftMotion } from '../hooks/useSoftMotion'
import { LANGUAGES, SKILL_CATEGORIES } from '../data/portfolio'
import { WashiTape } from './PaperBackdrop'
import { skillIcons } from './SketchIcons'

const HANG = {
  backend: { frame: 'portrait', wood: 'walnut', catalog: '01' },
  frontend: { frame: 'landscape', wood: 'gilt', catalog: '02' },
  devops: { frame: 'panorama', wood: 'ink', catalog: '03' },
  erp: { frame: 'study', wood: 'pine', catalog: '04' },
  engineering: { frame: 'sketch', wood: 'tape', catalog: '05' },
  professional: { frame: 'oval', wood: 'rose', catalog: '06' },
} as const

function HangWire() {
  return (
    <svg className="gallery-wire" viewBox="0 0 100 18" aria-hidden="true">
      <circle cx="50" cy="3.2" r="1.6" fill="#2c261c" />
      <path
        d="M20 17.5 C 34 9 42 4.2 50 3.4 C 58 4.2 67 9 80 17.5"
        fill="none"
        stroke="#2c261c"
        strokeWidth="1"
      />
    </svg>
  )
}

function GalleryPiece({
  id,
  delay,
  reduce,
}: {
  id: (typeof SKILL_CATEGORIES)[number]['id']
  delay: number
  reduce: boolean
}) {
  const category = SKILL_CATEGORIES.find((item) => item.id === id)!
  const hang = HANG[id]
  const Icon = skillIcons[id]

  return (
    <motion.article
      className={`gallery-piece is-${hang.frame} is-${hang.wood}`}
      initial={reduce ? false : { opacity: 0, y: -28, rotate: -2.4 }}
      animate={{ opacity: 1, y: 0, rotate: hang.frame === 'sketch' ? -1.8 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 12, delay }}
    >
      <HangWire />
      <div className="gallery-frame">
        {hang.wood === 'tape' ? <WashiTape className="-top-1.5 left-6" rotate={-8} /> : null}
        <div className="gallery-canvas">
          <Icon className="gallery-art" title={category.title} />
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="gallery-plaque">
        <span>{hang.catalog}</span>
        {category.title}
      </p>
    </motion.article>
  )
}

export function SkillsSketch() {
  const reduce = useSoftMotion()

  return (
    <section id="skills" className="gallery" aria-labelledby="skills-heading">
      <header className="gallery-title">
        <div className="sketch-heading">
          <p className="font-label text-xs text-muted">room 02 · works on the wall</p>
          <h2 id="skills-heading" className="font-hand text-2xl font-normal text-ink lg:text-4xl lg:font-semibold">
            Skills
          </h2>
        </div>
      </header>

      <div className="gallery-wall">
        <div className="gallery-rail" aria-hidden="true" />

        {SKILL_CATEGORIES.map((category, index) => (
          <GalleryPiece key={category.id} id={category.id} delay={0.04 + index * 0.06} reduce={reduce} />
        ))}

        <motion.aside
          className="gallery-piece is-diptych is-gilt"
          initial={reduce ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduce ? { duration: 0 } : { type: 'spring', stiffness: 80, damping: 14, delay: 0.42 }
          }
        >
          <HangWire />
          <div className="gallery-diptych">
            {LANGUAGES.map((language) => (
              <div key={language.id} className="gallery-frame">
                <div className="gallery-canvas">
                  <p className="gallery-mini-title">{language.name}</p>
                  <p className="gallery-mini-note">{language.level}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="gallery-plaque">
            <span>07</span>
            Languages
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
