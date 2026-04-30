import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CopyEmailButton } from './CopyEmailButton'

describe('CopyEmailButton Component', () => {
  it('deve renderizar botão com children passado', () => {
    render(<CopyEmailButton email="test@example.com">Copiar Email</CopyEmailButton>)

    const button = screen.getByText('Copiar Email')
    expect(button).toBeInTheDocument()
  })

  it('deve renderizar com classe icon-button', () => {
    const { container } = render(
      <CopyEmailButton email="test@example.com">Copiar Email</CopyEmailButton>
    )

    const button = container.querySelector('.icon-button')
    expect(button).toBeInTheDocument()
  })
})
