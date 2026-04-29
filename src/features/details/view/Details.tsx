import './Details.css';

import curriculoPdf from '@/assets/CV-gabriela-de-castro-laurindo.pdf';

export function Details() {
  return (
    <div className="portfolio-container">
        <div className="details-container">
          <div className="details-header">
            <h1>Currículo</h1>
            <a
              href={curriculoPdf}
              download="CV-gabriela-de-castro-laurindo.pdf"
              className="download-button"
            >
              <svg
                className="download-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Baixar Currículo
            </a>
          </div>

          <iframe
            src={curriculoPdf}
            className="details-preview"
            title="Currículo Gabriela de Castro Laurindo"
          >
            <p>
              Seu navegador não suporta visualização de PDFs.{' '}
              <a href={curriculoPdf} download>
                Clique aqui para baixar
              </a>
            </p>
          </iframe>
        </div>
      </div>
    );
  }
