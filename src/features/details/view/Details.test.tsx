import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';

describe('Details View', () => {
  it('deve renderizar título e componente PdfViewer', () => {
    render(<Details />);
    
    const title = screen.getByText('Meu Currículo');
    const downloadButton = screen.getByText('Baixar Currículo');
    
    expect(title).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });

  it('deve renderizar iframe com PDF', () => {
    render(<Details />);
    
    const iframe = screen.getByTitle('Currículo Gabriela de Castro Laurindo');
    expect(iframe).toBeInTheDocument();
  });
});
