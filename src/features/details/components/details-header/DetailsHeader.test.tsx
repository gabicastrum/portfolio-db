import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DetailsHeader } from './DetailsHeader';

describe('DetailsHeader Component', () => {
  it('deve renderizar título e link de download de currículo', () => {
    render(
      <DetailsHeader
        title="Currículo"
        pdf="/files/curriculo.pdf"
        fileName="curriculo.pdf"
      />
    );
    
    const title = screen.getByText('Currículo');
    const downloadButton = screen.getByText('Baixar Currículo');
    
    expect(title).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });

  it('o link de download deve ter os atributos corretos', () => {
    render(
      <DetailsHeader
        title="Currículo"
        pdf="/files/curriculo.pdf"
        fileName="curriculo.pdf"
      />
    );
    
    const downloadLink = screen.getByText('Baixar Currículo').closest('a');
    
    expect(downloadLink?.getAttribute('href')).toBe('/files/curriculo.pdf');
    expect(downloadLink?.getAttribute('download')).toBe('curriculo.pdf');
  });
});
