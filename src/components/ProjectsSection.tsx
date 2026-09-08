import { motion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <section id="projects" className="col-span-full" aria-labelledby="projects-heading">
      <motion.div
        className="mb-4 flex items-end justify-between gap-4 px-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <div className="sketch-heading">
          <h2
            id="projects-heading"
            className="font-hand text-3xl font-semibold text-ink sm:text-4xl"
          >
            Core Projects
          </h2>
          <p className="mt-1 font-note text-base text-graphite">
            Production systems · Problem → Solution
          </p>
        </div>
        <span className="sketch-heading hidden font-label text-xs text-graphite sm:inline">
          sketched from production notes
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
