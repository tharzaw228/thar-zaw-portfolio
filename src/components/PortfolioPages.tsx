import type { ReactNode } from 'react'
import { CoverBroadcast } from './CoverBroadcast'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { Hero } from './Hero'
import { WorkDoorway } from './WorkDoorway'
import { SkillsSketch } from './SkillsSketch'
import type { PageId } from '../data/pages'

export function HomePage({ live = true }: { live?: boolean }) {
  return (
    <CoverBroadcast live={live}>
      <Hero />
    </CoverBroadcast>
  )
}

export function SkillsPage() {
  return <SkillsSketch />
}

export function ProjectsPage() {
  return <WorkDoorway />
}

export function EducationPage() {
  return <EducationSection />
}

export function ContactPage() {
  return <ContactSection />
}

const PAGE_VIEWS: Record<PageId, () => ReactNode> = {
  home: () => <HomePage />,
  skills: SkillsPage,
  projects: ProjectsPage,
  education: EducationPage,
  contact: ContactPage,
}

export function renderPage(id: PageId) {
  const View = PAGE_VIEWS[id]
  return <View />
}
