import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  it('deve chamar onPageChange ao clicar em um número de página', () => {
    const mockOnPageChange = vi.fn();
    
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('deve desabilitar botão anterior na primeira página', () => {
    const mockOnPageChange = vi.fn();
    
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );
    
    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    
    expect(prevButton).toBeDisabled();
  });
});
