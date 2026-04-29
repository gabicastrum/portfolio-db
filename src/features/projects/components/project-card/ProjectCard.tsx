import './ProjectCard.css';
import githubIcon from '@/assets/github.svg';
import { ImageWithFallback } from '@/shared/components/ImageWithFallback/ImageWithFallback';
import type { ProjectCardProps } from '../../model/projects.types';
import defaultImage from '@/assets/logo-db-cinza.png';


export function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {image && (
        <ImageWithFallback
          src={image}
          alt={title}
          className="project-image"
          fallback={
            <img
            src={defaultImage}
            alt="Imagem padrão"
            className="project-image"
            />
          }
        />
      )}

      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="project-description">{description}</p>

        <div className="project-links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button project-button-primary"
            >
              Ver Projeto
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button project-button-secondary"
          >
            <img src={githubIcon} alt="GitHub" className="button-icon" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}