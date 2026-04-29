import './DetailsHeader.css';

interface DetailsHeaderProps {
  title: string;
  pdf: string;
  fileName: string;
}

export function DetailsHeader({ title, pdf, fileName }: DetailsHeaderProps) {
  return (
    <div className="details-header">
      <h1>{title}</h1>

      <a href={pdf} download={fileName} className="download-button">
        <svg
          className="download-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>

        Baixar Currículo
      </a>
    </div>
  );
}