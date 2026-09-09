import { motion } from 'framer-motion'
import { EXPERIENCE_HIGHLIGHTS } from '../data/portfolio'
import { WashiTape } from './PaperBackdrop'
import { IconIsoCube, IconIsoPencil, IconIsoPhone } from './SketchIcons'
import { useBroadcastLive } from './CoverBroadcast'
import { Typewriter } from './Typewriter'

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const revealed = useBroadcastLive()

  return (
    <header id="home" className="sketch-card col-span-full p-5 sm:p-10 lg:p-12">
      <WashiTape className="-top-1.5 left-10" rotate={-7} />
      <WashiTape className="-top-1 right-16 hidden sm:block" rotate={5} />

      <div className="relative grid items-start gap-5 sm:gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.div
            className="mb-3 flex flex-wrap items-center gap-3 sm:mb-6"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <span className="sketch-chip inline-flex items-center gap-2 px-3 py-1 font-label text-xs text-graphite">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pencil-forest opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pencil-forest" />
              </span>
              Available for enterprise engagements
            </span>
          </motion.div>

          <motion.p
            className="mb-1 font-hand text-2xl font-normal text-pencil-terra sm:text-4xl"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.28, delay: 0.06, ease: 'easeOut' }}
          >
            Thar Zaw
          </motion.p>

          <motion.h1
            className="max-w-3xl font-hand text-[1.45rem] leading-[1.25] font-normal tracking-wide text-ink sm:text-5xl sm:leading-[1.15] sm:font-semibold lg:text-[3.25rem]"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.28, delay: 0.12, ease: 'easeOut' }}
          >
            Full-Stack Engineer building high-availability enterprise systems.
          </motion.h1>

          <motion.div
            className="mt-3 min-h-[1.4rem] sm:mt-7 sm:min-h-[2rem]"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.28, delay: 0.18, ease: 'easeOut' }}
          >
            {revealed && <Typewriter />}
          </motion.div>

          <motion.ul
            className="mt-3 flex flex-wrap gap-2 sm:mt-8"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.28, delay: 0.24, ease: 'easeOut' }}
          >
            {EXPERIENCE_HIGHLIGHTS.map((highlight) => (
              <li
                key={highlight}
                className="sketch-chip px-3 py-1.5 font-note text-sm text-graphite"
              >
                {highlight}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className="hidden items-end gap-3 self-end lg:flex"
          variants={item}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
          aria-hidden
        >
          <IconIsoPencil className="h-20 w-20 -rotate-6" />
          <IconIsoCube className="h-24 w-24 rotate-3" />
          <IconIsoPhone className="h-20 w-20 -rotate-2" />
        </motion.aside>
      </div>
    </header>
  )
}
