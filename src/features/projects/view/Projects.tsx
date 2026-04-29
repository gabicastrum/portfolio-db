import { Pagination } from "@/shared/components/pagination/Pagination";
import { ProjectCard } from "../components/project-card/ProjectCard";
import { useProjectsViewModel } from "../useProjectsViewModel";

import "./Projects.css";
import { Loading } from "@/shared/components/Loading/Loading";


export function Projects() {
  const {
    projects,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading = false,
  } = useProjectsViewModel();

  if (isLoading) {
    return (
      <div className="projects-page">
        <Loading message="Carregando projetos..." />
      </div>
    );
  }
  
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