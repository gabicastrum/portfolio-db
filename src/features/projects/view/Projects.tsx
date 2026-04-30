import { Pagination } from "@/shared/components/Pagination/Pagination";
import { ProjectCard } from "../components/project-card/ProjectCard";
import { useProjectsViewModel } from "../useProjectsViewModel";

import "./Projects.css";


export function Projects() {
  const {
    projects,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useProjectsViewModel();
  
  return (
      <div className="projects-page">
    <div className="portfolio-container">
      <h1 className="page-title">Meus Projetos</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
    </div>
  );
}