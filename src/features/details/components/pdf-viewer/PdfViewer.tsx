import './PdfViewer.css';

interface PdfViewerProps {
  src: string;
  title: string;
}

export function PdfViewer({ src, title }: PdfViewerProps) {
  return (
    <iframe src={src} className="details-preview" title={title}>
      <p>
        Seu navegador não suporta visualização de PDFs.{' '}
        <a href={src} download>
          Clique aqui para baixar
        </a>
      </p>
    </iframe>
  );
}