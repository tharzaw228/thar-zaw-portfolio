import { PROJECTS } from '../data/portfolio'
import { IconIsoCube, projectIcons } from './SketchIcons'

type Project = (typeof PROJECTS)[number]

const statusConfig = {
  deployed: {
    label: 'Deployed',
    text: 'text-pencil-slate',
  },
  active: {
    label: 'Active Pipeline',
    text: 'text-pencil-forest',
  },
} as const

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status]
  const Icon = projectIcons[project.id] ?? IconIsoCube

  return (
    <article className="sketch-card group relative col-span-full overflow-hidden p-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:p-6 lg:col-span-1">
      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Icon className="mt-0.5 h-12 w-12" />
          <div>
            <span className="font-label text-xs text-muted">{project.tag}</span>
            <h3 className="mt-0.5 font-hand text-2xl font-semibold text-ink">
              {project.title}
            </h3>
          </div>
        </div>
        <span
          className={`sketch-chip inline-flex items-center gap-1.5 px-2.5 py-1 font-label text-[11px] ${status.text}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {status.label}
        </span>
      </div>

      <div className="relative mt-4 space-y-3 font-note text-base leading-relaxed">
        <div>
          <p className="mb-1 font-hand text-lg text-pencil-terra">Problem</p>
          <p className="text-graphite">{project.problem}</p>
        </div>
        <div className="h-px bg-ink/15" />
        <div>
          <p className="mb-1 font-hand text-lg text-pencil-forest">Solution</p>
          <p className="text-graphite">{project.solution}</p>
        </div>
      </div>
    </article>
  )
}
