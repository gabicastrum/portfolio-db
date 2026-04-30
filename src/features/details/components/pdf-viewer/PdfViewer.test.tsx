import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PdfViewer } from './PdfViewer';

describe('PdfViewer Component', () => {
  it('deve renderizar iframe com src correto', () => {
    render(
      <PdfViewer
        src="/files/documento.pdf"
        title="Meu Documento"
      />
    );
    
    const iframe = screen.getByTitle('Meu Documento');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', '/files/documento.pdf');
  });

  it('deve exibir mensagem de fallback para navegadores sem suporte', () => {
    render(
      <PdfViewer
        src="/files/documento.pdf"
        title="Meu Documento"
      />
    );
    
    const fallbackText = screen.getByText(/seu navegador não suporta visualização de pdfs/i);
    expect(fallbackText).toBeInTheDocument();
  });
});
