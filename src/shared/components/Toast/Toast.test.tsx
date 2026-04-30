import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Toast } from './Toast'

describe('Toast Component', () => {
  it('deve renderizar o toast com mensagem', () => {
    render(<Toast message="Operação realizada com sucesso!" />)

    const message = screen.getByText('Operação realizada com sucesso!')
    expect(message).toBeInTheDocument()
  })

  it('deve renderizar toast com classe CSS correta', () => {
    const { container } = render(<Toast message="Erro ao processar" />)

    const toast = container.querySelector('.toast')
    expect(toast).toHaveClass('toast')
  })
})
