import { ProjectCard } from '../components/project-card/ProjectCard'
import { useProjectsViewModel } from '../useProjectsViewModel'

import './Projects.css'

export function Projects() {
  const { projects } = useProjectsViewModel()

  return (
    <div className="projects-page">
      <div className="portfolio-container">
        <h1 className="page-title">Meus Projetos</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </div>
  )
}
